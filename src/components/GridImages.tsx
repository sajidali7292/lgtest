import React from 'react';
import styles from 'scss/components/GridImages.module.scss';
import Link from 'next/link';
import Heading, { HeadingProps } from './Heading';
import Image from 'next/image';

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
    pt = 't1',
    pb = 'b1',
  }: Props): JSX.Element {
    const paddingVariant = {
      t1: 'pt-2', t2: 'pt-4', t3: 'pt-6', t4: 'pt-8', t5: 'pt-10', t6: 'pt-12', t7: 'pt-14', t8: 'pt-16',
      b1: 'pb-2', b2: 'pb-4', b3: 'pb-6', b4: 'pb-8', b5: 'pb-10', b6: 'pb-12', b7: 'pb-14', b8: 'pb-16',
    }
    return (
      <section className={`${styles.cta} ${paddingVariant[pt]} ${paddingVariant[pb]}`}>
        <div className={`${styles.wrap}`}>
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
  