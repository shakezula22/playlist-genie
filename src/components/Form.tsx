import { useState } from 'react';
import Genres from './Genres';
import Options from './Options';
import Submit from './Submit';
import Tempo from './Tempo';
import { SpotifyObject } from '../types';

const defaultFormState: SpotifyObject = {
  genres: new Array<string>(),
  tempo: '',
  tempoEnabled: false,
  acoustic: '5',
  dance: '5',
  energy: '5',
  instrumental: '5',
  live: '5',
  valence: '5',
};

export default function Form() {
  const [tunables, setTunables] = useState(defaultFormState);
  const [index, setIndex] = useState(0);

  const pages = [
    {
      page: <Genres {...tunables} setTunables={setTunables} />,
      title: 'Choose Your Genre(s)',
    },
    {
      page: <Options {...tunables} setTunables={setTunables} />,
      title: 'Choose Your Vibe',
    },
    {
      page: <Tempo {...tunables} setTunables={setTunables} />,
      title: 'Set the Tempo',
    },
    { page: <Submit {...tunables} />, title: 'Create Your Playlist' },
  ];

  const nextClickHandler = () => {
    setIndex(cur => cur + 1);
  };

  const prevClickHandler = () => {
    setIndex(cur => cur - 1);
  };

  return (
    <form className="card neon-purple">
      <div className="progressbar"></div>
      <div className="form">
        <div className="form__header">
          <h1>{pages[index].title}</h1>
        </div>
        <div className="form__body">{pages[index].page}</div>
        <div className="form__footer">
          <button
            type="button"
            onClick={prevClickHandler}
            disabled={index === 0}
            className="button"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={nextClickHandler}
            disabled={index === 3}
            className="button"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
}
