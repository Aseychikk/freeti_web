import { useState } from 'react';
import { type TaskAnswer } from '../lib/api';

interface UnassignedTasksSectionProps {
    tasks: TaskAnswer[];
    onTaskClick: (task: TaskAnswer) => void;
    onTaskDone: (task: TaskAnswer) => void;
    onTaskMoveToNextDay?: (task: TaskAnswer) => void;
}

export function UnassignedTasksSection({ 
    tasks, 
    onTaskClick, 
    onTaskDone,
    onTaskMoveToNextDay 
}: UnassignedTasksSectionProps) {
    const [isExpanded, setIsExpanded] = useState(true);

    if (tasks.length === 0) return null;

    const getImportanceColor = (imp: number): string => {
        switch (imp) {
            case 2: return '#f59e0b';
            case 3: return '#ef4444';
            default: return '#6b7280';
        }
    };

    const getImportanceLabel = (imp: number): string => {
        switch (imp) {
            case 2: return 'Важная';
            case 3: return 'Крайне важная';
            default: return 'Простая';
        }
    };

    return (
        <div style={styles.container}>
            <button 
                onClick={() => setIsExpanded(!isExpanded)} 
                style={styles.header}
            >
                <span style={styles.headerIcon}>{isExpanded ? '▼' : '▶'}</span>
                <span style={styles.headerTitle}>Нераспределённые задачи</span>
                <span style={styles.headerCount}>({tasks.length})</span>
            </button>

            {isExpanded && (
                <div style={styles.tasksList}>
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            style={{
                                ...styles.taskItem,
                                opacity: task.status === 'DONE' ? 0.7 : 1,
                            }}
                        >
                            <div style={styles.taskMain}>
                                {/* Чекбокс */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onTaskDone(task);
                                    }}
                                    style={{
                                        ...styles.checkbox,
                                        background: task.status === 'DONE' ? '#22c55e' : 'white',
                                        borderColor: task.status === 'DONE' ? '#22c55e' : '#d1d5db',
                                    }}
                                >
                                    {task.status === 'DONE' && '✓'}
                                </button>

                                {/* Контент задачи */}
                                <div 
                                    style={styles.taskContent}
                                    onClick={() => onTaskClick(task)}
                                >
                                    <div style={styles.taskHeader}>
                                        {task.importance > 1 && (
                                            <span style={{
                                                ...styles.importanceBadge,
                                                background: getImportanceColor(task.importance) + '20',
                                                color: getImportanceColor(task.importance),
                                            }}>
                                                {getImportanceLabel(task.importance)}
                                            </span>
                                        )}
                                        <span style={{
                                            ...styles.taskTitle,
                                            textDecoration: task.status === 'DONE' ? 'line-through' : 'none',
                                            color: task.status === 'DONE' ? '#9ca3af' : '#1f2937',
                                        }}>
                                            {task.title}
                                        </span>
                                    </div>
                                    {task.body && (
                                        <p style={styles.taskBody}>
                                            {task.body}
                                        </p>
                                    )}
                                </div>

                                {/* Кнопка "перенести на завтра" (опционально) */}
                                {onTaskMoveToNextDay && task.status !== 'DONE' && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onTaskMoveToNextDay(task);
                                        }}
                                        style={styles.moveButton}
                                        title="Перенести на завтра"
                                    >
                                        ➔
                                    </button>
                                )}
                            </div>

                            {/* Цветная метка */}
                            {task.colour && task.colour !== 'FFFFFF' && (
                                <div style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: `#${task.colour}`,
                                    marginLeft: '8px',
                                    flexShrink: 0,
                                }} />
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        marginBottom: '20px',
        background: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
    },
    header: {
        width: '100%',
        padding: '12px 16px',
        background: '#f8fafc',
        border: 'none',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 500,
        color: '#1e293b',
        textAlign: 'left',
    },
    headerIcon: {
        fontSize: '12px',
    },
    headerTitle: {
        flex: 1,
    },
    headerCount: {
        color: '#64748b',
        fontWeight: 400,
    },
    tasksList: {
        padding: '8px',
    },
    taskItem: {
        padding: '10px 12px',
        marginBottom: '8px',
        borderRadius: '8px',
        background: '#f9fafb',
        border: '1px solid #e5e7eb',
        transition: 'background 0.15s',
    },
    taskMain: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '10px',
    },
    checkbox: {
        width: '22px',
        height: '22px',
        borderRadius: '6px',
        border: '2px solid',
        cursor: 'pointer',
        flexShrink: 0,
        marginTop: '2px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '13px',
        fontWeight: 700,
        color: 'white',
    },
    taskContent: {
        flex: 1,
        cursor: 'pointer',
    },
    taskHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        flexWrap: 'wrap',
        marginBottom: '4px',
    },
    importanceBadge: {
        fontSize: '11px',
        padding: '2px 6px',
        borderRadius: '4px',
        fontWeight: 600,
    },
    taskTitle: {
        fontWeight: 500,
        fontSize: '15px',
    },
    taskBody: {
        margin: 0,
        fontSize: '13px',
        color: '#6b7280',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    moveButton: {
        background: 'none',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer',
        padding: '4px 8px',
        borderRadius: '6px',
        color: '#3b82f6',
        transition: 'background 0.15s',
    },
};