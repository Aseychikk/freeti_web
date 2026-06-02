// src/App.tsx (добавьте ProfilePage в маршруты)
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LoginPage } from './components/LoginPage';
import { TaskPage } from './components/TaskPage';
import { ProfilePage } from './components/ProfilePage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { UnassignedTasksPage } from './components/UnassignedTasksPage';
import { RegisterPage } from './components/RegisterPage';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <TaskPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/register" element={<RegisterPage />} />
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
                    {/* TODO: добавить другие страницы (search, contacts, groups, settings) */}
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;