import React, { useState } from 'react';
import styles from 'scss/components/ThumbnailButtons.module.scss';
import Modal from './Modal';
import classnames from 'classnames';


interface VideoBlockProps {
  index: number;
  Video_Thumbnail: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  Video_Tag?: string;
  Video_Title?: string;
  Video_ReadTime?: string;
  modalContent?: JSX.Element;
  className?: string;
}

function VideoBlock ({ index, Video_Thumbnail, Video_Title, Video_ReadTime, modalContent, className, Video_Tag }: VideoBlockProps): JSX.Element {
    const [showModal, setShowModal] = useState(false);

    const handleModalButtonClick = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div className={`${className} flex flex-col`}>
            <div className={`${styles.videoBlocks} videoBlocks flex flex-col h-full`}>
                <div className={`${styles.modalOpen} flex flex-col justify-between h-full`} onClick={handleModalButtonClick}>
                    <div className={`${styles.contentTop}`}>
                        <div className={`${styles.img} img img-block-${index}`}>
                            <div className={classnames(styles.thumbnail_wrapper, 'thumbnail_wrapper')} style={{ backgroundImage: `url(${Video_Thumbnail.url})` }}>
                                {Video_Tag && <div className={`Video_Tag ${styles.Video_Tag}`}>{Video_Tag}</div>}
                            </div>
                        </div>
                        <div className={`${styles.Video_Title} Video_Title`}>{Video_Title}</div>
                    </div>
                    <div className={`${styles.Video_ReadTime} Video_ReadTime`}>
                        {Video_ReadTime}
                        <span>
                            <img src={`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/shape.webp`} alt="shape" />
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
