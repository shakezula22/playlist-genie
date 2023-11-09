import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/user-context';
import { MultiSelect } from '@mantine/core';
import { OptionsProps } from '../types';

export default function Genres({ setTunables, genres }: OptionsProps) {
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

  const onChangeHandler = (vals: string[]) => {
    setTunables(obj => ({
      ...obj,
      ['genres']: vals,
    }));
  };

  return (
    <MultiSelect
      className="teal"
      label="Choose up to 5"
      data={genreList}
      searchable
      maxValues={5}
      value={genres}
      onChange={onChangeHandler}
    />
  );
}
