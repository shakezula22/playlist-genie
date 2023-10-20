export const BASE_URL = 'http://localhost:5174';
export const SPOTIFY_CLIENT_ID = '08547b47e3a9425992a780af5276909b';

export type User = {
  id: string;
  name: string;
  country: string;
};

export type AuthContext = {
  user: User | null;
  token: string | null;
  persistUser: (user: User) => void;
  persistToken: (token: string) => void;
  logOut: () => void;
};
