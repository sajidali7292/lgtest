import React from "react";
import styles from 'scss/components/Modal.module.scss';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  title?: string;
  content?: JSX.Element;
}

function Modal({ isOpen, closeModal, title, content }: Props): JSX.Element {

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={handleOverlayClick}>
          <div className={styles.modal}>
            <button className={styles.closeButton} onClick={closeModal}>
              X
            </button>
            <div className={styles.content}>
              <h3>{title}</h3>
              {content}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
