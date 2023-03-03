import React from 'react';
import styles from 'scss/components/ReviewsSlider.module.scss';
import Slider from 'react-slick';


interface Props {
  reviews?: Array<{
    photo?: {
        url: string;
        alt: string;
    };
    stars?: {
        url: string;
        alt: string;
    };
    name?: React.ReactNode;
    text?: React.ReactNode;
  }>;
}

function ReviewsSlider({
  reviews,
}: Props): JSX.Element {
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
              slidesToShow: 2,
              slidesToScroll: 1,
              variableWidth: true,
              centerMode: false,
            },
          },
        ],
      };
      

  return (
    <section className={`${styles.reviews}`}>
      <div className={`container`}>
          <Slider {...settings}>
            {reviews?.map((review, index) => (
              <div key={`review-${index}`} className={`basis-full basis-4/12 ${styles.card}`}>
                <div className={`${styles.cardContainer}`}>
                  <div className={`flex flex-row`}>
                    <div className={`basis-full basis-2/12 ${styles.photo}`}>
                      <div className={`${styles.photoWrapper}`}>
                        <img src={review.photo.url} alt={review.photo.alt} />
                      </div>
                    </div>
                    <div className={`basis-full basis-10/12 ${styles.info}`}>
                      <div className={`${styles.stars}`}>
                        <img src={review.stars.url} alt={review.stars.alt} />
                      </div>
                      <div className={`${styles.name}`} dangerouslySetInnerHTML={{ __html: review.name?.toString() }}></div>
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