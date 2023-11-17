import { TextInput, Textarea, Checkbox } from '@mantine/core';
import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/user-context';
import { PlaylistBody } from '../../types';
import { PlaylistContext } from '../../context/playlist-context';

export function PlaylistForm() {
  const { user, token } = useContext(UserContext);
  const { setPlaylist, tracks, playlist } = useContext(PlaylistContext);

  const trackUris = tracks?.flatMap(item => item.uri);

  const fillPlaylist = async (id: string) => {
    await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trackUris),
    });
  };

  const createNewPlaylist = async (body: PlaylistBody) => {
    const res = await fetch(
      `https://api.spotify.com/v1/users/${user?.id}/playlists`,
      {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    const data = await res.json();
    fillPlaylist(data.id);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createNewPlaylist(playlist);
  };

  return (
    <form onSubmit={handleSubmit} className="card form">
      <div className="form teal">
        <TextInput
          value={playlist.name}
          label="Playlist Name"
          placeholder="My New Playlist"
          onChange={e =>
            setPlaylist(data => ({ ...data, name: e.target.value }))
          }
        />
        <Checkbox
          checked={playlist.public}
          label="Make Public?"
          color="grape"
          onChange={e =>
            setPlaylist(data => ({ ...data, public: e.target.checked }))
          }
        />
        <Textarea
          value={playlist.description}
          label="Describe Your Playlist"
          placeholder="These songs are so cool."
          onChange={e =>
            setPlaylist(data => ({ ...data, description: e.target.value }))
          }
        />
      </div>
      <button type="submit" className="button">
        Create
      </button>
    </form>
  );
}
