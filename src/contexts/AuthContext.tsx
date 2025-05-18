
import React, { createContext, useState, useContext, useEffect } from 'react';

type User = {
  id: string;
  name: string;
  cpf: string;
  email: string;
  userType: 'patient' | 'staff';
};

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  login: (cpf: string, password: string, userType: 'patient' | 'staff') => Promise<boolean>;
  logout: () => void;
  register: (user: Omit<User, 'id'> & { password: string, birthDate: string }) => Promise<boolean>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const storedUser = localStorage.getItem('vidaplus_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (cpf: string, password: string, userType: 'patient' | 'staff'): Promise<boolean> => {
    setIsLoading(true);
    try {
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      

      const mockPatients = [
        { id: '1', name: 'José Alberto', cpf: '12345678900', email: 'jose@example.com', userType: 'patient' as const },
      ];
      
      const mockStaff = [
        { id: '101', name: 'Dr. Luiz Camargo', cpf: '98765432100', email: 'luiz@vidaplus.com', userType: 'staff' as const },
      ];
      
      const users = userType === 'patient' ? mockPatients : mockStaff;
      const foundUser = users.find(u => u.cpf === cpf);
      
      if (foundUser && password === '123456') { // Simple password check for demo
        setUser(foundUser);
        localStorage.setItem('vidaplus_user', JSON.stringify(foundUser));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('vidaplus_user');
  };

  const register = async (userData: Omit<User, 'id'> & { name: string, password: string, birthDate: string }): Promise<boolean> => {
    setIsLoading(true);
    try {
 
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser = {
        id: Math.random().toString(36).substring(2, 9),
        name: userData.name || 'Usuário',
        cpf: userData.cpf,
        email: userData.email,
        userType: userData.userType,
      };
      
      setUser(newUser);
      localStorage.setItem('vidaplus_user', JSON.stringify(newUser));
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
