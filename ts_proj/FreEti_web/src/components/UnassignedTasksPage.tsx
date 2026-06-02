// src/pages/UnassignedTasksPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchUnassignedTasks, updateTask, type TaskAnswer, type TaskRequest } from '../lib/api';
import { TaskEditor } from '../components/TaskEditor';

export function UnassignedTasksPage() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [editingTask, setEditingTask] = useState<TaskRequest | null>(null);
    const [isCreating, setIsCreating] = useState(false);

    const { data: tasks = [], isLoading } = useQuery({
        queryKey: ['unassignedTasks'],
        queryFn: fetchUnassignedTasks,
    });

    const updateTaskMutation = useMutation({
        mutationFn: (task: TaskRequest) => updateTask(task),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['unassignedTasks'] });
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            setEditingTask(null);
            setIsCreating(false);
        },
    });

    const handleTaskClick = (task: TaskAnswer) => {
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
    };

    const handleCreateTask = () => {
        // Создаём задачу без времени (нераспределённую)
        const emptyTask: TaskRequest = {
            id: crypto.randomUUID(),
            title: '',
            body: '',
            status: 'ACTIVE',
            privacy: 'PRIVATE',
            colour: 'FFFFFF',
            start: 0,
            time_end: 0,
            pushTemplate: 1,
            importance: 1,
            updated_at: Date.now(),
        };
        setEditingTask(emptyTask);
        setIsCreating(true);
    };

    const toggleTaskStatus = (task: TaskAnswer) => {
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
    };

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
            <div style={styles.card}>
                {/* Шапка */}
                <div style={styles.header}>
                    <button onClick={() => navigate('/')} style={styles.backButton}>
                        ← Назад
                    </button>
                    <h2 style={styles.title}>Нераспределённые задачи</h2>
                    <button onClick={handleCreateTask} style={styles.addButton}>
                        + Новая
                    </button>
                </div>

                {/* Список задач */}
                {isLoading && <p style={styles.loading}>Загрузка...</p>}

                {!isLoading && tasks.length === 0 && (
                    <p style={styles.empty}>Нет нераспределённых задач</p>
                )}

                {!isLoading && tasks.map((task) => (
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
                                onClick={() => toggleTaskStatus(task)}
                                style={{
                                    ...styles.checkbox,
                                    background: task.status === 'DONE' ? '#22c55e' : 'white',
                                    borderColor: task.status === 'DONE' ? '#22c55e' : '#d1d5db',
                                }}
                            >
                                {task.status === 'DONE' && '✓'}
                            </button>

                            {/* Контент */}
                            <div style={styles.taskContent} onClick={() => handleTaskClick(task)}>
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
                                    }}>
                                        {task.title}
                                    </span>
                                </div>
                                {task.body && (
                                    <p style={styles.taskBody}>{task.body}</p>
                                )}
                            </div>

                            {/* Цвет */}
                            {task.colour && task.colour !== 'FFFFFF' && (
                                <div style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    background: `#${task.colour}`,
                                    flexShrink: 0,
                                }} />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Редактор задач */}
            {editingTask && (
                <div style={styles.editorOverlay}>
                    <TaskEditor
                        task={editingTask}
                        isNew={isCreating}
                        onChange={setEditingTask}
                        onSave={(task) => updateTaskMutation.mutate(task)}
                        onCancel={() => {
                            setEditingTask(null);
                            setIsCreating(false);
                        }}
                    />
                </div>
            )}
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '20px',
        position: 'relative',
    },
    card: {
        maxWidth: '800px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
    },
    backButton: {
        padding: '8px 16px',
        background: '#f3f4f6',
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '14px',
    },
    title: {
        margin: 0,
        fontSize: '20px',
    },
    addButton: {
        padding: '8px 16px',
        background: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 500,
    },
    loading: {
        textAlign: 'center',
        color: '#9ca3af',
        padding: '40px',
    },
    empty: {
        textAlign: 'center',
        color: '#9ca3af',
        padding: '40px',
    },
    taskItem: {
        padding: '12px',
        marginBottom: '8px',
        borderRadius: '8px',
        background: '#f9fafb',
        border: '1px solid #e5e7eb',
    },
    taskMain: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
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
    },
    editorOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        zIndex: 1000,
    },
};