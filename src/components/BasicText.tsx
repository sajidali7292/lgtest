import React from 'react';
import styles from 'scss/components/BasicText.module.scss';
import Link from 'next/link';
import Heading, { HeadingProps } from './Heading';

interface Props {
    title: string;
    descriptions?: Array[];
    headingLevel?: HeadingProps['level'];
    pt?: string;
    pb?: string;
}


function BasicText({
    title,
    descriptions,
    headingLevel = 'h2',
    pt,
    pb,
  }: Props): JSX.Element {
    const paddingVariant = {
      t1: 'pt-2', t2: 'pt-4', t3: 'pt-6', t4: 'pt-8', t5: 'pt-10', t6: 'pt-12', t7: 'pt-14', t8: 'pt-16',
      b1: 'pb-2', b2: 'pb-4', b3: 'pb-6', b4: 'pb-8', b5: 'pb-10', b6: 'pb-12', b7: 'pb-14', b8: 'pb-16',
    }
    return (
      <section className={`${styles.cta} ${paddingVariant[pt]} ${paddingVariant[pb]} wrap_content wrap_content-extended`}>
        <div className={styles.wrap}>
          {title && (
            <Heading level={headingLevel} className={styles.title}>
              {title}
            </Heading>
          )}
          <div className={styles.description}>
            {descriptions?.map((description, index) => (
              <p
                key={`${index}$-description`} 
                dangerouslySetInnerHTML={{__html: description}}></p>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default BasicText;
  