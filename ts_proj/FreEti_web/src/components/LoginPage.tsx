import { useState, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, isLoading, error } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e: ChangeEvent) {
        e.preventDefault();
        const success = await login(username, password);
        if (success) {
            navigate('/');
        }
    }

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f5f5',
        }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    background: 'white',
                    padding: '40px',
                    borderRadius: '12px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    width: '100%',
                    maxWidth: '400px',
                }}
            >
                <h1 style={{ marginBottom: '24px', fontSize: '24px', textAlign: 'center' }}>
                    Вход в FreEti
                </h1>

                {error && (
                    <div style={{
                        background: '#fee2e2',
                        color: '#dc2626',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '16px',
                        fontSize: '14px',
                    }}>
                        {error}
                    </div>
                )}

                <div style={{ marginBottom: '16px' }}>
                    <label
                        htmlFor="username"
                        style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 500 }}
                    >
                        Логин
                    </label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        autoFocus
                        style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #d1d5db',
                            borderRadius: '8px',
                            fontSize: '16px',
                            boxSizing: 'border-box',
                        }}
                        placeholder="Введите логин"
                    />
                </div>

                <div style={{ marginBottom: '24px' }}>
                    <label
                        htmlFor="password"
                        style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 500 }}
                    >
                        Пароль
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #d1d5db',
                            borderRadius: '8px',
                            fontSize: '16px',
                            boxSizing: 'border-box',
                        }}
                        placeholder="Введите пароль"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    style={{
                        width: '100%',
                        padding: '12px',
                        background: isLoading ? '#93c5fd' : '#3b82f6',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: 500,
                        cursor: isLoading ? 'not-allowed' : 'pointer',
                    }}
                >
                    {isLoading ? 'Вход...' : 'Войти'}
                </button>
                <div style={{ marginTop: '16px', textAlign: 'center' }}>
                    Нет аккаунта?{' '}
                    <button
                        onClick={() => navigate('/register')}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#3b82f6',
                            cursor: 'pointer',
                            fontSize: '14px',
                            textDecoration: 'underline',
                        }}
                    >
                        Зарегистрироваться
                    </button>
                </div>
            </form>
        </div>
    );
}