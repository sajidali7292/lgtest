import React from 'react';
import styles from 'scss/components/Hero.module.scss';
import Image from 'next/image';
import Button from './UI/Button/index';

interface Props {
  title?: string;
  description?: string;
  id?: string;
  bgImage?: string;
  buttons?: any;
  children?: React.ReactNode;
}

function Hero({
  title = '',
  description,
  id,
  bgImage,
  buttons,
  children,
}: Props): JSX.Element {
  return (
    <section
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...(id && { id })}
      // style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}
      className={styles.hero}>
      <div className={`wrapper_content container`}>
        <div className={`wrap_content wrap_content-extended flex flex-row flex-wrap relative ${styles.wrap}`}>
          <div className={`hidden md:block `}>
            <Image 
              src={bgImage}
              className={`object-contain object-right lg:object-right-bottom`}
              layout='fill'
            />
          </div>
          <div className={`w-full md:w-1/2 relative ${styles.colWrap}`}>
            <div className={`${styles.titleTop}`}>{title}</div>
            <div className={`${styles.intro}`}>
              <div className={`${styles.descriptionTop}`}>{description}</div>
              {buttons && (
                <div className={`flex flex-row flex-wrap`}>
                  {buttons &&
                    buttons.map((button, index) => (
                      <Button buttonObj={button} key={index} />
                    ))
                  }
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;