import { Navigate } from 'react-router-dom';
import Form from '../components/Form';
import { UserContext } from '../context/user-context';
import { useContext } from 'react';
import Header from '../components/Header';

export default function CustomPlaylistPage() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="page">
      <Header title="New Playlist" />
      <div className="container">
        <Form />
      </div>
    </div>
  );
}
