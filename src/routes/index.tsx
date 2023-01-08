import { Routes as Router, Route } from 'react-router-dom';

import { Login } from '@/pages/auth/Login';
import { Home } from '@/pages/Home';

import { MainLayout } from '@/layouts/MainLayout';
import { AuthLayout } from '@/layouts/AuthLayout';

import { ProtectedRoute } from './ProtectedRoute';

import { useAuth } from '@/hooks/useAuth';


export default function Routes() {
  const { status } = useAuth()

  const Layout = status === 'authenticated' ? MainLayout : AuthLayout;

  return (
    <Layout>
      <Router>
        <Route
          element={<ProtectedRoute redirectPath="/login" status={status} />}
        >
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<h1>Pagina não encontrada</h1>} />
      </Router>
    </Layout>
  );
}
