import axios from 'axios';
import { Configuration } from '../api/generated';

// Базовый экземпляр Axios
//http://freeti.ru:8091
const axiosInstance = axios.create({
    baseURL: 'https://freeti.ru',
});




// Конфигурация для сгенерированных API
export const apiConfig = new Configuration({
    basePath: '',
});

// Функции для работы с токеном
export function setAuthToken(token: string) {
    localStorage.setItem('authToken', token);
}

export function clearAuthToken() {
    localStorage.removeItem('authToken');
}

export function getAuthToken(): string | null {
    return localStorage.getItem('authToken');
}

export { axiosInstance };