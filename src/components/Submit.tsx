import { useContext, useEffect } from 'react';
import { SpotifyObject } from '../types';
import { UserContext } from '../context/user-context';
import { PlaylistContext } from '../context/playlist-context';

export default function Submit(props: SpotifyObject) {
  const { user, token } = useContext(UserContext);
  const { tracks, setTracks } = useContext(PlaylistContext);

  const tunableValues = [
    props.dance,
    props.energy,
    props.instrumental,
    props.live,
    props.valence,
    props.acoustic,
  ];

  const tunableDecimalValues = tunableValues.map((item: string) => {
    const num = +item;
    return (num / 10).toString();
  });

  const args = new URLSearchParams({
    ...(user?.country && { market: user.country }),
    seed_genres: props.genres
      .reduce((acc, cur) => {
        acc += cur + ',';
        return acc;
      }, '')
      .slice(0, -1),
    target_danceability: tunableDecimalValues[0],
    target_energy: tunableDecimalValues[1],
    target_instrumentalness: tunableDecimalValues[2],
    target_liveness: tunableDecimalValues[3],
    target_valence: tunableDecimalValues[4],
    target_acousticness: tunableDecimalValues[5],
    ...(props.tempo !== '' && { target_tempo: props.tempo }),
  });

  useEffect(() => {
    fetch('https://api.spotify.com/v1/recommendations?' + args, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(res => res.json())
      .then(data => setTracks(data.tracks));
  }, []);

  return (
    <div className="card">
      {tracks &&
        tracks.map(item => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.artists[0].name}</p>
          </div>
        ))}
      <button className="button">Create New Playlist</button>
    </div>
  );
}