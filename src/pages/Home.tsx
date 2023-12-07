import { useContext } from 'react';
import { UserContext } from '../context/user-context';
import { Link, Navigate } from 'react-router-dom';
import Header from '../components/Header';

export default function HomePage() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className="page">
      <Header title={`Hi ${user.name}!`} />
      <div className="container">
        <div className="card neon-purple">
          <h2>Custom Playlist</h2>
          <p className="teal">
            Create a new playlist from a variety of options.
          </p>
          <Link to="/customplaylist" className="button">
            Let's Go!
          </Link>
        </div>
      </div>
    </div>
  );
}
