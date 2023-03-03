import React, { useState } from 'react';
import styles from 'scss/components/VideoHome.module.scss';
import Modal from './UI/Modal';

interface VideoBlock {
  Video_Thumbnail: {
    url: string;
    width: number;
    height: number;
  };
  Video_Title: string;
  Video_ReadTime: string;
  modalContent?: JSX.Element;
}

interface Props {
  title: string;
  text: string;
  videoBlocks: VideoBlock[];
}

function VideoHome({ title, text, videoBlocks }: Props): JSX.Element {
    const [showModal, setShowModal] = useState(false);

    const handleModalButtonClick = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }
  return (
    <section className="LaHome_softVid">
      <div className={styles.container}>
        <div className={`${styles.row} flex flex-row`}>
          <div className="basis-full">
            <h2 className={`${styles.title}`}>{title}</h2>
            <div className={`${styles.text}`}>{text}</div>
          </div>
        </div>
        <div className={`${styles.row} flex flex-row`}>
          {videoBlocks.map((block, index) => (
            <div key={index} className="sm:basis-full md:basis-6/12 basis-3/12">
              <div className={styles.videoBlocks}>
                <div className={styles.modalOpen} onClick={handleModalButtonClick}>
                    <div className={`${styles.img} img-block-${index}`}>
                      <div className={`${styles.thumbnail_wrapper}`}>
                        <img
                          src={block.Video_Thumbnail.url}
                          width={block.Video_Thumbnail.width}
                          height={block.Video_Thumbnail.height}
                        />
                      </div>
                    </div>
                    <div className={`${styles.Video_Title}`}>{block.Video_Title}</div>
                    <div className={`${styles.Video_ReadTime}`}>
                      {block.Video_ReadTime}
                      <span>
                        <img src="/wp-content/uploads/2022/08/shape.png" alt="" />
                      </span>
                    </div>
                </div>
              </div>
              <Modal
                isOpen={showModal}
                closeModal={closeModal}
                content={block.modalContent}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoHome;