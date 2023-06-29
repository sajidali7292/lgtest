import React from 'react';
import styles from 'scss/components/VideoHome.module.scss';
import VideoBlock from './UI/VideoBlock';
import classnames from 'classnames';
import { sectionVariantsTop, sectionVariantsBottom } from './constants';

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
  pt?: string;
  pb?: string;
}

interface Props {
  title: string;
  text: string;
  videoBlocks: VideoBlock[];
}

function VideoHome({ 
  title,
  text,
  videoBlocks,
  pt = 'md',
  pb = 'md', 
  }: Props): JSX.Element {
  const ptVariant = sectionVariantsTop[pt];
  const pBVariant = sectionVariantsBottom[pb];
  return (
    <section className={`videoSection`}>
      <div className={`${styles.container} container ${ptVariant} ${pBVariant}`}>
        <div className={`${styles.row} flex flex-row ${styles.infosWrap}`}>
          <div className="basis-full">
            <h2 className={`${styles.title}`}>{title}</h2>
            <div className={`${styles.text}`}>{text}</div>
          </div>
        </div>
        <div className={`${styles.row} flex flex-row ${styles.videosWrap}`}>
          {videoBlocks.map((block, index) => (
            <VideoBlock
              index={index}
              key={`${index}-${block.Video_Title}`}
              className={classnames('sm:basis-full', 'md:basis-6/12', 'basis-3/12', styles.custom)}
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
