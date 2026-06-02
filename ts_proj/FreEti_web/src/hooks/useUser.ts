import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api, { type UserAnswer } from '../lib/api';

export function useUser() {
    return useQuery({
        queryKey: ['user'],
        queryFn: async (): Promise<UserAnswer> => {
            const response = await api.get<UserAnswer>('/api/users/user');
            return response.data;
        },
        staleTime: 5 * 60 * 1000,
    });
}



export function useUpdateUser() {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: async (user: { id: number; login: string; username: string; avatar: string }) => {
            const response = await api.put('/api/users/id', user);
            return response.data;
        },
        onSuccess: (data) => {
            queryClient.setQueryData(['user'], data);
            // Обновляем login в localStorage
            if (data.login) {
                localStorage.setItem('login', data.login);
            }
        },
    });
}