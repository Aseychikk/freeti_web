// src/pages/ProfilePage.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser, useUpdateUser } from '../hooks/useUser';
import { useAuth } from '../hooks/useAuth';

export function ProfilePage() {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const { data: user, isLoading: isLoadingUser } = useUser();
    const updateUserMutation = useUpdateUser();

    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');
    const [isEditingAvatar, setIsEditingAvatar] = useState(false);

    useEffect(() => {
        if (user) {
            setUsername(user.username || '');
            setAvatar(user.avatar || '');
        }
    }, [user]);

    const handleSave = async () => {
        if (!username.trim()) {
            alert('Имя не может быть пустым');
            return;
        }

        updateUserMutation.mutate(
            {
                id: user?.id || 0,
                login: user?.login || '',
                username: username.trim(),
                avatar: avatar.trim() || ':)',
            },
            {
                onSuccess: () => {
                    setIsEditingAvatar(false);
                    alert('Профиль сохранён');
                },
                onError: () => {
                    alert('Ошибка при сохранении профиля');
                },
            }
        );
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (isLoadingUser) {
        return (
            <div style={styles.container}>
                <div style={styles.card}>Загрузка...</div>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                {/* Шапка с кнопкой назад */}
                <div style={styles.header}>
                    <button onClick={() => navigate('/')} style={styles.backButton}>
                        ← Назад
                    </button>
                    <h2 style={styles.title}>Профиль</h2>
                    <div style={{ width: '40px' }} />
                </div>

                {/* Аватар */}
                <div style={styles.avatarSection}>
                    <div
                        style={{
                            ...styles.avatar,
                            transform: 'rotate(90deg)',
                            background: '#3b82f6',
                        }}
                    >
                        {avatar.slice(0, 4) || '?'}
                    </div>
                    <button
                        onClick={() => setIsEditingAvatar(!isEditingAvatar)}
                        style={styles.changeAvatarButton}
                    >
                        Изменить аватар
                    </button>
                </div>

                {/* Редактирование аватара */}
                {isEditingAvatar && (
                    <div style={styles.editAvatarSection}>
                        <label style={styles.label}>Аватар (до 4 символов):</label>
                        <input
                            type="text"
                            value={avatar}
                            onChange={(e) => setAvatar(e.target.value.slice(0, 4))}
                            maxLength={4}
                            autoFocus
                            style={styles.input}
                            placeholder="Например: :)"
                        />
                        <p style={styles.hint}>
                            Аватар будет отображаться как текст, повёрнутый на 90°
                        </p>
                    </div>
                )}

                {/* Редактирование имени */}
                <div style={styles.field}>
                    <label style={styles.label}>Имя пользователя:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={styles.input}
                        placeholder="Введите имя"
                    />
                </div>

                {/* Логин (только для чтения) */}
                <div style={styles.field}>
                    <label style={styles.label}>Логин:</label>
                    <input
                        type="text"
                        value={user?.login || ''}
                        disabled
                        style={{ ...styles.input, ...styles.disabledInput }}
                    />
                </div>

                {/* Кнопки */}
                <div style={styles.buttonGroup}>
                    <button onClick={handleSave} style={styles.saveButton}>
                        Сохранить
                    </button>
                    <button onClick={handleLogout} style={styles.logoutButton}>
                        Выйти из аккаунта
                    </button>
                </div>
            </div>
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    },
    card: {
        background: 'white',
        borderRadius: '16px',
        padding: '24px',
        width: '100%',
        maxWidth: '500px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '24px',
    },
    backButton: {
        padding: '8px 12px',
        background: 'none',
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '14px',
    },
    title: {
        margin: 0,
        fontSize: '20px',
    },
    avatarSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '24px',
    },
    avatar: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '32px',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '12px',
        transform: 'rotate(90deg)',
    },
    changeAvatarButton: {
        padding: '6px 12px',
        background: 'none',
        border: '1px solid #d1d5db',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '13px',
        color: '#3b82f6',
    },
    editAvatarSection: {
        marginBottom: '20px',
        padding: '12px',
        background: '#f9fafb',
        borderRadius: '8px',
    },
    field: {
        marginBottom: '20px',
    },
    label: {
        display: 'block',
        marginBottom: '8px',
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
    disabledInput: {
        backgroundColor: '#f3f4f6',
        color: '#9ca3af',
    },
    hint: {
        marginTop: '8px',
        fontSize: '12px',
        color: '#9ca3af',
    },
    buttonGroup: {
        display: 'flex',
        gap: '12px',
        marginTop: '24px',
    },
    saveButton: {
        flex: 1,
        padding: '12px',
        background: '#3b82f6',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 500,
        cursor: 'pointer',
    },
    logoutButton: {
        flex: 1,
        padding: '12px',
        background: '#ef4444',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 500,
        cursor: 'pointer',
    },
};