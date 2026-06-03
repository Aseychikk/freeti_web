import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUsersByIds, getOtherTasks, addContact, removeContact, fetchContacts } from '../lib/api';
import type { UserAnswer } from '../lib/api';
import { useUser } from '../hooks/useUser';

const MONTHS = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const DAYS = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']; 

function formatTime(timestamp: number): string {
    if (!timestamp) return '';
    const d = new Date(timestamp);
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

export function FriendProfilePage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    
    // Получаем ваш ID для правильного формирования связей (контактов/друзей)
    const { data: currentUser } = useUser();
    const myId = currentUser?.id;

    const [friend, setFriend] = useState<UserAnswer | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    
    // Статусы
    const [isContact, setIsContact] = useState(false);
    const [isFriend, setIsFriend] = useState(false);

    // Дата и приватность
    const [selectedDay, setSelectedDay] = useState<Date>(new Date());
    const [privacy, setPrivacy] = useState<'PUBLIC' | 'FRIENDS'>('PUBLIC');
    const [tasks, setTasks] = useState<any[]>([]);


    useEffect(() => {
        const loadFriendProfile = async () => {
            if (!id || id === 'undefined' || !myId) return;

            try {

                const users = await getUsersByIds(id);
                if (users && users.length > 0) {
                    const currentFriend = users[0];
                    setFriend(currentFriend);
                    const relations = await fetchContacts();
                    const relation = relations.find((r: any) => 
                        (r.user1 === myId && r.user2 === currentFriend.id) || 
                        (r.user1 === currentFriend.id && r.user2 === myId)
                    );

                    if (relation) {
                        setIsContact(true);
                        setIsFriend(Boolean(relation.isFriend)); 
                    } else {
                        setIsContact(false);
                        setIsFriend(false);
                    }
                } else {
                    console.error("Пользователь с таким ID не найден в базе");
                }
            } catch (error) {
                console.error('Ошибка при загрузке профиля:', error);
            } finally {
                setIsLoading(false);
            }
        };

        loadFriendProfile();
    }, [id, myId]);

    // 2. Загрузка задач
    useEffect(() => {
        const loadTasks = async () => {
            if (!friend?.login) return;
            
            const year = selectedDay.getFullYear();
            const month = String(selectedDay.getMonth() + 1).padStart(2, '0');
            const day = String(selectedDay.getDate()).padStart(2, '0');
            const yearMonth = `${year}-${month}-${day}`;

            try {
                const data = await getOtherTasks(yearMonth, friend.login);
                setTasks(data || []);
            } catch (error) {
                console.error('Ошибка при загрузке задач:', error);
            }
        };
        loadTasks();
    }, [friend?.login, selectedDay.getDate(), selectedDay.getMonth(), selectedDay.getFullYear()]);


    const dayTasks = useMemo(() => {
        const startOfDay = new Date(selectedDay);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(selectedDay);
        endOfDay.setHours(23, 59, 59, 999);

        return tasks.filter(t => {
            if (privacy === 'PUBLIC' && t.privacy !== 'PUBLIC') return false;
            if (privacy === 'FRIENDS' && t.privacy === 'PRIVATE') return false;

            const taskStart = new Date(t.start);
            const taskEnd = new Date(t.time_end || t.start);
            return taskStart <= endOfDay && taskEnd >= startOfDay;
        }).sort((a, b) => a.start - b.start);
    }, [tasks, selectedDay, privacy]);

    const handleToggleContact = async () => {
        if (!friend || !myId) return;
        try {
            if (isContact) {

                await removeContact({ user1: myId, user2: friend.id, isFriend: isFriend });
                
                setIsContact(false);
                setIsFriend(false);
            } else {

                await addContact({ user1: myId, user2: friend.id, isFriend: false });
                setIsContact(true);
            }
        } catch (error) {
            console.error('Ошибка сети при изменении статуса контакта', error);
            alert('Ошибка сети при изменении статуса контакта');
        }
    };

    // Обработчик "Сделать другом / Удалить из друзей"
    const handleToggleFriend = async () => {
        if (!friend || !myId) return;
        try {
            const newFriendStatus = !isFriend;
            await addContact({ user1: myId, user2: friend.id, isFriend: newFriendStatus });
            
            setIsFriend(newFriendStatus);
            if (newFriendStatus) setIsContact(true);
        } catch (error) {
            console.error('Ошибка сети при изменении статуса друга', error);
            alert('Ошибка сети при изменении статуса друга');
        }
    };

    const changeDay = (delta: number) => {
        const newDay = new Date(selectedDay);
        newDay.setDate(newDay.getDate() + delta);
        setSelectedDay(newDay);
    };

    if (isLoading) return <div style={{ padding: '24px', textAlign: 'center' }}>Загрузка профиля...</div>;
    if (!friend) return <div style={{ padding: '24px', textAlign: 'center' }}>Пользователь не найден</div>;

    const formattedDate = `${selectedDay.getDate()} ${MONTHS[selectedDay.getMonth()]} ${selectedDay.getFullYear()}, ${DAYS[selectedDay.getDay()]}`;

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            {/* Шапка с кнопками */}

            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '24px 20px' }}>
                {/* Внутренняя навигация */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <button onClick={() => navigate(-1)} style={{ padding: '8px 12px', background: 'white', border: '1px solid #d1d5db', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', color: '#374151', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                        ← Назад
                    </button>
                    <h1 style={{ margin: 0, fontSize: '18px', color: '#1f2937' }}>Профиль пользователя</h1>
                    <button onClick={() => navigate('/')} style={{ padding: '8px 12px', background: 'white', border: '1px solid #d1d5db', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', color: '#374151', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                        📅
                        Главная
                    </button>
                </div>
                
                {/* Карточка профиля */}
                <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '24px', textAlign: 'center' }}>
                    <div style={{ 
                        width: '80px', height: '80px', borderRadius: '50%', background: '#3b82f6', color: 'white',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', fontWeight: 'bold',
                        margin: '0 auto 16px auto'
                    }}>
                        {(friend.avatar || friend.username[0] || '?').toUpperCase()}
                    </div>
                    <h2 style={{ margin: '0 0 4px 0', fontSize: '20px', color: '#1f2937' }}>{friend.username}</h2>
                    <p style={{ margin: '0 0 20px 0', fontSize: '14px', color: '#6b7280' }}>@{friend.login}</p>

                    {/* Показываем кнопки управления дружбой только если это НЕ ваш собственный профиль */}
                    {myId !== friend.id && (
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                            <button 
                                onClick={handleToggleContact}
                                style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: 600, fontSize: '14px', cursor: 'pointer', background: isContact ? '#f3f4f6' : '#3b82f6', color: isContact ? '#ef4444' : 'white' }}
                            >
                                {isContact ? 'Удалить из контактов' : 'В контакты'}
                            </button>
                            <button 
                                onClick={handleToggleFriend}
                                style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: 600, fontSize: '14px', cursor: 'pointer', background: isFriend ? '#f3f4f6' : '#10b981', color: isFriend ? '#ef4444' : 'white' }}
                            >
                                {isFriend ? 'Удалить из друзей' : 'Сделать другом'}
                            </button>
                        </div>
                    )}
                </div>

                {/* Расписание друга */}
                <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ margin: 0, fontSize: '16px' }}>Расписание</h3>
                            <button 
                                onClick={() => setPrivacy(privacy === 'PUBLIC' ? 'FRIENDS' : 'PUBLIC')}
                                style={{
                                    padding: '6px 12px', borderRadius: '6px', border: 'none', fontSize: '12px', fontWeight: 600, cursor: 'pointer',
                                    background: privacy === 'PUBLIC' ? '#a76a6b' : '#617d9a', color: 'white', display: 'flex', alignItems: 'center', gap: '6px'
                                }}
                            >
                                {privacy === 'PUBLIC' ? '🌐 Публичные' : '👥 Для друзей'}
                            </button>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f9fafb', padding: '8px', borderRadius: '8px' }}>
                            <button onClick={() => changeDay(-1)} style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', padding: '0 12px' }}>←</button>
                            <span style={{ fontWeight: 600, fontSize: '14px', color: '#374151' }}>{formattedDate}</span>
                            <button onClick={() => changeDay(1)} style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', padding: '0 12px' }}>→</button>
                        </div>
                    </div>

                    {/* Список задач */}
                    {dayTasks.length === 0 ? (
                        <p style={{ color: '#9ca3af', textAlign: 'center', padding: '20px 0', margin: 0 }}>
                            Нет доступных задач на этот день.
                        </p>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {dayTasks.map(task => (
                                <div key={task.id} style={{
                                    padding: '12px 16px', borderRadius: '8px', background: task.colour ? `#${task.colour}` : '#3b82f6', color: 'white',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: '4px'
                                }}>
                                    <div style={{ fontWeight: 600, fontSize: '15px' }}>{task.title}</div>
                                    <div style={{ fontSize: '12px', opacity: 0.9 }}>
                                        {formatTime(task.start)} {task.time_end > task.start && `- ${formatTime(task.time_end)}`}
                                    </div>
                                    {task.body && <div style={{ fontSize: '13px', marginTop: '4px', opacity: 0.9 }}>{task.body}</div>}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}