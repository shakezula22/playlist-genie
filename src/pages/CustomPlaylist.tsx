import { Link } from 'react-router-dom';
import Form from '../components/Form';

export default function CustomPlaylistPage() {
  return (
    <div>
      <header className="header">
        <h1 className="header__title">New Playlist</h1>
        <Link to="/" className="header__btn">
          Home
        </Link>
      </header>
      <div className="container">
        <Form />
      </div>
    </div>
  );
}
