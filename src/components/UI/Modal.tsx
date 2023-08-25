import React from "react";
import styles from 'scss/components/Modal.module.scss';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  title?: string;
  content?: any;
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
              <i className={`dashicons dashicons-no-alt text-4xl`}></i>
            </button>
            <div className={styles.content}>
              {title && <h3>{title}</h3>}
              {content.includes('iframe') ? (
                content
                ) : (
                <iframe width="720" height="405" src={`${content}`}
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
