import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LoginPage } from './components/LoginPage';
import { TaskPage } from './components/TaskPage';
import { ProfilePage } from './components/ProfilePage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { UnassignedTasksPage } from './components/UnassignedTasksPage';
import { RegisterPage } from './components/RegisterPage';

// Импортируем новые страницы-заглушки
import { SearchPage } from './components/SearchPage';
import { ContactsPage } from './components/ContactsPage';
import { GroupsPage } from './components/GroupsPage';
import { SettingsPage } from './components/SettingsPage';
import { FriendProfilePage } from './components/FriendProfilePage';
import { GroupDetailsPage } from './components/GroupDetailsPage';
import { MembersPage } from './components/MembersPage';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    {/* Публичные маршруты */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    
                    {/* Защищенные маршруты */}
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <TaskPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <ProfilePage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/unassigned"
                        element={
                            <ProtectedRoute>
                                <UnassignedTasksPage />
                            </ProtectedRoute>
                        }
                    />

                    {/* --- НОВЫЕ СТРАНИЦЫ ИЗ БОКОВОГО МЕНЮ --- */}
                    <Route
                        path="/search"
                        element={
                            <ProtectedRoute>
                                <SearchPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/contacts"
                        element={
                            <ProtectedRoute>
                                <ContactsPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/groups"
                        element={
                            <ProtectedRoute>
                                <GroupsPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/settings"
                        element={
                            <ProtectedRoute>
                                <SettingsPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/friend/:id"
                        element={
                            <ProtectedRoute>
                                <FriendProfilePage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/group/:id"
                        element={
                            <ProtectedRoute>
                                <GroupDetailsPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/group/:id/members"
                        element={
                            <ProtectedRoute>
                                <MembersPage />
                            </ProtectedRoute>
                        }
                    />

                    {/* Редирект для любых неизвестных адресов (возвращаем на главную) */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;