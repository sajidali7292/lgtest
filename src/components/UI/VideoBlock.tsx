import React, { useState } from 'react';
import styles from 'scss/components/ThumbnailButtons.module.scss';
import Modal from './Modal';

interface VideoBlockProps {
  index: number;
  Video_Thumbnail: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  Video_Title?: string;
  Video_ReadTime?: string;
  modalContent?: JSX.Element;
  className?: string;
}

function VideoBlock ({ index, Video_Thumbnail, Video_Title, Video_ReadTime, modalContent, className }: VideoBlockProps): JSX.Element {
    const [showModal, setShowModal] = useState(false);

    const handleModalButtonClick = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div className={className}>
            <div className={styles.videoBlocks}>
                <div className={styles.modalOpen} onClick={handleModalButtonClick}>
                    <div className={`${styles.img} img-block-${index}`}>
                        <div className={`${styles.thumbnail_wrapper}`}>
                            <img
                                src={Video_Thumbnail.url}
                                width={Video_Thumbnail.width}
                                height={Video_Thumbnail.height}
                                alt={Video_Thumbnail.alt? Video_Thumbnail.alt: `Image ${Video_Title}`}
                            />
                        </div>
                    </div>
                    <div className={`${styles.Video_Title}`}>{Video_Title}</div>
                    <div className={`${styles.Video_ReadTime}`}>
                        {Video_ReadTime}
                        <span>
                            <img src="/wp-content/uploads/2022/08/shape.png" alt="shape" />
                        </span>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={showModal}
                closeModal={closeModal}
                content={modalContent}
            />
        </div>
    );
};

export default VideoBlock;
