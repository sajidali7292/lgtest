import React from 'react';
import styles from 'scss/components/Paths.module.scss';
import Button from './UI/Button/index';
import Image from 'next/image';
import { sectionVariantsTop, sectionVariantsBottom } from './constants';

interface Props {
  title?: string;
  paths?: Array<any>;
  pt?: string;
  pb?: string;
}

function Paths({ 
  title,
  paths,
  pt = 'md',
  pb = 'md', }: Props): JSX.Element {
  const ptVariant = sectionVariantsTop[pt];
  const pBVariant = sectionVariantsBottom[pb];
  return (
    <section className={styles.paths}>
      <div className={`container ${ptVariant} ${pBVariant}`}>
        <div className="row">
          <div className="basis-full">
            <h2 className={styles.paths_title}>{title}</h2>
          </div>
        </div>
        <div className={`flex flex-row flex-wrap ${styles.img_wrapper}`}>
          {paths.map((path, index) => (
            <div className={`basis-full md:basis-1/2 ${index%2 ? 'pt-2 md:pt-0 md:pl-3 lg:pl-0':'pb-2 md:pb-0 md:pr-3 lg:pr-0'}`} key={`path-${index}`}>
              <div
                className={`${styles.pathimg} bg_img`}
              >
                <Image
                  src={path.img.url}
                  alt={`${path.img.alt ? path.img.alt:'Path Image Bg'}`}
                  className={`object-cover`}
                  layout='fill'
                />
                <div className={`${styles.path_sub1} tag tag_${path.tag.color}`}>{path.tag.name}</div>
                <div className={styles.path_ttl}>{path.title}</div>
                <div className={styles.path_txt}>{path.txt}</div>
                <div className={styles.path_btn}>
                  {path.button && <Button buttonObj={path.button} />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Paths;