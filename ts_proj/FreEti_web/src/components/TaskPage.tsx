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

function formatTime(timestamp: number): string {
    if (!timestamp) return '';
    const d = new Date(timestamp);
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

type LayoutTask = TaskAnswer & {
    startMins: number;
    endMins: number;
    column: number;
    maxColumns: number;
};

export function TaskPage() {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(today);
    const [selectedDay, setSelectedDay] = useState<Date>(today);
    const [showCalendar, setShowCalendar] = useState(false);
    const [editingTask, setEditingTask] = useState<TaskRequest | null>(null);
    const [isCreating, setIsCreating] = useState(false);
    const navigate = useNavigate();
    const [currentPrivacyView, setCurrentPrivacyView] = useState<'PRIVATE' | 'FRIENDS' | 'PUBLIC'>('PRIVATE');

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

    const visibleTasks = useMemo(() => {
        return normalTasks.filter(t => t.privacy === currentPrivacyView);
    }, [normalTasks, currentPrivacyView]);

    // ИСПОЛЬЗУЙТЕ visibleTasks ВМЕСТО normalTasks ДЛЯ ОТРИСОВКИ
    const allDayTasks = useMemo(() => visibleTasks.filter(t => t.start === 0), [visibleTasks]);
    
    const { layoutTasks, timelineStartMins, timelineEndMins, pixelsPerMinute } = useMemo(() => {
        const timed = visibleTasks.filter(t => t.start > 0).sort((a, b) => a.start - b.start);
   


        let minTaskMins = 24 * 60;
        let maxTaskMins = 0;

        const tasksWithTime: LayoutTask[] = timed.map(t => {
            const d = new Date(t.start);
            const startMins = d.getHours() * 60 + d.getMinutes();
            
            // Реальная длительность
            let actualDurationMins = 30;
            if (t.time_end > t.start) {
                actualDurationMins = (t.time_end - t.start) / 60000;
            }
            
            // ВИЗУАЛЬНАЯ ДЛИНА: округляем до ближайших 30 минут в большую сторону!
            let visualDurationMins = Math.ceil(actualDurationMins / 30) * 30;

            if (startMins + visualDurationMins > 24 * 60) visualDurationMins = 24 * 60 - startMins;

            if (startMins < minTaskMins) minTaskMins = startMins;
            if (startMins + visualDurationMins > maxTaskMins) maxTaskMins = startMins + visualDurationMins;

            // Для алгоритма пересечений и отрисовки используем визуальный конец
            return { ...t, startMins, endMins: startMins + visualDurationMins, column: 0, maxColumns: 1 };
        });

        let columns: LayoutTask[][] = [];
        let lastEventEnding = -1;
        const result: LayoutTask[] = [];

        const packEvents = () => {
            const numColumns = columns.length;
            columns.forEach((col, i) => {
                col.forEach(task => {
                    task.column = i;
                    task.maxColumns = numColumns;
                    result.push(task);
                });
            });
            columns = [];
        };

        const VISUAL_GAP = 90;

        tasksWithTime.forEach(task => {

            if (task.startMins >= lastEventEnding) {
                packEvents();
                lastEventEnding = task.endMins + VISUAL_GAP;
            } else {
                lastEventEnding = Math.max(lastEventEnding, task.endMins + VISUAL_GAP);
            }

            let placed = false;
            for (let i = 0; i < columns.length; i++) {
                const col = columns[i];
                
                const hasOverlap = col.some(existingTask => {
                    return task.startMins < (existingTask.endMins + VISUAL_GAP) && 
                           task.endMins > existingTask.startMins;
                });

                if (!hasOverlap) {
                    col.push(task);
                    placed = true;
                    break;
                }
            }
            
            if (!placed) {
                columns.push([task]);
            }
        });
        packEvents();

        const startHour = Math.max(0, Math.floor(minTaskMins / 60) - 2);
        const endHour = Math.min(24, Math.ceil(maxTaskMins / 60) + 2);
        
        const startMinsBoundary = startHour * 60;
        const endMinsBoundary = endHour * 60;
        const totalMins = endMinsBoundary - startMinsBoundary;

        const TARGET_HEIGHT = 600; 
        const ppm = TARGET_HEIGHT / Math.max(totalMins, 60);

        return {
            layoutTasks: result,
            timelineStartMins: startMinsBoundary,
            timelineEndMins: endMinsBoundary,
            pixelsPerMinute: ppm
        };
    }, [visibleTasks]);

    const globalMaxColumns = useMemo(() => {
        if (layoutTasks.length === 0) return 1;
        return Math.max(...layoutTasks.map(t => t.maxColumns));
    }, [layoutTasks]);

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
            time_end: tomorrow.getTime() + 3600000,
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
        if (newDay.getMonth() !== month || newDay.getFullYear() !== year) {
            setCurrentDate(new Date(newDay.getFullYear(), newDay.getMonth(), 1));
        }
    }, [selectedDay, month, year]);

    const changeMonth = (delta: number) => setCurrentDate(new Date(year, month + delta, 1));
    const goToToday = () => { setCurrentDate(today); setSelectedDay(today); };

    function toggleTaskStatus(task: TaskAnswer) {
        const newStatus = task.status === 'DONE' ? 'ACTIVE' : 'DONE';
        updateTaskMutation.mutate({ ...task, status: newStatus, updated_at: Date.now() });
    }

    function handleEditTask(task: TaskAnswer) {
        setEditingTask({ ...task, updated_at: Date.now() });
        setIsCreating(false);
    }

    function handleCreateTask() {
        setEditingTask(createEmptyTask(selectedDay));
        setIsCreating(true);
    }

    function handleSaveTask(task: TaskRequest, createStub: boolean = false) {
        // Отправляем основную задачу первой
        updateTaskMutation.mutate(task, {
            onSuccess: () => { 
                // Как только сервер ответил "ОК", закрываем окно
                setEditingTask(null); 
                setIsCreating(false); 

                // И только теперь, без конфликтов, отправляем заглушку отдельным запросом
                if (createStub) {
                    const emptyTask = createEmptyTask(selectedDay); 
                    const stubTask = {
                        ...emptyTask,
                        start: task.start,
                        time_end: task.time_end,
                        title: 'Занят',
                        body: 'Запланированное время',
                        privacy: 'PUBLIC' as const,
                        colour: '9ca3af',
                        importance: task.importance,
                    };
                    updateTaskMutation.mutate(stubTask);
                }
            },
        });
    }

    const formattedDate = `${selectedDay.getDate()} ${MONTHS[selectedDay.getMonth()]} ${selectedDay.getFullYear()}`;
    
    const hoursGrid = Array.from(
        { length: (timelineEndMins - timelineStartMins) / 60 + 1 }, 
        (_, i) => (timelineStartMins / 60) + i
    );

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            <header style={{
                background: 'white', padding: '12px 24px', display: 'flex',
                justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button onClick={() => setIsMenuOpen(true)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>
                        ☰
                    </button>
                    <h1 style={{ margin: 0, fontSize: '20px', cursor: 'pointer' }}>FreEti</h1>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <button onClick={() => setShowCalendar(!showCalendar)} style={headerBtnStyle}>
                        {showCalendar ? 'Скрыть календарь' : '📅 Календарь'}
                    </button>
                    <button onClick={() => setIsMenuOpen(true)} style={{
                        width: '40px', height: '40px', borderRadius: '50%', background: '#3b82f6',
                        border: 'none', cursor: 'pointer', color: 'white', fontSize: '18px', fontWeight: 'bold', transform: 'rotate(90deg)'
                    }}>
                        {(user?.avatar || user?.username?.[0] || '?').slice(0, 4)}
                    </button>
                </div>
            </header>

            <div style={{ margin: '0 20px', padding: '24px 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
                    <button onClick={() => changeDay(-1)} style={navBtnStyle}>← День назад</button>
                    <button onClick={goToToday} style={{ ...navBtnStyle, fontWeight: 700 }}>
                        {isSameDay(selectedDay, today) ? 'Сегодня' : formattedDate}
                    </button>
                    <button onClick={() => changeDay(1)} style={navBtnStyle}>День вперёд →</button>
                    
                </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '24px' }}>
                    {(['PRIVATE', 'FRIENDS', 'PUBLIC'] as const).map(mode => (
                        <button
                            key={mode}
                            onClick={() => setCurrentPrivacyView(mode)}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '20px',
                                border: currentPrivacyView === mode ? '2px solid #3b82f6' : '1px solid #d1d5db',
                                background: currentPrivacyView === mode ? '#dbeafe' : 'white',
                                color: currentPrivacyView === mode ? '#1d4ed8' : '#4b5563',
                                fontSize: '14px',
                                fontWeight: currentPrivacyView === mode ? 600 : 400,
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {mode === 'PRIVATE' ? 'Приватные' : mode === 'FRIENDS' ? 'Для друзей' : 'Публичные'}
                        </button>
                    ))}
                </div>
                {showCalendar && (
                    <div style={{ background: 'white', borderRadius: '12px', padding: '20px', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <button onClick={() => changeMonth(-1)} style={navBtnStyle}>←</button>
                            <span style={{ fontSize: '18px', fontWeight: 600 }}>{MONTHS[month]} {year}</span>
                            <button onClick={() => changeMonth(1)} style={navBtnStyle}>→</button>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: '4px' }}>
                            {DAYS.map((d) => <div key={d} style={{ textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6b7280', padding: '4px 0' }}>{d}</div>)}
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }}>
                            {days.map((day, idx) => {
                                const hasTasks = getTasksForDay(tasks, day).length > 0;
                                const selected = isSameDay(day, selectedDay);
                                const isTodayDay = isSameDay(day, today);
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => { setSelectedDay(day); setShowCalendar(false); }}
                                        style={{
                                            aspectRatio: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                            border: selected ? '2px solid #3b82f6' : '1px solid transparent', borderRadius: '8px',
                                            background: selected ? '#dbeafe' : isTodayDay ? '#fef3c7' : 'transparent',
                                            cursor: 'pointer', opacity: day.getMonth() === month ? 1 : 0.3, fontSize: '14px', fontWeight: isTodayDay ? 700 : 400,
                                        }}
                                    >
                                        {day.getDate()}
                                        {hasTasks && <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#3b82f6', marginTop: '2px' }} />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
                    {unassignedTasksForDay.length > 0 && (
                        <UnassignedTasksSection
                            tasks={unassignedTasksForDay}
                            onTaskClick={handleEditTask}
                            onTaskDone={toggleTaskStatus}
                            onTaskMoveToNextDay={moveTaskToNextDay}
                        />
                    )}
                    <button onClick={() => navigate('/unassigned')} style={{ ...addBtnStyle, width: 'fit-content' }}>
                        Все нераспределённые задачи →
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: editingTask ? '1fr 380px' : '1fr', gap: '24px' }}>
                    
                    <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', minWidth: 0 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <h2 style={{ margin: 0, fontSize: '18px' }}>Расписание на {formattedDate}</h2>
                            <button onClick={handleCreateTask} style={addBtnStyle}>+ Новая задача</button>
                        </div>

                        {isLoading && <p style={{ color: '#9ca3af' }}>Загрузка...</p>}
                        {!isLoading && normalTasks.length === 0 && <p style={{ color: '#9ca3af', fontSize: '14px' }}>Нет задач на этот день</p>}

                        {allDayTasks.length > 0 && (
                            <div style={{ marginBottom: '24px' }}>
                                <h3 style={{ fontSize: '13px', textTransform: 'uppercase', color: '#6b7280', letterSpacing: '1px', marginBottom: '12px' }}>Весь день</h3>
                                {allDayTasks.map((task) => (
                                    <div
                                        key={task.id}
                                        onClick={() => handleEditTask(task)}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', marginBottom: '4px',
                                            borderRadius: '8px', background: '#f9fafb', borderLeft: `4px solid #${task.colour || 'd1d5db'}`,
                                            cursor: 'pointer', opacity: task.status === 'DONE' ? 0.6 : 1,
                                        }}
                                    >
                                        <button onClick={(e) => { e.stopPropagation(); toggleTaskStatus(task); }} style={{
                                            width: '20px', height: '20px', borderRadius: '6px', border: `2px solid ${task.status === 'DONE' ? '#22c55e' : '#d1d5db'}`,
                                            background: task.status === 'DONE' ? '#22c55e' : 'transparent', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px'
                                        }}>
                                            {task.status === 'DONE' && '✓'}
                                        </button>
                                        <span style={{ fontWeight: 500, fontSize: '14px', textDecoration: task.status === 'DONE' ? 'line-through' : 'none' }}>{task.title}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {layoutTasks.length > 0 && (
                            <div style={{ display: 'flex', position: 'relative', marginTop: '16px', minWidth: 0 }}>
                                
                                <div style={{ width: '50px', flexShrink: 0, position: 'relative', height: `${(timelineEndMins - timelineStartMins) * pixelsPerMinute + 12}px` }}>
                                    {hoursGrid.map(h => {
                                        const isHidden = h === hoursGrid[hoursGrid.length - 1]; 
                                        return !isHidden && (
                                            <div key={h}>
                                                <div style={{ position: 'absolute', top: `${(h * 60 - timelineStartMins) * pixelsPerMinute}px`, left: 0, width: '100%', textAlign: 'right', paddingRight: '8px', color: '#9ca3af', fontSize: '12px', transform: 'translateY(-6px)' }}>
                                                    {String(h).padStart(2, '0')}:00
                                                </div>
                                                <div style={{ position: 'absolute', top: `${(h * 60 + 30 - timelineStartMins) * pixelsPerMinute}px`, left: 0, width: '100%', textAlign: 'right', paddingRight: '8px', color: '#d1d5db', fontSize: '10px', transform: 'translateY(-5px)', opacity: 0.8 }}>
                                                    30
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                               <div style={{ flex: 1, overflowX: 'auto', overflowY: 'hidden', borderLeft: '1px solid #e5e7eb', minWidth: 0 }}>
                                <div style={{
                                    position: 'relative',
                                    height: `${(timelineEndMins - timelineStartMins) * pixelsPerMinute + 12}px`,
                                    minWidth: `max(100%, ${globalMaxColumns * 285}px)` 
                                }}>
                                        
                                        {hoursGrid.map(h => (
                                            <div key={`line-${h}`} style={{ position: 'absolute', top: `${(h * 60 - timelineStartMins) * pixelsPerMinute}px`, left: 0, right: 0, height: '1px', background: '#e5e7eb', zIndex: 0 }} />
                                        ))}
                                        {hoursGrid.map(h => (
                                            <div key={`half-${h}`} style={{ position: 'absolute', top: `${(h * 60 + 30 - timelineStartMins) * pixelsPerMinute}px`, left: 0, right: 0, height: '1px', background: '#f9fafb', zIndex: 0 }} />
                                        ))}

                                       {layoutTasks.map((task) => {
                                            const topPx = (task.startMins - timelineStartMins) * pixelsPerMinute;
                                            const heightPx = (task.endMins - task.startMins) * pixelsPerMinute;
                                            const COLUMN_WIDTH = 285; 
                                            const leftPx = task.column * COLUMN_WIDTH;
                                            
                                            const bgColor = task.colour && task.colour !== 'FFFFFF' ? `#${task.colour}` : '#3b82f6';

                                            return (
                                                <div
                                                    key={task.id}
                                                    onClick={() => handleEditTask(task)}
                                                    style={{
                                                        position: 'absolute',
                                                        top: `${topPx}px`,
                                                    
                                                        left: `${leftPx + 2}px`,
                                                        width: '265px',
                                                        
                                                        height: `${Math.max(heightPx, 44)}px`,
                                                        backgroundColor: bgColor,
                                                        borderRadius: '8px',
                                                        padding: '4px 8px',
                                                        color: 'white',
                                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                                        border: '1px solid rgba(0,0,0,0.15)',
                                                        zIndex: 12,
                                                        cursor: 'pointer',
                                                        opacity: task.status === 'DONE' ? 0.5 : 0.95,
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        overflow: 'hidden',
                                                        transition: 'opacity 0.2s, z-index 0.2s',
                                                    }}
                                                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.zIndex = '20'; }}
                                                    onMouseLeave={(e) => { e.currentTarget.style.opacity = task.status === 'DONE' ? '0.5' : '0.95'; e.currentTarget.style.zIndex = '12'; }}
                                                >
                                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontWeight: 600, fontSize: '15px', textDecoration: task.status === 'DONE' ? 'line-through' : 'none', marginBottom: '2px' }}>
                                                        <span onClick={(e) => { e.stopPropagation(); toggleTaskStatus(task); }} style={{ cursor: 'pointer', flexShrink: 0, marginTop: '1px' }}>
                                                            {task.status === 'DONE' ? '☑' : '☐'}
                                                        </span>
                                                        <span style={{ 
                                                            wordBreak: 'break-word', 
                                                            whiteSpace: 'normal',
                                                            lineHeight: '1.2' 
                                                        }}>
                                                            {task.title}
                                                        </span>
                                                    </div>
                                                    <div style={{ fontSize: '11px', marginTop: 'auto', opacity: 0.9 }}>
                                                        {formatTime(task.start)} {task.time_end > task.start && `- ${formatTime(task.time_end)}`}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {editingTask && (
                        <TaskEditor
                            task={editingTask}
                            isNew={isCreating}
                            onChange={setEditingTask}
                            onSave={handleSaveTask}
                            onCancel={() => { setEditingTask(null); setIsCreating(false); }}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

const headerBtnStyle: React.CSSProperties = { padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: '8px', background: 'white', cursor: 'pointer', fontSize: '14px', fontWeight: 500 };
const navBtnStyle: React.CSSProperties = { padding: '8px 20px', border: '1px solid #d1d5db', borderRadius: '8px', background: 'white', cursor: 'pointer', fontSize: '14px' };
const addBtnStyle: React.CSSProperties = { padding: '8px 16px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: 500 };