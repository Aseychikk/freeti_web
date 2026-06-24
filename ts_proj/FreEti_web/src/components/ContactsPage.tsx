import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SideMenu } from './SideMenu';
import { fetchContacts, getUsersByIds, addMemberToGroup } from '../lib/api';
import { useUser } from '../hooks/useUser';

export function ContactsPage() {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Проверяем, пришли ли мы сюда из группы для добавления участника
    const selectingForGroup = location.state?.selectingForGroup;

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const { data: currentUser } = useUser();
    const myId = currentUser?.id;

    const [searchQuery, setSearchQuery] = useState('');
    const [contacts, setContacts] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadContacts = async () => {
            if (!myId) return;

            try {
                setIsLoading(true);
                const relations = await fetchContacts();
                
                if (!relations || relations.length === 0) {
                    setContacts([]);
                    return;
                }

                const friendIds = relations.map((r: any) => r.user1 === myId ? r.user2 : r.user1);

                if (friendIds.length > 0) {
                    const profiles = await getUsersByIds(friendIds.join(','));
                    setContacts(profiles || []);
                } else {
                    setContacts([]);
                }

            } catch (error) {
                console.error('Ошибка при загрузке контактов:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadContacts();
    }, [myId]);

    const filteredContacts = useMemo(() => {
        if (!searchQuery.trim()) return contacts;
        const query = searchQuery.toLowerCase();
        return contacts.filter(c => 
            (c.username && c.username.toLowerCase().includes(query)) || 
            (c.login && c.login.toLowerCase().includes(query))
        );
    }, [contacts, searchQuery]);

   const handleContactClick = async (contactId: number) => {
        if (!contactId) return;

        if (selectingForGroup) {
            // Режим добавления в группу
            try {
                await addMemberToGroup(selectingForGroup, contactId);
                alert('Пользователь успешно добавлен в группу!');
                
                navigate(-2); 
                
            } catch (error) {
                console.error('Ошибка при добавлении в группу:', error);
                alert('Ошибка: Возможно, у вас нет прав или пользователь уже в группе.');
            }
        } else {
            // Обычный режим (переход в профиль)
            navigate(`/friend/${contactId}`);
        }
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            
            <header style={{
                background: 'white', padding: '12px 24px', display: 'flex',
                alignItems: 'center', gap: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
                <button onClick={() => setIsMenuOpen(true)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>
                    ☰
                </button>

                {/* Меняем заголовок в зависимости от режима */}
                <h1 style={{ margin: 0, fontSize: '20px', color: selectingForGroup ? '#3b82f6' : '#1f2937' }}>
                    {selectingForGroup ? 'Выберите, кого добавить' : 'Контакты'}
                </h1>
            </header>

            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px 20px' }}>
                
                {/* Если мы в режиме добавления, показываем подсказку */}
                {selectingForGroup && (
                    <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', color: '#1e40af', padding: '12px', borderRadius: '8px', marginBottom: '16px', fontSize: '14px' }}>
                        Нажмите на контакт, чтобы пригласить его в группу.
                    </div>
                )}

                <div style={{ background: 'white', borderRadius: '12px', padding: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '24px' }}>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Поиск по контактам..."
                        style={{
                            width: '100%', padding: '12px 16px', border: '1px solid #d1d5db', boxSizing: 'border-box',
                            borderRadius: '8px', fontSize: '15px', outline: 'none'
                        }}
                    />
                </div>

                <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    {isLoading ? (
                        <p style={{ color: '#9ca3af', textAlign: 'center', padding: '20px 0', margin: 0 }}>
                            Загрузка контактов...
                        </p>
                    ) : filteredContacts.length === 0 ? (
                        <p style={{ color: '#9ca3af', textAlign: 'center', padding: '20px 0', margin: 0 }}>
                            У вас пока нет контактов.
                        </p>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {filteredContacts.map((c) => {
                                const displayName = c.username || 'Без имени';
                                const displayLogin = c.login || '';
                                
                                return (
                                    <div 
                                        key={c.id} 
                                        onClick={() => handleContactClick(c.id)}
                                        style={{ 
                                            display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer',
                                            padding: '12px', border: '1px solid #f3f4f6', borderRadius: '8px', background: '#f9fafb',
                                            transition: 'background-color 0.2s'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                                    >
                                        <div style={{ 
                                            width: '40px', height: '40px', borderRadius: '50%', background: '#10b981', flexShrink: 0,
                                            color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                                            fontWeight: 'bold', fontSize: '16px',
                                            transform: 'rotate(90deg)'
                                        }}>
                                            {/* Безопасный для TS код */}
                                            {c.avatar 
                                                ? Array.from(String(c.avatar)).slice(0, 4).join('') 
                                                : String(Array.from(String(displayName || '?'))[0] || '?').toUpperCase()
                                            }
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: '15px', color: '#1f2937' }}>{displayName}</div>
                                            {displayLogin && (
                                                <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '2px' }}>@{displayLogin}</div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}