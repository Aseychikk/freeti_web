import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SideMenu } from './SideMenu';
import { searchUsersByUsername, searchUsersByLogin } from '../lib/api';
import type { UserAnswer } from '../lib/api';
import { useUser } from '../hooks/useUser';

export function SearchPage() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Состояния поиска
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState<'username' | 'login'>('username');
    const [results, setResults] = useState<UserAnswer[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // Получаем текущего пользователя, чтобы случайно не найти самих себя
    const { data: currentUser } = useUser();

    // Эффект для автоматического поиска (debounce)
    useEffect(() => {
        const query = searchQuery.trim();
        
        if (!query) {
            setResults([]);
            return;
        }

        setIsLoading(true);

        // Ждем 500 мс после последнего нажатия клавиши, прежде чем отправить запрос
        const delayDebounceFn = setTimeout(async () => {
            try {
                let data: UserAnswer[] = [];
                if (searchType === 'username') {
                    data = await searchUsersByUsername(query);
                } else {
                    // Убираем символ '@', если пользователь случайно его ввел
                    const cleanLogin = query.replace(/^@/, '');
                    data = await searchUsersByLogin(cleanLogin);
                }
                
                // Убираем себя из результатов
                const filteredData = data.filter(u => u.id !== currentUser?.id);
                setResults(filteredData);
            } catch (error) {
                console.error('Ошибка при поиске:', error);
            } finally {
                setIsLoading(false);
            }
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery, searchType, currentUser?.id]);

    // Обработчик клика на пользователя (как в Android: переход в профиль друга)
    const handleUserClick = (user: UserAnswer) => {
        // Мы передаем ID друга в URL. 
        // Позже нам нужно будет добавить роут /friend/:id в App.tsx
        navigate(`/friend/${user.id}`);
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
                <h1 style={{ margin: 0, fontSize: '20px' }}>Поиск</h1>
            </header>

            {/* Основной контент */}
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px 20px' }}>
                
                {/* Блок ввода */}
                <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '24px' }}>
                    
                    {/* Переключатель типа поиска */}
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                        <button 
                            onClick={() => { setSearchType('username'); setSearchQuery(''); }}
                            style={{
                                flex: 1, padding: '8px', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: 600,
                                border: searchType === 'username' ? '2px solid #3b82f6' : '1px solid #d1d5db',
                                background: searchType === 'username' ? '#dbeafe' : 'white',
                                color: searchType === 'username' ? '#1d4ed8' : '#4b5563'
                            }}
                        >
                            Имя
                        </button>
                        <button 
                            onClick={() => { setSearchType('login'); setSearchQuery(''); }}
                            style={{
                                flex: 1, padding: '8px', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: 600,
                                border: searchType === 'login' ? '2px solid #3b82f6' : '1px solid #d1d5db',
                                background: searchType === 'login' ? '#dbeafe' : 'white',
                                color: searchType === 'login' ? '#1d4ed8' : '#4b5563'
                            }}
                        >
                            Логин
                        </button>
                    </div>

                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={searchType === 'username' ? 'Введите имя...' : 'Введите логин (напр. kirill01)'}
                        style={{
                            width: '100%', padding: '12px 16px', border: '1px solid #d1d5db', boxSizing: 'border-box',
                            borderRadius: '8px', fontSize: '15px', outline: 'none'
                        }}
                    />
                </div>

                {/* Результаты поиска */}
                {searchQuery.trim() && (
                    <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                        <h2 style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#4b5563' }}>
                            {isLoading ? 'Ищем...' : `Результаты (${results.length})`}
                        </h2>

                        {!isLoading && results.length === 0 ? (
                            <p style={{ color: '#9ca3af', textAlign: 'center', padding: '20px 0', margin: 0 }}>
                                Никого не найдено
                            </p>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {results.map((u) => (
                                    <div 
                                        key={u.id} 
                                        onClick={() => handleUserClick(u)}
                                        style={{ 
                                            display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer',
                                            padding: '12px', border: '1px solid #f3f4f6', borderRadius: '8px', background: '#f9fafb',
                                            transition: 'background-color 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                                    >
                                        <div style={{ 
                                            width: '40px', height: '40px', borderRadius: '50%', background: '#3b82f6', flexShrink: 0,
                                            color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                                            fontWeight: 'bold', fontSize: '16px' 
                                        }}>
                                            {(u.avatar || u.username[0] || '?').toUpperCase()}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: '15px', color: '#1f2937' }}>{u.username}</div>
                                            <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '2px' }}>@{u.login}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}