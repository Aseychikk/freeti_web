import { Navigate } from 'react-router-dom';
import { getAuthToken } from '../lib/api-client';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const isAuthenticated = !!getAuthToken();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
}