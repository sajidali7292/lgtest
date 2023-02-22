import React, { useState } from "react";
import styles from 'scss/components/DataDriven.module.scss';
import Modal from '../components/Modal';

interface Props {
  title?: string;
  descriptions?: Array<any>;
  imageUrl?: string;
  bgImage?: string;
}

function DataDriven({
  title,
  descriptions,
  imageUrl,
  bgImage,
}: Props): JSX.Element {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section
      className={styles.container}
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : "none" }}
    >
      <div className={styles.wrap}>
        <div className={`${styles.row} flex flex-row`}>
          <div className={`basis-4/6`}>
            <h2>{title}</h2>
            <div className={styles.description}>
              {descriptions?.map((description, index) => (
                <div
                  key={`${index}$-description`}
                  dangerouslySetInnerHTML={{ __html: description }}
                ></div>
              ))}
            </div>
          </div>
          <div className={`basis-2/6`}>
            <img src={imageUrl} alt="image" onClick={openModal} />
          </div>
        </div>
      </div>
      {showModal && <Modal isOpen={showModal} closeModal={closeModal} />}
    </section>
  );
}

export default DataDriven;
