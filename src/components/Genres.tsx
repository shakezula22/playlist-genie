import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/user-context';
import { MultiSelect } from '@mantine/core';

export default function Genres() {
  const { token } = useContext(UserContext);
  const [genreList, setGenreList] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(res => res.json())
      .then(data => setGenreList(data.genres));
  }, []);
  return (
    <MultiSelect
      label="Choose up to 5"
      data={genreList}
      searchable
      maxValues={5}
    />
  );
}
