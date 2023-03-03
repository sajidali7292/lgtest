import React from "react";
import styles from 'scss/components/CTA2.module.scss';
import Button from './UI/Button/index';


interface Props {
  title?: string;
  text?: string;
  div?: string;
  button?: any;
  id?: string;
  backgroundImage?: string;
}

function CTA2({ title, text, div, button, id, backgroundImage }: Props): JSX.Element {
  const wrapStyle = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};
  return (
    <section className={styles.container} id={id}>
      <div className={`${styles.wrap} max-w-4xl mx-auto`} style={wrapStyle}>
        <h2 className={`${styles.title} text-center`}>
          {title}
        </h2>
        <p key="cta-text" className={`${styles.text} text-center`}>
          {text}
        </p>
        <div className={`${styles.ctaText} text-center`}>
            {div}
        </div>
        {button && (
          <Button buttonObj={button} />
        )}
      </div>
    </section>
  );
};

export default CTA2;
