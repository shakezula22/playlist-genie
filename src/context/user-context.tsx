import React, { createContext, useState, useEffect } from 'react';
import { AuthContext, User } from '../types';

type AuthProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({} as AuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    const localToken = localStorage.getItem('access_token');
    const localUser = localStorage.getItem('user');

    if (localToken) {
      setToken(localToken);
    } else {
      setToken('');
    }

    if (localUser) {
      setUser(JSON.parse(localUser));
    } else {
      setUser(null);
    }
  }, []);

  console.log(user);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
