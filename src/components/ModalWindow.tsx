import { IconX } from '@tabler/icons-react';
import { ModalActionProps } from '../types';

export default function ModalWindow({ modal, closeModal }: ModalActionProps) {
  return (
    <>
      <div
        className={`modal ${modal ? 'modal-active' : ''} neon-pink`}
        id="modal"
      >
        <header className="modal__header">
          <h1 className="modal__title">Success</h1>
          <button className="modal__btn" onClick={closeModal}>
            <IconX />
          </button>
        </header>
        <div className="modal__body">
          <p className="modal__text">
            Congratulations! You just made a new playlist.
          </p>
        </div>
      </div>
      <div
        className={`overlay ${modal ? 'overlay-active' : ''}`}
        id="overlay"
      ></div>
    </>
  );
}
