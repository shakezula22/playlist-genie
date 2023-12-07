import ModalWindow from '../components/ModalWindow';
import { PlaylistForm } from '../components/generate playlist/PlaylistForm';
import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/user-context';
import Header from '../components/Header';

export default function CreatePlaylistPage() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };
  const openModal = () => setModal(true);

  return (
    <div>
      <Header title="Create Your Playlist" />
      <div>
        <ModalWindow modal={modal} closeModal={closeModal} />
        <PlaylistForm openModal={openModal} />
      </div>
    </div>
  );
}
