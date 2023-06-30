import React from 'react';
import styles from 'scss/components/TestimonialsM.module.scss';
import Image from 'next/image';
import { sectionVariantsTop, sectionVariantsBottom } from './constants';

interface Props {
    title?: string;
    testimonialsA?: Array<any>;
    pt?: string;
    pb?: string;
}


function TestimonialsM({
    title,
    testimonialsA,
    pt = 'md',
    pb = 'md',
  }: Props): JSX.Element {
    const ptVariant = sectionVariantsTop[pt];
    const pBVariant = sectionVariantsBottom[pb];
    return (
      <section className={`${styles.wrapper}`}>
        <div className={`container ${styles.wrap} ${ptVariant} ${pBVariant}`}>
          <div className={`${styles.wrap_testimonials} wrap_content wrap_content-small px-0 flex flex-row flex-wrap flex-wrap justify-center`} >
            {testimonialsA?.map((testimonial, index) => (
              <div className="flex flex-row flex-wrap flex-wrap" key={`${index}$-testimonial`} >
                <div className={`${styles.message} text-center`}>
                  <Image className="quote w-16 mx-auto object-contain"
                  src={`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/unnamed-file.png`} alt="quote"
                  width="64" height="50"/>
                  <p>{testimonial.message}</p>
                </div>
                <div className={`${styles.testiBottom} flex flex-row flex-wrap flex-wrap justify-center`}>
                  <div className={styles.fimage}>
                    <Image src={`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/Mask-Group11.png`} alt=""
                    width="45" height="45"/>
                  </div>
                  <div className={styles.details}>
                    <h5>- {testimonial.name}</h5>
                    <h6>{testimonial.title}</h6>
                    <div className={styles.stars}>
                      <Image width="80" height="14"
                      className={styles.stars} src={`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/5stars.png`} alt="stars"/>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default TestimonialsM;
  