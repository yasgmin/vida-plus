
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  userType?: 'patient' | 'staff';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, userType }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (userType && user.userType !== userType) {
    // If specific user type is required but user doesn't match
    return <Navigate to="/help" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
