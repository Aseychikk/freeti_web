import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchGroups, getGroupMembersCount, getGroupTasks, getGroupMembers, createGroupTask, deleteGroupTask } from '../lib/api';
import { useUser } from '../hooks/useUser';

const MONTHS = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const DAYS = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const COLORS = ['3b82f6', 'ef4444', '10b981', 'f59e0b', '8b5cf6', 'ec4899', '6b7280']; // Палитра цветов

function formatTime(timestamp: number): string {
    if (!timestamp) return '';
    const d = new Date(timestamp);
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

export function GroupDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    
    const { data: currentUser } = useUser();
    const myId = currentUser?.id;

    const [group, setGroup] = useState<any | null>(null);
    const [memberCount, setMemberCount] = useState<number>(0);
    const [myRole, setMyRole] = useState<string>('MEMBER');
    const [isLoading, setIsLoading] = useState(true);

    const [selectedDay, setSelectedDay] = useState<Date>(new Date());
    const [tasks, setTasks] = useState<any[]>([]);

    // Состояния для модального окна новой задачи
    const [showAddModal, setShowAddModal] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskBody, setNewTaskBody] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('12:00');
    const [endDate, setEndDate] = useState('');
    const [endTime, setEndTime] = useState('13:00');
    const [timeTask, setTimeTask] = useState('00:30');
    const [importance, setImportance] = useState(1);
    const [selectedColor, setSelectedColor] = useState(COLORS[0]);

    useEffect(() => {
        const loadGroupData = async () => {
            if (!id || !myId) return;
            try {
                const allGroups = await fetchGroups();
                const currentGroup = allGroups.find(g => String(g.id) === String(id));
                if (currentGroup) {
                    setGroup(currentGroup);
                    const count = await getGroupMembersCount(String(id));
                    setMemberCount(count || 0);
                }

                let membersLinks: any = await getGroupMembers(String(id));
                if (!Array.isArray(membersLinks)) membersLinks = membersLinks?.data || membersLinks?.content || [];
                
                const me = membersLinks.find((m: any) => (m.user1 || m.user_id || m.userId) === myId);
                if (me) setMyRole((me.role || 'MEMBER').toUpperCase());

            } catch (error) {
                console.error('Ошибка при загрузке группы:', error);
            } finally {
                setIsLoading(false);
            }
        };
        loadGroupData();
    }, [id, myId]);

    const loadTasks = async () => {
        if (!id) return;
        const yearMonthDay = `${selectedDay.getFullYear()}-${String(selectedDay.getMonth() + 1).padStart(2, '0')}-${String(selectedDay.getDate()).padStart(2, '0')}`;
        try {
            const data = await getGroupTasks(yearMonthDay, String(id));
            setTasks(data || []);
        } catch (error) {
            console.error('Ошибка при загрузке задач группы:', error);
        }
    };

    useEffect(() => {
        loadTasks();
    }, [id, selectedDay.getDate(), selectedDay.getMonth(), selectedDay.getFullYear()]);

    const dayTasks = useMemo(() => {
        const startOfDay = new Date(selectedDay);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(selectedDay);
        endOfDay.setHours(23, 59, 59, 999);

        return tasks.filter(t => {
            const taskStart = new Date(t.start);
            const taskEnd = new Date(t.time_end || t.start);
            return taskStart <= endOfDay && taskEnd >= startOfDay;
        }).sort((a, b) => a.start - b.start);
    }, [tasks, selectedDay]);

    // Открытие окна: подставляем выбранную дату
    const handleOpenModal = () => {
        const dateStr = `${selectedDay.getFullYear()}-${String(selectedDay.getMonth() + 1).padStart(2, '0')}-${String(selectedDay.getDate()).padStart(2, '0')}`;
        setStartDate(dateStr);
        setEndDate(dateStr);
        setNewTaskTitle('');
        setNewTaskBody('');
        setTimeTask('00:30');
        setImportance(1);
        setShowAddModal(true);
    };

    const handleCreateTask = async () => {
        if (!newTaskTitle.trim() || !id) {
            alert('Введите название события');
            return;
        }

        // Преобразуем длительность "HH:mm" в миллисекунды (минимум 30 мин = 1 800 000 мс)
        const [hours, minutes] = timeTask.split(':').map(Number);
        const durationMs = Math.max(
            ((hours || 0) * 60 + (minutes || 0)) * 60 * 1000,
            30 * 60 * 1000  // защита: не меньше 30 минут
        );

        try {
            await createGroupTask(id, {
                day_start: startDate,       // строка "YYYY-MM-DD"
                day_end: endDate,           // строка "YYYY-MM-DD"
                time_start: startTime,      // строка "HH:mm"
                time_end: endTime,          // строка "HH:mm"
                time_pick: durationMs,      // длительность в миллисекундах
                importance: importance,     // 1, 2 или 3
                title: newTaskTitle.trim(),
                body: newTaskBody.trim(),
                colour: selectedColor,      // без '#', например "3b82f6"
            });

            setShowAddModal(false);
            loadTasks();
        } catch (error) {
            console.error('Ошибка создания события:', error);
            alert('Не удалось создать событие. Убедитесь, что вы перелогинились (если токен истек).');
        }
    };

    const handleDeleteTask = async (taskId: number) => {
        if (!id || !window.confirm('Точно удалить это событие?')) return;
        try {
            await deleteGroupTask(taskId, String(id));
            loadTasks(); 
        } catch (error) {
            alert('Не удалось удалить событие.');
        }
    };

    const changeDay = (delta: number) => {
        const newDay = new Date(selectedDay);
        newDay.setDate(newDay.getDate() + delta);
        setSelectedDay(newDay);
    };

    // Права на расписание имеют владельцы и админы
    const isPrivileged = myRole === 'OWNER' || myRole === 'ADMIN';

    if (isLoading) return <div style={{ padding: '24px', textAlign: 'center' }}>Загрузка группы...</div>;
    if (!group) return <div style={{ padding: '24px', textAlign: 'center' }}>Группа не найдена</div>;

    const formattedDate = `${selectedDay.getDate()} ${MONTHS[selectedDay.getMonth()]} ${selectedDay.getFullYear()}, ${DAYS[selectedDay.getDay()]}`;

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', paddingBottom: '40px', paddingTop: '24px' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <button onClick={() => navigate(-1)} style={{ padding: '8px 12px', background: 'white', border: '1px solid #d1d5db', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', color: '#374151', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                        ← Назад
                    </button>
                    <h1 style={{ margin: 0, fontSize: '18px', color: '#1f2937' }}>Детали группы</h1>
                    <button onClick={() => navigate('/')} style={{ padding: '8px 12px', background: 'white', border: '1px solid #d1d5db', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', color: '#374151', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                        🏠 Главная
                    </button>
                </div>
                
                <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '24px', textAlign: 'center' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontWeight: 'bold', margin: '0 auto 16px auto' }}>
                        {(group.title?.[0] || 'G').toUpperCase()}
                    </div>
                    <h2 style={{ margin: '0 0 8px 0', fontSize: '22px', color: '#1f2937' }}>{group.title}</h2>
                    {group.body && <p style={{ margin: '0 0 16px 0', fontSize: '15px', color: '#6b7280' }}>{group.body}</p>}
                    
                    <button onClick={() => navigate(`/group/${group.id}/members`)} style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid #e5e7eb', background: '#f9fafb', color: '#374151', fontSize: '14px', fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        👥 Участников: {memberCount}
                    </button>
                </div>

                <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <h3 style={{ margin: 0, fontSize: '18px' }}>Расписание группы</h3>
                        
                        {isPrivileged && (
                            <button onClick={handleOpenModal} style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#3b82f6', color: 'white', border: 'none', fontSize: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                +
                            </button>
                        )}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f9fafb', padding: '8px', borderRadius: '8px', marginBottom: '20px' }}>
                        <button onClick={() => changeDay(-1)} style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', padding: '0 12px' }}>←</button>
                        <span style={{ fontWeight: 600, fontSize: '15px', color: '#374151' }}>{formattedDate}</span>
                        <button onClick={() => changeDay(1)} style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', padding: '0 12px' }}>→</button>
                    </div>

                    {dayTasks.length === 0 ? (
                        <p style={{ color: '#9ca3af', textAlign: 'center', padding: '20px 0', margin: 0 }}>Событий на этот день нет.</p>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {dayTasks.map(task => (
                                <div key={task.id} style={{ padding: '16px', borderRadius: '8px', background: task.colour ? `#${task.colour}` : '#3b82f6', color: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                        <div style={{ fontWeight: 600, fontSize: '16px' }}>{task.title}</div>
                                        <div style={{ fontSize: '13px', opacity: 0.9 }}>
                                            🕒 {formatTime(task.start)} {task.time_end > task.start && `- ${formatTime(task.time_end)}`}
                                        </div>
                                        {task.body && <div style={{ fontSize: '14px', marginTop: '4px', opacity: 0.95 }}>{task.body}</div>}
                                    </div>
                                    {isPrivileged && (
                                        <button onClick={() => handleDeleteTask(task.id)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', padding: '6px', borderRadius: '6px', cursor: 'pointer', fontSize: '16px' }} title="Удалить событие">
                                            🗑️
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Модальное окно создания события */}
            {showAddModal && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1100 }}>
                    <div style={{ background: 'white', borderRadius: '12px', padding: '24px', width: '90%', maxWidth: '400px', maxHeight: '90vh', overflowY: 'auto' }}>
                        <h2 style={{ margin: '0 0 16px 0', fontSize: '18px' }}>Новое событие</h2>
                        
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>Название *</label>
                            <input value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box' }} />
                        </div>

                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>Описание</label>
                            <textarea value={newTaskBody} onChange={(e) => setNewTaskBody(e.target.value)} rows={2} style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box', resize: 'none' }} />
                        </div>

                        {/* Даты и время */}
                        <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>Начало</label>
                                <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box', marginBottom: '4px' }} />
                                <input type="time" value={startTime} onChange={e => setStartTime(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box' }} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>Конец</label>
                                <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box', marginBottom: '4px' }} />
                                <input type="time" value={endTime} onChange={e => setEndTime(e.target.value)} style={{ width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box' }} />
                            </div>
                        </div>

                        {/* Длительность задачи */}
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>Длительность (мин. 30 мин)</label>
                            <input 
                                type="time" 
                                value={timeTask} 
                                onChange={e => setTimeTask(e.target.value)} 
                                style={{ width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box' }} 
                            />
                        </div>

                        {/* Важность */}
                        <div style={{ marginBottom: '24px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>Важность</label>
                            <select 
                                value={importance} 
                                onChange={e => setImportance(Number(e.target.value))}
                                style={{ width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box' }}
                            >
                                <option value={1}>Простая</option>
                                <option value={2}>Важная</option>
                                <option value={3}>Крайне важная</option>
                            </select>
                        </div>

                        {/* Выбор цвета */}
                        <div style={{ marginBottom: '24px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '8px' }}>Цвет карточки</label>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                {COLORS.map(c => (
                                    <div 
                                        key={c} 
                                        onClick={() => setSelectedColor(c)}
                                        style={{ 
                                            width: '32px', height: '32px', borderRadius: '50%', backgroundColor: `#${c}`, cursor: 'pointer',
                                            border: selectedColor === c ? '3px solid #1f2937' : '3px solid transparent',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transition: 'all 0.2s'
                                        }} 
                                    />
                                ))}
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button onClick={handleCreateTask} style={{ flex: 1, padding: '10px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>Создать</button>
                            <button onClick={() => setShowAddModal(false)} style={{ flex: 1, padding: '10px', background: '#f3f4f6', color: '#374151', border: '1px solid #d1d5db', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>Отмена</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}