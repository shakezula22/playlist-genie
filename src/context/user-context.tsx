import React, { createContext, useState } from 'react';
import { AuthContext, SPOTIFY_CLIENT_ID, User } from '../types';

type AuthProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({} as AuthContext);
const localToken = localStorage.getItem('access_token');
const localUser = localStorage.getItem('user');
const localRefresh = localStorage.getItem('refresh_token');

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(
    localUser ? JSON.parse(localUser) : null
  );
  const [token, setToken] = useState(localToken);
  const [refresh, setRefresh] = useState(localRefresh);

  const logOut = () => {
    localStorage.clear();
  };

  const persistUser = (user: User) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const persistToken = (token: string) => {
    setToken(token);
    localStorage.setItem('access_token', token);
  };

  const persistRefresh = (token: string) => {
    setRefresh(token);
    localStorage.setItem('refresh_token', token);
  };

  const getRefreshedTokens = async () => {
    if (!refresh) return;

    const res = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refresh,
        client_id: SPOTIFY_CLIENT_ID,
      }),
    });

    if (res.status === 401) {
      console.log('Login Expired');
    }

    const data = await res.json();
    persistRefresh(data.refresh_token);
    persistToken(data.access_token);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        refresh,
        persistUser,
        persistToken,
        persistRefresh,
        getRefreshedTokens,
        logOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
