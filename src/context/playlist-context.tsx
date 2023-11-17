import { createContext, useState } from 'react';
import { PlayContext, PlaylistBody, trackObject } from '../types';

type PlayProviderProps = {
  children: React.ReactNode;
};
export const PlaylistContext = createContext({} as PlayContext);
let newPlaylist = {
  name: '',
  public: true,
  description: '',
};

export default function PlaylistProvider({ children }: PlayProviderProps) {
  const [tracks, setTracks] = useState<trackObject[] | null>(null);
  const [playlist, setPlaylist] = useState<PlaylistBody>(newPlaylist);

  const removeSong = (id: string) => {
    if (!tracks) return;

    const filteredList = tracks.filter(item => item.id !== id);

    setTracks(filteredList);
  };

  return (
    <PlaylistContext.Provider
      value={{
        tracks,
        setTracks,
        removeSong,
        playlist,
        setPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}
