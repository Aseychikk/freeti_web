import axios from 'axios';
import { getAuthToken, setAuthToken, clearAuthToken } from './api-client';

const api = axios.create({
    baseURL: 'https://freeti.ru',
});

let isRefreshing = false;
let failedQueue: Array<{
    resolve: (token: string) => void;
    reject: (error: any) => void;
}> = [];

function processQueue(error: any, token: string | null = null) {
    failedQueue.forEach((promise) => {
        if (error) {
            promise.reject(error);
        } else {
            promise.resolve(token!);
        }
    });
    failedQueue = [];
}

api.interceptors.request.use((config) => {
    const token = getAuthToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Если ошибка не 401 или это уже запрос на обновление/логин — пропускаем
        if (
            error.response?.status !== 401 ||
            originalRequest._retry ||
            originalRequest.url?.includes('/api/auth/')
        ) {
            return Promise.reject(error);
        }

        // Если уже идёт процесс обновления — ставим запрос в очередь
        if (isRefreshing) {
            return new Promise((resolve, reject) => {
                failedQueue.push({ resolve, reject });
            })
                .then((token) => {
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    return api(originalRequest);
                })
                .catch((err) => Promise.reject(err));
        }

        originalRequest._retry = true;
        isRefreshing = true;

        const refreshToken = localStorage.getItem('refreshToken');

        if (!refreshToken) {
            // Нет refresh-токена — разлогиниваем
            isRefreshing = false;
            clearAuthToken();
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('userId');
            localStorage.removeItem('login');
            window.location.href = '/login';
            return Promise.reject(error);
        }

        try {
            // Запрос на обновление токена
            const response = await axios.post('/api/auth/refresh', {
                refreshToken: refreshToken,
            });

            const { accessToken, refreshToken: newRefreshToken } = response.data;

            // Сохраняем новые токены
            setAuthToken(accessToken);
            localStorage.setItem('refreshToken', newRefreshToken);

            // Обновляем заголовок в исходном запросе
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;

            // Повторяем все запросы из очереди
            processQueue(null, accessToken);

            return api(originalRequest);
        } catch (refreshError) {
            // Не удалось обновить — разлогиниваем
            processQueue(refreshError, null);
            clearAuthToken();
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('userId');
            localStorage.removeItem('login');
            window.location.href = '/login';
            return Promise.reject(refreshError);
        } finally {
            isRefreshing = false;
        }
    }
);

export default api;

// Типы
export interface TaskAnswer {
    id: string;
    title: string;
    body: string;
    status: 'CREATED' | 'ACTIVE' | 'DONE' | 'DELETED';
    privacy: 'PUBLIC' | 'FRIENDS' | 'PRIVATE';
    colour: string;
    start: number;      // миллисекунды
    time_end: number;   // миллисекунды
    pushTemplate: number;
    importance: number;
    updated_at: number;
}

// Запрос на создание/обновление — совпадает с вашим TaskRequest
export interface TaskRequest {
    id: string;
    title: string;
    body: string;
    status: 'CREATED' | 'ACTIVE' | 'DONE' | 'DELETED';
    privacy: 'PUBLIC' | 'FRIENDS' | 'PRIVATE';
    colour: string;
    start: number;
    time_end: number;
    pushTemplate: number;
    importance: number;
    updated_at: number;
}

export interface UserAnswer {
    id: number;
    login: string;
    username: string;
    avatar: string;
}

export function formatYearMonth(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
}

// API методы
export async function fetchTasksForMonth(yearMonth: string): Promise<TaskAnswer[]> {
    const response = await api.get<TaskAnswer[]>('/api/tasks/tasks', {
        params: { yearMonth },
    });
    return response.data;
}

export async function updateTask(task: TaskRequest): Promise<TaskAnswer> {
    const response = await api.patch<TaskAnswer>('/api/tasks/tasks', task);
    return response.data;
}

export async function getUser(): Promise<UserAnswer> {
    const response = await api.get<UserAnswer>('/api/users/user');
    return response.data;
}

// Получить нераспределённые задачи (с сервера)
export async function fetchUnassignedTasks(): Promise<TaskAnswer[]> {
    const response = await api.get<TaskAnswer[]>('/api/tasks/unassigned');
    return response.data;
}

// Получить задачи для конкретного дня, включая нераспределённые на день
export function isUnassignedForDay(task: TaskAnswer, day: Date): boolean {
    if (task.start === 0) return false;                    // полностью нераспределённые – не сюда
    const taskDate = new Date(task.start);
    const isSameDay = taskDate.toDateString() === day.toDateString();
    const hasNoEndTime = task.time_end === 0 || task.time_end < 1080000;
    return isSameDay && hasNoEndTime;
}

