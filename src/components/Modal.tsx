import React from "react";
import styles from 'scss/components/Modal.module.scss';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

function Modal({ isOpen, closeModal }: Props): JSX.Element {
  return (
    <>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button className={styles.closeButton} onClick={closeModal}>
              X
            </button>
            <div className={styles.content}>
              {/* Add your modal content here */}
              <h3>Modal Content</h3>
              <p>This is an example of a simple modal.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
