import React from 'react';
import styles from 'scss/components/ReviewsSlider.module.scss';
import Slider from 'react-slick';
import Image from 'next/image';
import { sectionVariantsTop, sectionVariantsBottom } from './constants';


interface Props {
  reviews?: Array<any>;
  pt?: string;
  pb?: string;
}

function ReviewsSlider({
  reviews,
  pt = 'md',
  pb = 'md'
  }: Props): JSX.Element {
    
  const ptVariant = sectionVariantsTop[pt];
  const pBVariant = sectionVariantsBottom[pb];
  
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={`${styles.reviews} active-highlighted`}>
      <div className={`container ${ptVariant} ${pBVariant}`}>
          <Slider {...settings}>
            {reviews?.map((review, index) => (
              <div key={`review-${index}`} className={`basis-full lg:basis-4/12 ${styles.card}`}>
                <div className={`${styles.cardContainer}`}>
                  <div className={`flex flex-row flex-wrap`}>
                    <div className={`basis-full lg:basis-2/12 ${styles.photo}`}>
                      <div className={`${styles.photoWrapper}`}>
                        <Image
                          src={review.photo.url}
                          alt={`${review.photo.alt ? review.photo.alt:'Review Image'}`}
                          className={`object-cover`}
                          layout='fill'
                        />
                      </div>
                    </div>
                    <div className={`basis-full lg:basis-10/12 ${styles.info}`}>
                      <div className={`${styles.topWrap} flex justify-between`}>
                        <div className={`${styles.name}`} dangerouslySetInnerHTML={{ __html: review.name?.toString() }}></div>
                        <div className={`${styles.stars}`}>
                          <img src={review.stars.url} alt={review.stars.alt} />
                        </div>
                      </div>
                      <div className={`${styles.text}`} dangerouslySetInnerHTML={{ __html: review.text?.toString() }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
      </div>
    </section>
  );
}

export default ReviewsSlider;