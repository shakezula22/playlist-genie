import { useContext } from 'react';
import { UserContext } from '../context/user-context';

export default function HomePage() {
  const { user } = useContext(UserContext);
  return (
    <div className="page">
      <header>
        <h1>Hi {user?.name}!</h1>
      </header>
      <div className="container">
        <div className="card neon-purple">
          <h2>Custom Playlist</h2>
          <p>Create a new playlist from a variety of options.</p>
          <button>Let's Go!</button>
        </div>
      </div>
    </div>
  );
}
