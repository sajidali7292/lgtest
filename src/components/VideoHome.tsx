import React from 'react';
import styles from 'scss/components/VideoHome.module.scss';
import VideoBlock from './UI/VideoBlock';

interface VideoBlock {
  Video_Thumbnail: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  Video_Title: string;
  Video_ReadTime: string;
  modalContent?: JSX.Element;
  className?: string;
}

interface Props {
  title: string;
  text: string;
  videoBlocks: VideoBlock[];
}

function VideoHome({ title, text, videoBlocks }: Props): JSX.Element {
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
            <VideoBlock
              index={index}
              key={index}
              className={block.className}
              Video_Thumbnail={block.Video_Thumbnail}
              Video_Title={block.Video_Title}
              Video_ReadTime={block.Video_ReadTime}
              modalContent={block.modalContent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoHome;
