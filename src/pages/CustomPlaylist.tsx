import { Link, Navigate } from 'react-router-dom';
import Form from '../components/Form';
import { IconHome, IconX } from '@tabler/icons-react';
import { UserContext } from '../context/user-context';
import { useContext } from 'react';

export default function CustomPlaylistPage() {
  const { logOut, user } = useContext(UserContext);
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">New Playlist</h1>
        <div>
          <Link to="/dashboard" className="header__btn">
            <IconHome color="pink" />
          </Link>
          <button onClick={logOut} className="header__btn">
            <IconX color="pink" />
          </button>
        </div>
      </header>
      <div className="container">
        <Form />
      </div>
    </div>
  );
}
