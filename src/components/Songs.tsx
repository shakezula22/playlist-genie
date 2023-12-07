import { trackObject } from '../types';
import { IconX } from '@tabler/icons-react';
import { useContext } from 'react';
import { PlaylistContext } from '../context/playlist-context';

export default function SongItem(props: trackObject) {
  const { removeSong } = useContext(PlaylistContext);

  const handleClick = () => {
    removeSong(props.id);
  };
  return (
    <li className="tracks__item">
      <div className="tracks__title">{props.name}</div>
      <div className="tracks__btn-container">
        <button className="tracks__btn" onClick={handleClick}>
          <IconX color="pink" />
        </button>
      </div>
    </li>
  );
}
