import React from 'react';
import styles from 'scss/components/TextLeftImageRight.module.scss';
import Button from './UI/Button/index';


interface Button {
  type: string;
  url: string;
  label: string;
  rounded?: boolean;
  size?: string;
  icon?: boolean;
}

interface Props {
  id?: string;
  tag?: string;
  title?: string;
  text?: string;
  img?: {
    url?: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  column1?: string;
  column2?: string;
  column3?: string;
  buttons?: Button[];
}

function TextLeftImageRight({
  id,
  tag,
  title,
  text,
  img,
  column1 = 'order-first',
  column2 = 'order-2',
  column3 = 'order-last',
  buttons,
}: Props): JSX.Element {
  return (
    <section id={id} className={styles.integrate}>
      <div className="container">
        <div className="flex flex-row column-1">
          <div className={`${column1} sm:basis-full md:basis-6/12 basis-6/12`}>
            <div className={styles.tag}>{tag}</div>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.text}>{text}</div>
            <div className="flex flex-row">
              {buttons &&
                buttons.map((button, index) => (
                  <Button buttonObj={button} key={index} />
                ))}
            </div>
          </div>
          <div className={`${column2} basis-1/12 hideMob column-2`}></div>
          <div className={`${column3} sm:basis-full md:basis-6/12 basis-5/12`}>
            <div className={styles.int_img}>
              <img src={img.url} alt={img.alt} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextLeftImageRight;