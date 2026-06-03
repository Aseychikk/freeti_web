import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getGroupMembers, getUsersByIds, leaveGroup, deleteGroup, removeMemberFromGroup, switchMemberRole } from '../lib/api';
import { useUser } from '../hooks/useUser';

export function MembersPage() {
    const { id: groupId } = useParams<{ id: string }>();
    const navigate = useNavigate();
    
    const { data: currentUser } = useUser();
    const myId = currentUser?.id;

    const [members, setMembers] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [myRole, setMyRole] = useState<string>('MEMBER');

    const loadMembers = async () => {
        if (!groupId) return;
        setIsLoading(true);
        try {
            let membersLinks: any = await getGroupMembers(groupId);
            
            if (!Array.isArray(membersLinks)) {
                membersLinks = membersLinks?.data || membersLinks?.content || [];
            }

            if (!membersLinks || membersLinks.length === 0) {
                setMembers([]);
                return;
            }

            const idsArray = membersLinks
                .map((m: any) => m.user1 || m.user_id || m.userId)
                .filter((id: any) => id !== undefined && id !== null);

            if (idsArray.length === 0) {
                setMembers([]);
                return;
            }

            const me = membersLinks.find((m: any) => (m.user1 || m.user_id || m.userId) === myId);
            if (me) setMyRole((me.role || 'MEMBER').toUpperCase());

            const profiles = await getUsersByIds(idsArray.join(','));
            const validProfiles = Array.isArray(profiles) ? profiles : [];

            const mergedMembers = validProfiles.map((profile: any) => {
                const link = membersLinks.find((m: any) => (m.user1 || m.user_id || m.userId) === profile.id);
                return { ...profile, role: (link?.role || 'MEMBER').toUpperCase() };
            });

            mergedMembers.sort((a, b) => {
                if (a.role === 'OWNER') return -1;
                if (b.role === 'OWNER') return 1;
                if (a.role === 'ADMIN' && b.role !== 'OWNER') return -1;
                return 0;
            });

            setMembers(mergedMembers);
        } catch (error) {
            console.error('Ошибка при загрузке участников:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadMembers();
    }, [groupId, myId]);

    const handleLeaveGroup = async () => {
        if (!groupId || !window.confirm('Вы точно хотите покинуть группу?')) return;
        try {
            await leaveGroup(groupId);
            navigate('/groups');
        } catch (error) {
            alert('Ошибка при выходе из группы');
        }
    };

    const handleDeleteGroup = async () => {
        if (!groupId || !window.confirm('ВНИМАНИЕ! Вы точно хотите удалить эту группу навсегда?')) return;
        try {
            await deleteGroup(groupId);
            navigate('/groups');
        } catch (error) {
            alert('Ошибка при удалении группы');
        }
    };

    const handleSwitchRole = async (userId: number) => {
        if (!groupId) return;
        try {
            await switchMemberRole(groupId, userId);
            loadMembers();
        } catch (error) {
            alert('Ошибка при изменении роли. Проверьте свои права.');
        }
    };

    const handleRemoveMember = async (userId: number, username: string) => {
        if (!groupId || !window.confirm(`Удалить пользователя ${username} из группы?`)) return;
        try {
            await removeMemberFromGroup(groupId, userId);
            loadMembers();
        } catch (error) {
            alert('Ошибка при удалении участника. Проверьте свои права.');
        }
    };

    // Функция для красивого отображения роли
    const getRoleLabel = (role: string) => {
        if (role === 'OWNER') return 'ВЛАДЕЛЕЦ';
        if (role === 'ADMIN') return 'АДМИН';
        return 'УЧАСТНИК';
    };

    const getRoleColor = (role: string) => {
        if (role === 'OWNER') return '#ef4444'; // Красный
        if (role === 'ADMIN') return '#f59e0b'; // Оранжевый
        return '#10b981'; // Зеленый
    };

    if (isLoading) return <div style={{ padding: '24px', textAlign: 'center' }}>Загрузка участников...</div>;

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', paddingBottom: '40px', paddingTop: '24px' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px' }}>
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <button onClick={() => navigate(-1)} style={{ padding: '8px 12px', background: 'white', border: '1px solid #d1d5db', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', color: '#374151', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                        ← Назад
                    </button>
                    <h1 style={{ margin: 0, fontSize: '18px', color: '#1f2937' }}>Участники ({members.length})</h1>
                    <button onClick={() => navigate('/')} style={{ padding: '8px 12px', background: 'white', border: '1px solid #d1d5db', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', color: '#374151', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                        🏠 Главная
                    </button>
                </div>

                {members.length > 0 && (
                    <div style={{ background: 'white', borderRadius: '12px', padding: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '24px' }}>
                        {members.map(member => {
                            // Права: Владелец может всё. Админ может управлять только участниками (но не владельцем).
                            const canManage = (myRole === 'OWNER') || (myRole === 'ADMIN' && member.role !== 'OWNER' && member.role !== 'ADMIN');
                            const isMe = member.id === myId;

                            return (
                                <div key={member.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px', borderBottom: '1px solid #f3f4f6' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#3b82f6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                            {(member.avatar || member.username[0] || '?').toUpperCase()}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 600, fontSize: '15px', color: '#1f2937' }}>
                                                {member.username} {isMe && <span style={{ color: '#9ca3af', fontWeight: 'normal' }}> (Вы)</span>}
                                            </div>
                                            <div style={{ fontSize: '12px', color: getRoleColor(member.role), fontWeight: 600, marginTop: '2px' }}>
                                                {getRoleLabel(member.role)}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {canManage && !isMe && (
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <button onClick={() => handleSwitchRole(member.id)} style={{ padding: '6px 12px', background: '#f3f4f6', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }}>
                                                Роль
                                            </button>
                                            <button onClick={() => handleRemoveMember(member.id, member.username)} style={{ padding: '6px 12px', background: '#fee2e2', color: '#ef4444', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }}>
                                                Удалить
                                            </button>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {/* Приглашать могут владельцы и админы */}
                    {(myRole === 'OWNER' || myRole === 'ADMIN') && (
                        <button onClick={() => navigate('/contacts', { state: { selectingForGroup: groupId } })} style={{ padding: '14px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>
                            + Добавить участника (из контактов)
                        </button>
                    )}
                    
                    {myRole === 'OWNER' ? (
                        <button onClick={handleDeleteGroup} style={{ padding: '14px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>
                            Удалить группу
                        </button>
                    ) : (
                        <button onClick={handleLeaveGroup} style={{ padding: '14px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>
                            Покинуть группу
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}