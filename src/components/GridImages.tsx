import React from 'react';
import styles from 'scss/components/GridImages.module.scss';
import Link from 'next/link';
import Heading, { HeadingProps } from './Heading';
import Image from 'next/image';
import { sectionVariantsTop, sectionVariantsBottom } from './constants';

interface Props {
    title: string;
    images?: Array<any>;
    headingLevel?: HeadingProps['level'];
    pt?: string;
    pb?: string;
}


function GridImages({
    title,
    images,
    headingLevel = 'h2',
    pt = 'md',
    pb = 'md',
  }: Props): JSX.Element {
    const ptVariant = sectionVariantsTop[pt];
    const pBVariant = sectionVariantsBottom[pb];
    return (
      <section className={`${styles.cta}`}>
        <div className={`${styles.wrap} container ${ptVariant} ${pBVariant}`}>
          {title && (
            <Heading level={headingLevel} className={styles.title}>
              {title}
            </Heading>
          )}
          <div className={`${styles.wrap_image} wrap_content wrap_content-extended flex flex-row flex-wrap justify-center`} >
            {images?.map((image, index) => (
              <div
              key={`${index}$-image`}  className="image_cont basis-1/2 md:basis-1/4 lg:basis-1/7 p-3">
                <Image src={image.url} alt={image.alt} className="h-24 object-contain" width="170" height="95"/>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default GridImages;
  