// Получить задачи для дня с разделением
export function getTasksForDaySplit(tasks: TaskAnswer[], day: Date) {
    const startOfDay = new Date(day);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(day);
    endOfDay.setHours(23, 59, 59, 999);

    const normal: TaskAnswer[] = [];
    const unassignedForDay: TaskAnswer[] = [];

    for (const task of tasks) {
        if (task.status === 'DELETED') continue;
        
        // Полностью нераспределённые пропускаем
        if (task.start === 0) continue;
        
        // Нераспределённые на день
        if (isUnassignedForDay(task, day)) {
            unassignedForDay.push(task);
            continue;
        }
        
        // Обычные задачи с временем
        const taskStart = new Date(task.start);
        const taskEnd = new Date(task.time_end || task.start);
        if (taskStart <= endOfDay && taskEnd >= startOfDay) {
            normal.push(task);
        }
    }

    normal.sort((a, b) => a.start - b.start);
    unassignedForDay.sort((a, b) => a.title.localeCompare(b.title));
    
    return { normal, unassignedForDay };
}





// Поиск по имени
export async function searchUsersByUsername(username: string): Promise<UserAnswer[]> {
    const response = await api.get<UserAnswer[]>('/api/users/username', {
        params: { username },
    });
    return response.data;
}

// Поиск по логину
export async function searchUsersByLogin(login: string): Promise<UserAnswer[]> {
    const response = await api.get<UserAnswer[]>('/api/users/login', {
        params: { login },
    });
    return response.data;
}

// Получить пользователей по ID
export async function getUsersByIds(ids: string): Promise<UserAnswer[]> {
    const response = await api.get<UserAnswer[]>('/api/users/byIds', {
        params: { ids },
    });
    return response.data;
}

// Добавление в контакты
export async function addContact(contactData: any): Promise<any> {
    const response = await api.put('/api/users/add_contact', contactData);
    return response.data;
}

// Удаление из контактов
export async function removeContact(contactData: any): Promise<boolean> {
    const response = await api.delete('/api/users/delete_contact', {
        params: contactData, 
    });
    return response.data;
}

// Получить список контактов
export async function fetchContacts(): Promise<any[]> {
    const response = await api.get<any[]>('/api/users/contacts');
    return response.data;
}

// Получить чужие задачи (для профиля друга)
export async function getOtherTasks(yearMonth: string, login: string): Promise<any[]> {
    const response = await api.get<any[]>('/api/tasks/othertasks', {
        params: { yearMonth, login },
    });
    return response.data;
}

// Получить список групп
export async function fetchGroups(): Promise<any[]> {
    const response = await api.get<any[]>('/api/groups/groups');
    return response.data;
}

// Создать группу
export async function createGroup(groupData: { title: string; body: string }): Promise<any> {
    const response = await api.post('/api/groups/groups', groupData);
    return response.data;
}

// Получить количество участников в группе
export async function getGroupMembersCount(groupId: string): Promise<number> {
    const response = await api.get<number>('/api/groups/members_count', {
        params: { group_id: groupId },
    });
    return response.data;
}

// Получить задачи группы на месяц
export async function getGroupTasks(yearMonth: string, groupId: string): Promise<any[]> {
    const response = await api.get<any[]>('/api/groups/group_tasks', {
        params: { yearMonth, id: groupId },
    });
    return response.data;
}

// Получить связи участников группы (кто состоит и с какой ролью)
export async function getGroupMembers(groupId: string): Promise<any[]> {
    const response = await api.get<any[]>('/api/groups/group_members', {
        params: { group_id: groupId },
    });
    return response.data;
}

// Покинуть группу
export async function leaveGroup(groupId: string): Promise<boolean> {
    const response = await api.put(`/api/groups/leave/${groupId}`);
    return response.data;
}

// Удалить группу (только для владельца)
export async function deleteGroup(groupId: string): Promise<boolean> {
    const response = await api.delete('/api/groups/delete_group', {
        params: { group_id: groupId },
    });
    return response.data;
}

// Удалить участника из группы
export async function removeMemberFromGroup(groupId: string, userId: number): Promise<boolean> {
    const response = await api.put('/api/groups/member_delete', null, {
        params: { user_id: userId, group_id: groupId },
    });
    return response.data;
}

// Добавить участника в группу
export async function addMemberToGroup(groupId: string, userId: number): Promise<any> {
    // Предполагаем, что эндпоинт называется member_add, по аналогии с member_delete
    const response = await api.put('/api/groups/member_add', null, {
        params: { user_id: userId, group_id: groupId },
    });
    return response.data;
}

// Изменить роль участника (сделать админом/обычным)
export async function switchMemberRole(groupId: string, userId: number): Promise<any> {
    const response = await api.put('/api/groups/member_switch', null, {
        params: { user_id: userId, group_id: groupId },
    });
    return response.data;
}

// Создать событие для группы
export async function createGroupTask(groupId: string, taskData: any): Promise<any> {
    const response = await api.post('/api/groups/new_event', taskData, {
        params: { group_id: groupId } // Бэкенд ждет именно group_id и адрес new_event
    });
    return response.data;
}

// Удалить событие группы
export async function deleteGroupTask(taskId: number, groupId: string): Promise<boolean> {
    const response = await api.delete('/api/groups/delete_event', {
        params: { event_id: taskId } // Бэкенд ждет именно event_id и адрес delete_event
    });
    return response.data;
}