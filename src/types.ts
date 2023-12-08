import React from 'react';

export const BASE_URL = 'https://playlist-genie-one.vercel.app';
export const SPOTIFY_CLIENT_ID = '08547b47e3a9425992a780af5276909b';

export type User = {
  id: string;
  name: string;
  country: string;
};

export type CallSpotify = (arg: any) => void;

export type PlaylistBody = {
  name: string;
  public: boolean;
  description: string;
};

export type AuthContext = {
  user: User | null;
  token: string | null;
  refresh: string | null;
  persistUser: (user: User) => void;
  persistToken: (token: string) => void;
  persistRefresh: (token: string) => void;
  getRefreshedTokens: () => Promise<void>;
  logOut: () => void;
};

export type PlayContext = {
  tracks: trackObject[] | null;
  setTracks: React.Dispatch<React.SetStateAction<trackObject[] | null>>;
  removeSong: (id: string) => void;
  playlist: PlaylistBody;
  setPlaylist: React.Dispatch<React.SetStateAction<PlaylistBody>>;
};

export type SpotifyObject = {
  genres: string[];
  tempo: string;
  tempoEnabled: boolean;
  acoustic: string;
  dance: string;
  energy: string;
  instrumental: string;
  live: string;
  valence: string;
};

export type OptionsProps = {
  setTunables: React.Dispatch<React.SetStateAction<SpotifyObject>>;
} & SpotifyObject;

export type ModalActionProps = {
  modal: boolean;
  closeModal: () => void;
};

export type PlaylistFormProps = {
  openModal: () => void;
};

export type trackObject = {
  album: {
    id: string;
    images: {
      url: string;
    }[];
    name: string;
    uri: string;
  };
  artists: {
    id: string;
    name: string;
  }[];
  href: string;
  id: string;
  name: string;
  uri: string;
};
