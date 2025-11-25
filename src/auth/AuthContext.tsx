import { createContext, useContext, useEffect, useState } from 'react';
import type { User } from '../types/users';
import { getLoggedInUser, persistUser } from './utils';

const AuthContext = createContext<{
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}>({ user: null, setUser: (_user: User | null) => {}, logout: () => {} });

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => getLoggedInUser());

  useEffect(() => {
    if (user) {
      persistUser(user);
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
