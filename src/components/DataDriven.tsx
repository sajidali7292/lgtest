import React, { useState } from "react";
import styles from 'scss/components/DataDriven.module.scss';
import Modal from './UI/Modal';
import Image from 'next/image'
import { sectionVariantsTop, sectionVariantsBottom } from './constants';

interface Props {
  title?: string;
  descriptions?: Array<any>;
  imageUrl?: string;
  bgImage?: string;
  modalContent?: JSX.Element;
  pb?: string;
  bg?: string;
}

function DataDriven ({
    title,
    descriptions,
    imageUrl,
    bgImage,
    modalContent,
    pt = 'md',
    pb = 'md'
}: Props): JSX.Element {

    const ptVariant = sectionVariantsTop[pt];
    const pBVariant = sectionVariantsBottom[pb];

    const [showModal, setShowModal] = useState(false);

    const handleModalButtonClick = () => {
      setShowModal(true);
    }

    const closeModal = () => {
      setShowModal(false);
    }

    return (
      <section className={styles.container} style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}>
        <div className={`container ${styles.wrap} ${ptVariant} ${pBVariant}`}>
          <div className={`${styles.row} flex flex-row`}>
            <div className={`basis-4/6`}>
              <h2>{title}</h2>
              <div className={styles.description}>
                {descriptions?.map((description, index) => (
                  <div
                    key={`${index}$-description`} 
                    dangerouslySetInnerHTML={{__html: description}}></div>
                ))}
              </div>
            </div>
            <div className={`basis-2/6`}>
              <Image
                  src={imageUrl}
                  alt="image"
                  width={438}
                  height={525}
                  onClick={handleModalButtonClick}
                />
            </div>
          </div>
        </div>
        <Modal
          isOpen={showModal}
          closeModal={closeModal}
          content={modalContent}
        />
      </section>
    );
  };
  
  export default DataDriven;
