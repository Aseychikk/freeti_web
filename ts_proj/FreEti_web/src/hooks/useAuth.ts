import { useState } from 'react';
import axios from 'axios';
import { setAuthToken, clearAuthToken, getAuthToken } from '../lib/api-client';

const API_URL = 'https://freeti.ru';

interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    userId: number;
    login: string;
}

export function useAuth() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const isAuthenticated = !!getAuthToken();

    async function login(username: string, password: string): Promise<boolean> {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post<LoginResponse>(
                `${API_URL}/api/auth/login`,
                {
                    username: username,
                    password: password,
                },
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );

            if (response.data.accessToken) {
                setAuthToken(response.data.accessToken);
                // refreshToken тоже можно сохранить для обновления токена позже
                localStorage.setItem('refreshToken', response.data.refreshToken);
                localStorage.setItem('userId', String(response.data.userId));
                localStorage.setItem('login', response.data.login);
                return true;
            } else {
                setError('Токен не получен от сервера');
                return false;
            }
        } catch (err: any) {
            if (err.response) {
                // Сервер ответил ошибкой (400, 401 и т.д.)
                setError('Неверный логин или пароль');
            } else if (err.request) {
                // Запрос ушёл, но ответ не получен
                setError('Сервер недоступен. Проверьте подключение.');
            } else {
                setError('Ошибка при входе');
            }
            return false;
        } finally {
            setIsLoading(false);
        }
    }

    function logout() {
        clearAuthToken();
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('login');
    }

    return {
        login,
        logout,
        isAuthenticated,
        isLoading,
        error,
    };
}