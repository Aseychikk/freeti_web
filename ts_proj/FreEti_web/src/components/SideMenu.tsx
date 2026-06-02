// src/components/SideMenu.tsx
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useUser } from '../hooks/useUser';

interface SideMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SideMenu({ isOpen, onClose }: SideMenuProps) {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const { data: user } = useUser();
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const menuItems = [
        { icon: '🔍', label: 'Поиск', path: '/search' },
        { icon: '👥', label: 'Контакты', path: '/contacts' },
        { icon: '👥', label: 'Группы', path: '/groups' },
        { icon: '👤', label: 'Профиль', path: '/profile' },
        { icon: '⚙️', label: 'Настройки', path: '/settings' },
    ];

    const handleNavigate = (path: string) => {
        onClose();
        navigate(path);
    };

    const handleLogout = () => {
        logout();
        onClose();
        navigate('/login');
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Оверлей */}
            <div style={styles.overlay}>
                {/* Меню */}
                <div ref={menuRef} style={styles.menu}>
                    {/* Профиль в шапке меню */}
                    <div style={styles.profileHeader}>
                        <div
                            style={{
                                ...styles.avatar,
                                transform: 'rotate(90deg)',
                            }}
                        >
                            {(user?.avatar || user?.username?.[0] || '?').slice(0, 4)}
                        </div>
                        <div style={styles.profileInfo}>
                            <div style={styles.username}>
                                {user?.username || 'Пользователь'}
                            </div>
                            <div style={styles.login}>{user?.login || ''}</div>
                        </div>
                    </div>

                    {/* Пункты меню */}
                    <div style={styles.menuItems}>
                        {menuItems.map((item) => (
                            <button
                                key={item.path}
                                onClick={() => handleNavigate(item.path)}
                                style={styles.menuItem}
                            >
                                <span style={styles.menuIcon}>{item.icon}</span>
                                <span>{item.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Разделитель */}
                    <div style={styles.divider} />

                    {/* Кнопка выхода */}
                    <button onClick={handleLogout} style={styles.logoutItem}>
                        <span style={styles.menuIcon}>🚪</span>
                        <span>Выйти</span>
                    </button>
                </div>
            </div>
        </>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
    },
    menu: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '280px',
        height: '100%',
        backgroundColor: 'white',
        boxShadow: '2px 0 8px rgba(0,0,0,0.15)',
        display: 'flex',
        flexDirection: 'column',
        animation: 'slideIn 0.3s ease-out',
    },
    profileHeader: {
        padding: '24px 20px',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
    },
    avatar: {
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: '#3b82f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'white',
    },
    profileInfo: {
        flex: 1,
    },
    username: {
        fontSize: '16px',
        fontWeight: 600,
        color: '#1f2937',
    },
    login: {
        fontSize: '12px',
        color: '#9ca3af',
        marginTop: '2px',
    },
    menuItems: {
        flex: 1,
        padding: '12px 0',
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        width: '100%',
        padding: '12px 20px',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        fontSize: '15px',
        color: '#374151',
        textAlign: 'left',
        transition: 'background-color 0.2s',
    },
    menuIcon: {
        fontSize: '20px',
        width: '24px',
    },
    divider: {
        height: '1px',
        backgroundColor: '#e5e7eb',
        margin: '8px 20px',
    },
    logoutItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        width: '100%',
        padding: '12px 20px',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        fontSize: '15px',
        color: '#ef4444',
        textAlign: 'left',
        marginBottom: '20px',
        transition: 'background-color 0.2s',
    },
};

// Добавим анимацию
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(styleSheet);