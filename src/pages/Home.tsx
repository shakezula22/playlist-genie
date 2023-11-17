import { useContext } from 'react';
import { UserContext } from '../context/user-context';
import { Link, Navigate } from 'react-router-dom';

export default function HomePage() {
  const { user, logOut } = useContext(UserContext);
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Hi {user?.name}!</h1>
        <button className="header__btn" onClick={logOut}>
          Logout
        </button>
      </header>
      <div className="container">
        <div className="card neon-purple">
          <h2>Custom Playlist</h2>
          <p>Create a new playlist from a variety of options.</p>
          <Link to="/customplaylist" className="button">
            Let's Go!
          </Link>
        </div>
      </div>
    </div>
  );
}
