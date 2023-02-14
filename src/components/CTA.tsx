import React from 'react';
import styles from 'scss/components/CTA.module.scss';
import Heading, { HeadingProps } from './Heading';
import Button from './UI/Button/index';
import { backgroundColors, sectionVariantsTop, sectionVariantsBottom } from './constants';
// import Link from 'next/link';

interface Props {
  title: string;
  description?: string;
  button?: any;
  colorBg?: string;
  imageBg?: any;
  children?: React.ReactNode;
  headingLevel?: HeadingProps['level'];
  pt?: string;
  pb?: string;
}

function CTA({
  title = 'Get in touch',
  description,
  button,
  colorBg,
  imageBg,
  children,
  headingLevel = 'h2',
  pt = 'md',
  pb = 'md',
}: Props): JSX.Element {
  const inlineStyles={ 
    backgroundImage: `url(${imageBg.url})`,
    backgroundPosition: imageBg.position ? imageBg.position:'center',
    backgroundSize: imageBg.size ? imageBg.size:'cover',
    backgroundRepeat: imageBg.repeat ? imageBg.repeat:'no-repeat'
  };
  const bgColor = backgroundColors[colorBg];
  const ptVariant = sectionVariantsTop[pt];
  const pBVariant = sectionVariantsBottom[pb];
  return (
    <section style={ inlineStyles } className={`${bgColor ? bgColor:styles.cta} ${ptVariant} ${pBVariant}`}>
      <div className={`${styles.wrap} wrap_content wrap_content-extended`}>
        <div className={`${styles.row} flex flex-wrap flex-row`}>
          <div className={`${styles.colLeft} basis-full lg:basis-7/12`}>
            <Heading level={headingLevel} className={styles.title}>
              {title}
            </Heading>
            <div className={`${styles.intro} mt-6`}>
              {description && (
                <p dangerouslySetInnerHTML={{__html: description}} className={`${styles.description} mb-12`}></p>
              )}
              {button && (
                <Button buttonObj={button} />
              )}
            </div>
          </div>
          <div className={`${styles.colRight} basis-full lg:basis-5/12`}>

          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
