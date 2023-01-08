import { AuthStatus } from '@/hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

interface Props {
  status: AuthStatus;
  redirectPath: string;
}

export const ProtectedRoute = ({ status, redirectPath = '/login' }: Props) =>
  status === 'authenticated' ? (
    <Outlet />
  ) : (
    <Navigate to={redirectPath} replace />
  );
