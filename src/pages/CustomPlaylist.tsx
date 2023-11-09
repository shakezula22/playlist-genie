import { Link } from 'react-router-dom';
import Form from '../components/Form';
import { IconHome, IconLetterX } from '@tabler/icons-react';
import { UserContext } from '../context/user-context';
import { useContext } from 'react';
import PlaylistProvider from '../context/playlist-context';

export default function CustomPlaylistPage() {
  const { logOut } = useContext(UserContext);
  return (
    <PlaylistProvider>
      <div className="page">
        <header className="header">
          <h1 className="header__title">New Playlist</h1>
          <div>
            <Link to="/" className="header__btn">
              <IconHome color="pink" />
            </Link>
            <button onClick={logOut} className="header__btn">
              <IconLetterX color="pink" />
            </button>
          </div>
        </header>
        <div className="container">
          <Form />
        </div>
      </div>
    </PlaylistProvider>
  );
}
