import { useState, useMemo, useCallback } from 'react';
import { useMonthTasks, getTasksForDay, useUpdateTask, createEmptyTask } from '../hooks/useTasks';
import { TaskEditor } from './TaskEditor';
import { SideMenu } from '../components/SideMenu';
import { useUser } from '../hooks/useUser';
import type { TaskAnswer, TaskRequest } from '../lib/api';
import { UnassignedTasksSection } from '../components/UnassignedTasksSection';
import { getTasksForDaySplit } from '../lib/api';
import { useNavigate } from 'react-router-dom';


const MONTHS = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
];
const DAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

function getDaysInMonth(year: number, month: number): Date[] {
    const days: Date[] = [];
    const date = new Date(year, month, 1);
    const firstDay = (date.getDay() + 6) % 7;
    date.setDate(date.getDate() - firstDay);
    for (let i = 0; i < 42; i++) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return days;
}

function isSameDay(a: Date, b: Date): boolean {
    return a.toDateString() === b.toDateString();
}

export function TaskPage() {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(today);
    const [selectedDay, setSelectedDay] = useState<Date>(today);
    const [showCalendar, setShowCalendar] = useState(false);
    const [editingTask, setEditingTask] = useState<TaskRequest | null>(null);
    const [isCreating, setIsCreating] = useState(false);
    const navigate = useNavigate();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const { data: tasks = [], isLoading } = useMonthTasks(currentDate);
    const updateTaskMutation = useUpdateTask();

    const days = useMemo(() => getDaysInMonth(year, month), [year, month]);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const { data: user } = useUser();


    const { normal: normalTasks, unassignedForDay: unassignedTasksForDay } = useMemo(
        () => getTasksForDaySplit(tasks, selectedDay),
        [tasks, selectedDay]
    );

    const moveTaskToNextDay = useCallback((task: TaskAnswer) => {
        const tomorrow = new Date(selectedDay);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(9, 0, 0, 0);
        
        const updatedTask = {
            id: task.id,
            title: task.title,
            body: task.body,
            status: task.status,
            privacy: task.privacy,
            colour: task.colour,
            start: tomorrow.getTime(),
            time_end: tomorrow.getTime() + 3600000, // +1 час
            pushTemplate: task.pushTemplate,
            importance: task.importance,
            updated_at: Date.now(),
        };
        updateTaskMutation.mutate(updatedTask);
    }, [selectedDay, updateTaskMutation]);


    const changeDay = useCallback((delta: number) => {
        const newDay = new Date(selectedDay);
        newDay.setDate(newDay.getDate() + delta);
        setSelectedDay(newDay);
        // Автоматически переключаем месяц, если нужно
        if (newDay.getMonth() !== month || newDay.getFullYear() !== year) {
            setCurrentDate(new Date(newDay.getFullYear(), newDay.getMonth(), 1));
        }
    }, [selectedDay, month, year]);

    const changeMonth = (delta: number) => {
        setCurrentDate(new Date(year, month + delta, 1));
    };

    const goToToday = () => {
        setCurrentDate(today);
        setSelectedDay(today);
    };

    function toggleTaskStatus(task: TaskAnswer) {
        const newStatus = task.status === 'DONE' ? 'ACTIVE' : 'DONE';
        updateTaskMutation.mutate({
            id: task.id,
            title: task.title,
            body: task.body,
            status: newStatus,
            privacy: task.privacy,
            colour: task.colour,
            start: task.start,
            time_end: task.time_end,
            pushTemplate: task.pushTemplate,
            importance: task.importance,
            updated_at: Date.now(),
        });
    }

    function handleEditTask(task: TaskAnswer) {
        setEditingTask({
            id: task.id,
            title: task.title,
            body: task.body,
            status: task.status,
            privacy: task.privacy,
            colour: task.colour,
            start: task.start,
            time_end: task.time_end,
            pushTemplate: task.pushTemplate,
            importance: task.importance,
            updated_at: Date.now(),
        });
        setIsCreating(false);
    }

    function handleCreateTask() {
        setEditingTask(createEmptyTask(selectedDay));
        setIsCreating(true);
    }

    function handleSaveTask(task: TaskRequest) {
        updateTaskMutation.mutate(task, {
            onSuccess: () => {
                setEditingTask(null);
                setIsCreating(false);
            },
        });
    }

    function getImportanceLabel(imp: number): string {
        switch (imp) {
            case 2: return 'Важная';
            case 3: return 'Крайне важная';
            default: return 'Простая';
        }
    }

    function getImportanceColor(imp: number): string {
        switch (imp) {
            case 2: return '#f59e0b';
            case 3: return '#ef4444';
            default: return '#6b7280';
        }
    }

    const formattedDate = `${selectedDay.getDate()} ${MONTHS[selectedDay.getMonth()]} ${selectedDay.getFullYear()}`;

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            <header style={{
                background: 'white',
                padding: '12px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '24px',
                            cursor: 'pointer',
                            padding: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '8px',
                            transition: 'background 0.2s',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f3f4f6';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                    >
                        ☰
                    </button>
                    <h1 style={{ margin: 0, fontSize: '20px', cursor: 'pointer' }}>FreEti</h1>
                </div>
                
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <button onClick={() => setShowCalendar(!showCalendar)} style={headerBtnStyle}>
                        {showCalendar ? 'Скрыть календарь' : '📅 Календарь'}
                    </button>
                    
                    {/* Аватар пользователя в шапке */}
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: '#3b82f6',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            transform: 'rotate(90deg)',
                        }}
                    >
                        {(user?.avatar || user?.username?.[0] || '?').slice(0, 4)}
                    </button>
                </div>
            </header>

            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '24px 16px' }}>
                {/* Навигация по дням */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '16px',
                    marginBottom: '24px',
                }}>
                    <button onClick={() => changeDay(-1)} style={navBtnStyle}>← День назад</button>
                    <button onClick={goToToday} style={{ ...navBtnStyle, fontWeight: 700 }}>
                        {isSameDay(selectedDay, today) ? 'Сегодня' : formattedDate}
                    </button>
                    <button onClick={() => changeDay(1)} style={navBtnStyle}>День вперёд →</button>
                </div>

                {/* Календарь (выдвижной) */}
                {showCalendar && (
                    <div style={{
                        background: 'white',
                        borderRadius: '12px',
                        padding: '20px',
                        marginBottom: '24px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '16px',
                        }}>
                            <button onClick={() => changeMonth(-1)} style={navBtnStyle}>←</button>
                            <span style={{ fontSize: '18px', fontWeight: 600 }}>
                                {MONTHS[month]} {year}
                            </span>
                            <button onClick={() => changeMonth(1)} style={navBtnStyle}>→</button>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(7, 1fr)',
                            marginBottom: '4px',
                        }}>
                            {DAYS.map((d) => (
                                <div key={d} style={{
                                    textAlign: 'center',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    color: '#6b7280',
                                    padding: '4px 0',
                                }}>
                                    {d}
                                </div>
                            ))}
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(7, 1fr)',
                            gap: '2px',
                        }}>
                            {days.map((day, idx) => {
                                const hasTasks = getTasksForDay(tasks, day).length > 0;
                                const selected = isSameDay(day, selectedDay);
                                const isTodayDay = isSameDay(day, today);
                                const currentMonth = day.getMonth() === month;

                                return (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            setSelectedDay(day);
                                            setShowCalendar(false);
                                        }}
                                        style={{
                                            aspectRatio: '1',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            border: selected ? '2px solid #3b82f6' : '1px solid transparent',
                                            borderRadius: '8px',
                                            background: selected ? '#dbeafe' : isTodayDay ? '#fef3c7' : 'transparent',
                                            cursor: 'pointer',
                                            opacity: currentMonth ? 1 : 0.3,
                                            fontSize: '14px',
                                            fontWeight: isTodayDay ? 700 : 400,
                                        }}
                                    >
                                        {day.getDate()}
                                        {hasTasks && (
                                            <div style={{
                                                width: '5px',
                                                height: '5px',
                                                borderRadius: '50%',
                                                background: '#3b82f6',
                                                marginTop: '2px',
                                            }} />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    {/* Секция нераспределённых на день */}
    {unassignedTasksForDay.length > 0 && (
        <UnassignedTasksSection
            tasks={unassignedTasksForDay}
            onTaskClick={handleEditTask}
            onTaskDone={toggleTaskStatus}
            onTaskMoveToNextDay={moveTaskToNextDay}
        />
    )}


    {/* Кнопка перехода к полностью нераспределённым */}
    <button onClick={() => navigate('/unassigned')} style={addBtnStyle}>Все нераспределённые задачи →</button>
</div>
                {/* Основной контент: задачи дня + кнопка создания */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: editingTask ? '1fr 380px' : '1fr',
                    gap: '24px',
                }}>
                    {/* Список задач */}
                    <div style={{
                        background: 'white',
                        borderRadius: '12px',
                        padding: '20px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '16px',
                        }}>
                            <h2 style={{ margin: 0, fontSize: '18px' }}>
                                Задачи на {formattedDate}
                            </h2>
                            <button onClick={handleCreateTask} style={addBtnStyle}>
                                + Новая задача
                            </button>
                        </div>

                        {isLoading && <p style={{ color: '#9ca3af' }}>Загрузка...</p>}

                        {!isLoading && normalTasks.length === 0 && (
                            <p style={{ color: '#9ca3af', fontSize: '14px' }}>
                                Нет задач на этот день
                            </p>
                        )}

                        {!isLoading && normalTasks.map((task) => (
                            <div
                                key={task.id}
                                onClick={() => handleEditTask(task)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '10px',
                                    padding: '12px',
                                    marginBottom: '8px',
                                    borderRadius: '8px',
                                    background: task.status === 'DONE' ? '#f0fdf4' : '#f9fafb',
                                    border: '1px solid #e5e7eb',
                                    opacity: task.status === 'DONE' ? 0.7 : 1,
                                    cursor: 'pointer',
                                    transition: 'background 0.15s',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = task.status === 'DONE' ? '#dcfce7' : '#f3f4f6';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = task.status === 'DONE' ? '#f0fdf4' : '#f9fafb';
                                }}
                            >
                                {/* Чекбокс */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleTaskStatus(task);
                                    }}
                                    title={task.status === 'DONE' ? 'Отменить выполнение' : 'Отметить выполненным'}
                                    style={{
                                        width: '22px',
                                        height: '22px',
                                        borderRadius: '6px',
                                        border: `2px solid ${task.status === 'DONE' ? '#22c55e' : '#d1d5db'}`,
                                        background: task.status === 'DONE' ? '#22c55e' : 'white',
                                        cursor: 'pointer',
                                        flexShrink: 0,
                                        marginTop: '1px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        fontSize: '13px',
                                        fontWeight: 700,
                                    }}
                                >
                                    {task.status === 'DONE' && '✓'}
                                </button>

                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                        {task.importance > 1 && (
                                            <span style={{
                                                fontSize: '11px',
                                                padding: '2px 6px',
                                                borderRadius: '4px',
                                                background: getImportanceColor(task.importance) + '20',
                                                color: getImportanceColor(task.importance),
                                                fontWeight: 600,
                                            }}>
                                                {getImportanceLabel(task.importance)}
                                            </span>
                                        )}
                                        <span style={{
                                            fontWeight: 500,
                                            textDecoration: task.status === 'DONE' ? 'line-through' : 'none',
                                            color: task.status === 'DONE' ? '#9ca3af' : '#1f2937',
                                            fontSize: '15px',
                                        }}>
                                            {task.title}
                                        </span>
                                    </div>
                                    {task.body && (
                                        <p style={{
                                            margin: 0,
                                            fontSize: '13px',
                                            color: '#6b7280',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                        }}>
                                            {task.body}
                                        </p>
                                    )}
                                </div>

                                {task.colour && task.colour !== 'FFFFFF' && (
                                    <div style={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        background: `#${task.colour}`,
                                        flexShrink: 0,
                                        marginTop: '4px',
                                    }} />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Панель редактирования */}
                    {editingTask && (
                        <TaskEditor
                            task={editingTask}
                            isNew={isCreating}
                            onChange={setEditingTask}
                            onSave={handleSaveTask}
                            onCancel={() => {
                                setEditingTask(null);
                                setIsCreating(false);
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

const headerBtnStyle: React.CSSProperties = {
    padding: '8px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    background: 'white',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 500,
};

const navBtnStyle: React.CSSProperties = {
    padding: '8px 20px',
    border: '1px solid #d1d5db',
    borderRadius: '8px',
    background: 'white',
    cursor: 'pointer',
    fontSize: '14px',
};

const addBtnStyle: React.CSSProperties = {
    padding: '8px 16px',
    background: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 500,
};