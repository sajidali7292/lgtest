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
      <div className={`wrap_content wrap_content-extended`}>
          <Slider {...settings}>
            
          </Slider>
      </div>
    </section>
  );
}

export default ReviewsSlider;