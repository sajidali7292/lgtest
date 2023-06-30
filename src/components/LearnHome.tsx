import React from 'react';
import styles from 'scss/components/LearnHome.module.scss';
import VideoBlock from './UI/VideoBlock';
import LinkBlock from './UI/LinkBlock';
import Button from './UI/Button/index';
import classnames from 'classnames';
import { backgroundColors, sectionVariantsTop, sectionVariantsBottom } from './constants';


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
    alt: string;
  };
  tag?: string;
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
  button?: any;
  pt?: string;
  pb?: string;
  bg?: string;
}

function LearnHome({ title, text, links, blocks, button, pt, pb, bg }: Props): JSX.Element {
  const ptVariant = sectionVariantsTop[pt];
  const pBVariant = sectionVariantsBottom[pb];
  const bgVariant = backgroundColors[bg];
  return (
    <section className={`${styles.learn_section} ${bgVariant}`}>
      <div className={`${styles.container} container ${ptVariant} ${pBVariant}`}>
        <div className={`${styles.row} flex flex-row flex-wrap`}>
          <div className="basis-full">
            <h2 className={`${styles.title}`}>{title}</h2>
            <div className={`${styles.text}`}>{text}</div>
            <div className={`${styles.links}`}>
              <ul className="flex flex-wrap justify-center gap-8 md:gap-28">
                {links.map((link, index) => (
                  <li key={`${index}-${link.title}-links`}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${styles.buttonWrap}`}><Button buttonObj={button} /></div>
          </div>
        </div>
        <div className={`${styles.row} ${styles.carrusel} flex flex-row flex-wrap`}>
          {blocks.map((block) => (
            block.type === 'video' ? (
              <VideoBlock
                key={`${block.index}-${block.title}-video`}
                index={block.index}
                className={classnames('basis-full', 'md:basis-6/12', 'lg:basis-3/12', styles.custom)}
                Video_Thumbnail={block.thumbnail}
                Video_Tag={block.tag}
                Video_Title={block.title}
                Video_ReadTime={block.readTime}
                modalContent={block.modalContent}
              />
            ) : (
              <LinkBlock
                key={`${block.index}-${block.title}-link`}
                index={block.index}
                className={classnames('basis-full', 'md:basis-6/12', 'lg:basis-3/12', styles.custom)}
                Link_Tag={block.tag}
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