import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    fetchTasksForMonth,
    updateTask,
    type TaskAnswer,
    type TaskRequest,
    formatYearMonth,
} from '../lib/api';

export function useMonthTasks(date: Date) {
    const yearMonth = formatYearMonth(date);
    return useQuery({
        queryKey: ['tasks', 'month', yearMonth],
        queryFn: () => fetchTasksForMonth(yearMonth),
        staleTime: 60 * 1000,
    });
}

export function useUpdateTask() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (task: TaskRequest) => updateTask(task),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });
}

export function getTasksForDay(tasks: TaskAnswer[], day: Date): TaskAnswer[] {
    const startOfDay = new Date(day);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(day);
    endOfDay.setHours(23, 59, 59, 999);

    return tasks.filter((task) => {
        if (task.status === 'DELETED') return false;
        const taskStart = new Date(task.start);
        const taskEnd = new Date(task.time_end || task.start);

        // Задача пересекается с этим днём
        return taskStart <= endOfDay && taskEnd >= startOfDay;
    }).sort((a, b) => a.start - b.start);
}

export function createEmptyTask(day: Date): TaskRequest {
    const startOfDay = new Date(day);
    startOfDay.setHours(9, 0, 0, 0);
    const endOfDay = new Date(day);
    endOfDay.setHours(10, 0, 0, 0);

    return {
        id: crypto.randomUUID(),
        title: '',
        body: '',
        status: 'ACTIVE',
        privacy: 'PRIVATE',
        colour: 'FFFFFF',
        start: startOfDay.getTime(),
        time_end: endOfDay.getTime(),
        pushTemplate: 1,
        importance: 1,
        updated_at: Date.now(),
    };
}

// Цвета как в приложении
export const COLOR_PRESETS = [
    { label: 'Белый', value: 'FFFFFF' },
    { label: 'Красный', value: 'BB3344' },
    { label: 'Зелёный', value: '22AA55' },
    { label: 'Синий', value: '3355AB' },
    { label: 'Бирюзовый', value: '33AAAA' },
    { label: 'Серый', value: '888888' },
];

export const PRIVACY_OPTIONS = [
    { label: 'Публичная', value: 'PUBLIC' as const },
    { label: 'Для друзей', value: 'FRIENDS' as const },
    { label: 'Приватная', value: 'PRIVATE' as const },
];

export type { TaskRequest };
