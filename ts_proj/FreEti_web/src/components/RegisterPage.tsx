import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../lib/api';
import { setAuthToken } from '../lib/api-client';

export function RegisterPage() {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [code, setCode] = useState('');
    const [isCodeSent, setIsCodeSent] = useState(false);
    const [timer, setTimer] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const timerRef = useRef<number | null>(null);

    // Очистка таймера при размонтировании
    useEffect(() => {
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    const startTimer = (seconds: number) => {
        setTimer(seconds);
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = window.setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    if (timerRef.current) clearInterval(timerRef.current);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const handleSendCode = async () => {
        if (!login.trim() || !email.trim()) {
            setError('Заполните логин и email');
            return;
        }
        setError(null);
        setIsLoading(true);
        try {
            const response = await api.post('/api/auth/register_resp', {
                username: login,
                email: email,
            });
            if (response.status === 200) {
                setIsCodeSent(true);
                startTimer(60);
                setError(null);
            } else {
                setError('Ошибка при отправке кода');
            }
        } catch (err: any) {
            if (err.response?.status === 409) {
                setError('Пользователь с таким логином или email уже существует');
            } else {
                setError('Не удалось отправить код. Проверьте соединение.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegister = async () => {
        if (!code.trim()) {
            setError('Введите код из письма');
            return;
        }
        if (password !== password2) {
            setError('Пароли не совпадают');
            return;
        }
        if (password.length < 8) {
            setError('Пароль должен содержать не менее 8 символов');
            return;
        }
        setError(null);
        setIsLoading(true);
        try {
            const response = await api.post('/api/auth/final_register', {
                login: login,
                email: email,
                code: code,
                password: password,
            });
            if (response.status === 200 && response.data) {
                const { accessToken, refreshToken, userId, login: userLogin } = response.data;
                // Сохраняем токены и данные пользователя
                setAuthToken(accessToken);
                localStorage.setItem('refreshToken', refreshToken);
                localStorage.setItem('userId', String(userId));
                localStorage.setItem('login', userLogin || login);
                // Перенаправляем на главную
                navigate('/');
            } else {
                setError('Ошибка регистрации. Проверьте код.');
            }
        } catch (err: any) {
            if (err.response?.status === 400) {
                setError('Неверный код или истек срок действия');
            } else {
                setError('Ошибка соединения');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>Регистрация</h1>

                {error && <div style={styles.error}>{error}</div>}

                <div style={styles.field}>
                    <label style={styles.label}>Логин</label>
                    <input
                        type="text"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        style={styles.input}
                        placeholder="Введите логин"
                        disabled={isCodeSent}
                    />
                </div>

                <div style={styles.field}>
                    <label style={styles.label}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                        placeholder="example@mail.ru"
                        disabled={isCodeSent}
                    />
                </div>

                {!isCodeSent ? (
                    <button
                        onClick={handleSendCode}
                        disabled={isLoading}
                        style={{ ...styles.button, ...styles.primaryButton }}
                    >
                        {isLoading ? 'Отправка...' : 'Отправить код'}
                    </button>
                ) : (
                    <>
                        <div style={styles.field}>
                            <label style={styles.label}>Код из письма</label>
                            <input
                                type="text"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                style={styles.input}
                                placeholder="Введите код"
                            />
                        </div>

                        <div style={styles.field}>
                            <label style={styles.label}>Пароль</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={styles.input}
                                placeholder="Минимум 8 символов"
                            />
                        </div>

                        <div style={styles.field}>
                            <label style={styles.label}>Подтверждение пароля</label>
                            <input
                                type="password"
                                value={password2}
                                onChange={(e) => setPassword2(e.target.value)}
                                style={styles.input}
                                placeholder="Повторите пароль"
                            />
                        </div>

                        <div style={styles.buttonGroup}>
                            <button
                                onClick={handleSendCode}
                                disabled={timer > 0 || isLoading}
                                style={{ ...styles.button, ...styles.secondaryButton }}
                            >
                                {timer > 0 ? `Отправить повторно (${timer}с)` : 'Отправить повторно'}
                            </button>
                            <button
                                onClick={handleRegister}
                                disabled={isLoading}
                                style={{ ...styles.button, ...styles.primaryButton }}
                            >
                                {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
                            </button>
                        </div>
                    </>
                )}

                <div style={styles.footer}>
                    Уже есть аккаунт?{' '}
                    <button onClick={() => navigate('/login')} style={styles.linkButton}>
                        Войти
                    </button>
                </div>
            </div>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        padding: '20px',
    },
    card: {
        background: 'white',
        borderRadius: '16px',
        padding: '32px',
        width: '100%',
        maxWidth: '450px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    title: {
        margin: '0 0 24px 0',
        fontSize: '24px',
        textAlign: 'center',
    },
    field: {
        marginBottom: '16px',
    },
    label: {
        display: 'block',
        marginBottom: '6px',
        fontSize: '14px',
        fontWeight: 500,
        color: '#374151',
    },
    input: {
        width: '100%',
        padding: '10px 12px',
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        fontSize: '16px',
        boxSizing: 'border-box' as 'border-box',
    },
    button: {
        width: '100%',
        padding: '12px',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 500,
        cursor: 'pointer',
        transition: 'background 0.2s',
    },
    primaryButton: {
        background: '#3b82f6',
        color: 'white',
    },
    secondaryButton: {
        background: '#f3f4f6',
        color: '#374151',
        border: '1px solid #d1d5db',
    },
    buttonGroup: {
        display: 'flex',
        gap: '12px',
        marginTop: '8px',
    },
    error: {
        background: '#fee2e2',
        color: '#dc2626',
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '16px',
        fontSize: '14px',
    },
    footer: {
        marginTop: '24px',
        textAlign: 'center',
        fontSize: '14px',
        color: '#6b7280',
    },
    linkButton: {
        background: 'none',
        border: 'none',
        color: '#3b82f6',
        cursor: 'pointer',
        fontSize: '14px',
        textDecoration: 'underline',
        padding: 0,
    },
};