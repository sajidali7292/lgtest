import React from 'react';
import styles from 'scss/components/LearnHome.module.scss';
import VideoBlock from './UI/VideoBlock';
import LinkBlock from './UI/LinkBlock';


interface Link {
  url?: string;
  title?: string;
}

interface Block {
  type?: 'video' | 'link';
  index?: number;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
  title?: string;
  readTime?: string;
  modalContent?: JSX.Element;
  link?: string;
  className?: string;
}

interface Props {
  title: string;
  text: string;
  links: Link[];
  blocks: Block[];
}

function LearnHome({ title, text, links, blocks }: Props): JSX.Element {
  return (
    <section className="LaHome_learnS">
      <div className={styles.container}>
        <div className={`${styles.row} flex flex-row`}>
          <div className="basis-full">
            <h2 className={`${styles.title}`}>{title}</h2>
            <div className={`${styles.text}`}>{text}</div>
            <div className={`${styles.links}`}>
              <ul style={{ display: 'flex' }}>
                {links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={`${styles.row} ${styles.carrusel} flex flex-row`}>
          {blocks.map((block) => (
            block.type === 'video' ? (
              <VideoBlock
                index={block.index}
                className={block.className}
                Video_Thumbnail={block.thumbnail}
                Video_Title={block.title}
                Video_ReadTime={block.readTime}
                modalContent={block.modalContent}
              />
            ) : (
              <LinkBlock
                index={block.index}
                className={block.className}
                Link_Thumbnail={block.thumbnail}
                Link_Title={block.title}
                Link_URL={block.link}
                Link_ReadTime={block.readTime}
              />
            )
          ))}
        </div>
     </div>
    </section>
  );
}

export default LearnHome;