import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { SideMenu } from './SideMenu';
import { fetchGroups, createGroup } from '../lib/api';

export function GroupsPage() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const [searchQuery, setSearchQuery] = useState('');
    const [groups, setGroups] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Состояния для модального окна создания группы
    const [showAddModal, setShowAddModal] = useState(false);
    const [newGroupName, setNewGroupName] = useState('');
    const [newGroupBody, setNewGroupBody] = useState('');

    const loadGroups = async () => {
        setIsLoading(true);
        try {
            const data = await fetchGroups();
            setGroups(data || []);
        } catch (error) {
            console.error('Ошибка при загрузке групп:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadGroups();
    }, []);

    // Локальная фильтрация групп
    const filteredGroups = useMemo(() => {
        if (!searchQuery.trim()) return groups;
        const query = searchQuery.toLowerCase();
        return groups.filter(g => g.title && g.title.toLowerCase().includes(query));
    }, [groups, searchQuery]);

    // Обработчик создания группы
    const handleAddGroup = async () => {
        if (!newGroupName.trim()) {
            alert('Пожалуйста, введите название группы');
            return;
        }
        try {
            await createGroup({ title: newGroupName.trim(), body: newGroupBody.trim() });
            setShowAddModal(false);
            setNewGroupName('');
            setNewGroupBody('');
            loadGroups();
        } catch (error) {
            console.error('Ошибка при создании группы:', error);
            alert('Не удалось создать группу. Проверьте подключение.');
        }
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', position: 'relative' }}>
            <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            
            {/* Шапка */}
            <header style={{
                background: 'white', padding: '12px 24px', display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button onClick={() => setIsMenuOpen(true)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>
                        ☰
                    </button>
                    <h1 style={{ margin: 0, fontSize: '20px' }}>Группы</h1>
                </div>
                <button 
                    onClick={() => setShowAddModal(true)}
                    style={{
                        width: '36px', height: '36px', borderRadius: '50%', background: '#3b82f6', color: 'white',
                        border: 'none', fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                    }}
                >
                    +
                </button>
            </header>

            {/* Основной контент */}
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px 20px' }}>
                
                {/* Блок поиска */}
                <div style={{ background: 'white', borderRadius: '12px', padding: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '24px' }}>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Поиск по группам..."
                        style={{
                            width: '100%', padding: '12px 16px', border: '1px solid #d1d5db', boxSizing: 'border-box',
                            borderRadius: '8px', fontSize: '15px', outline: 'none'
                        }}
                    />
                </div>

                {/* Список групп */}
                <div style={{ background: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <h2 style={{ margin: 0, fontSize: '16px', color: '#4b5563' }}>
                            Мои группы ({filteredGroups.length})
                        </h2>
                    </div>

                    {isLoading ? (
                        <p style={{ color: '#9ca3af', textAlign: 'center', padding: '20px 0', margin: 0 }}>
                            Загрузка групп...
                        </p>
                    ) : filteredGroups.length === 0 ? (
                        <p style={{ color: '#9ca3af', textAlign: 'center', padding: '20px 0', margin: 0 }}>
                            {searchQuery ? 'Группы не найдены.' : 'У вас пока нет групп.'}
                        </p>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {filteredGroups.map((g) => (
                                <div 
                                    key={g.id} 
                                    onClick={() => navigate(`/group/${g.id}`)}
                                    style={{ 
                                        padding: '16px', border: '1px solid #f3f4f6', borderRadius: '8px', 
                                        background: '#f9fafb', cursor: 'pointer', transition: 'background-color 0.2s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                                >
                                    <div style={{ fontWeight: 600, fontSize: '16px', color: '#1f2937', marginBottom: '4px' }}>
                                        {g.title || 'Без названия'}
                                    </div>
                                    {g.body && (
                                        <div style={{ fontSize: '13px', color: '#6b7280', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {g.body}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Модальное окно создания группы */}
            {showAddModal && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1100
                }}>
                    <div style={{ background: 'white', borderRadius: '12px', padding: '24px', width: '90%', maxWidth: '400px' }}>
                        <h2 style={{ margin: '0 0 16px 0', fontSize: '18px' }}>Новая группа</h2>
                        
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>Название *</label>
                            <input
                                value={newGroupName}
                                onChange={(e) => setNewGroupName(e.target.value)}
                                style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box' }}
                            />
                        </div>

                        <div style={{ marginBottom: '24px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '4px' }}>Описание</label>
                            <input
                                value={newGroupBody}
                                onChange={(e) => setNewGroupBody(e.target.value)}
                                style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box' }}
                            />
                        </div>

                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button 
                                onClick={handleAddGroup}
                                style={{ flex: 1, padding: '10px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}
                            >
                                Подтвердить
                            </button>
                            <button 
                                onClick={() => setShowAddModal(false)}
                                style={{ flex: 1, padding: '10px', background: '#f3f4f6', color: '#374151', border: '1px solid #d1d5db', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}
                            >
                                Отмена
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}