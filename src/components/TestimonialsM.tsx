import React from 'react';
import styles from 'scss/components/TestimonialsM.module.scss';

interface Props {
    title: string;
    testimonialsA?: array;
    pt?: string;
    pb?: string;
}


function TestimonialsM({
    title,
    testimonialsA,
    pt = 't1',
    pb = 'b1',
  }: Props): JSX.Element {
    const paddingVariant = {
      t1: 'pt-2', t2: 'pt-4', t3: 'pt-6', t4: 'pt-8', t5: 'pt-10', t6: 'pt-12', t7: 'pt-14', t8: 'pt-16',
      b1: 'pb-2', b2: 'pb-4', b3: 'pb-6', b4: 'pb-8', b5: 'pb-10', b6: 'pb-12', b7: 'pb-14', b8: 'pb-16',
    }
    return (
      <section className={`${styles.wrapper} ${paddingVariant[pt]} ${paddingVariant[pb]} wrap_content wrap_content-extended`}>
        <div className={styles.wrap}>
          <div className={`${styles.wrap_testimonials} wrap_content wrap_content-small px-0 flex flex-row flex-wrap justify-center`} >
            {testimonialsA?.map((testimonial, index) => (
              <div className="flex flex-row flex-wrap">
                <div className={styles.message}>
                  <img className="quote w-16 mx-auto object-contain"
                  src={`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/unnamed-file.png`} alt="quote"/>
                  <p className="text-center">{testimonial.message}</p>
                </div>
                <div className={`${styles.testiBottom} flex flex-row flex-wrap justify-center`}>
                  <div className={styles.fimage}>
                    <img src={`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/Mask-Group11.png`} alt="" />
                  </div>
                  <div className={styles.details}>
                    <h5>- {testimonial.name}</h5>
                    <h6>{testimonial.title}</h6>
                    <div className={styles.stars}>
                      <img className={styles.stars} src={`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/5stars.png`} alt="stars"/>
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
  