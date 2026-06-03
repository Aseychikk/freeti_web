import { useState, useEffect } from 'react';
import { SideMenu } from './SideMenu';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export function SettingsPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { logout } = useAuth();
    const navigate = useNavigate();

    // Состояния для настроек (аналогично SharedPreferences из Android)
    const [noTestAdd, setNoTestAdd] = useState(false);
    const [autoToMain, setAutoToMain] = useState(false);

    // Загружаем настройки при открытии страницы
    useEffect(() => {
        const savedNoTestAdd = localStorage.getItem('noTestAdd') === 'true';
        const savedAutoToMain = localStorage.getItem('AutoToMain') === 'true';
        setNoTestAdd(savedNoTestAdd);
        setAutoToMain(savedAutoToMain);
    }, []);

    // Сохраняем при изменении
    const handleToggleNoTestAdd = (checked: boolean) => {
        setNoTestAdd(checked);
        localStorage.setItem('noTestAdd', String(checked));
    };

    const handleToggleAutoToMain = (checked: boolean) => {
        setAutoToMain(checked);
        localStorage.setItem('AutoToMain', String(checked));
    };

    const handleLogout = () => {
        if (window.confirm('Вы уверены, что хотите выйти из аккаунта?')) {
            logout(); // Очищает токены (ваша функция из useAuth)
            navigate('/login');
        }
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            
            {/* Шапка */}
            <header style={{
                background: 'white', padding: '12px 24px', display: 'flex',
                alignItems: 'center', gap: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
                <button onClick={() => setIsMenuOpen(true)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>
                    ☰
                </button>
                <h1 style={{ margin: 0, fontSize: '20px' }}>Настройки</h1>
            </header>

            {/* Основной контент */}
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '24px 20px' }}>
                <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    
                    <h2 style={{ margin: '0 0 20px 0', fontSize: '18px', color: '#374151' }}>Общие настройки</h2>

                    {/* Настройка 1 (noTestAdd) */}
                    <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', marginBottom: '16px' }}>
                        <input 
                            type="checkbox" 
                            checked={noTestAdd}
                            onChange={(e) => handleToggleNoTestAdd(e.target.checked)}
                            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                        />
                        <span style={{ fontSize: '16px', color: '#1f2937' }}>Без тестового добавления (noTestAdd)</span>
                    </label>

                    {/* Настройка 2 (AutoToMain) */}
                    <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', marginBottom: '32px' }}>
                        <input 
                            type="checkbox" 
                            checked={autoToMain}
                            onChange={(e) => handleToggleAutoToMain(e.target.checked)}
                            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                        />
                        <span style={{ fontSize: '16px', color: '#1f2937' }}>Автоматически переходить на главную</span>
                    </label>

                    <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', marginBottom: '24px' }} />

                    {/* Кнопка выхода */}
                    <button 
                        onClick={handleLogout}
                        style={{
                            width: '100%', padding: '12px', backgroundColor: '#ef4444', color: 'white',
                            border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 600, cursor: 'pointer'
                        }}
                    >
                        Выйти из аккаунта
                    </button>

                </div>
            </div>
        </div>
    );
}