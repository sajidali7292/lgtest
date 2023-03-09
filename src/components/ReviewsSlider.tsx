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
  reviews= [
    {
      photo: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/Mask-Group1.webp`, alt: "Client Photo" },
      stars: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/review-stars.webp`, alt: "Five Stars" },
      name: "Ted Hunting,</br>Senior VP of Marketing",
      text: "“Their creative, strategic approach, and the intelligence of their team members is beyond what other companies in the space can provide. Trust and rely on their expertise, because they know what they’re doing.”",
    },
    {
      photo: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/client-3-e1648673375178.png`, alt: "Client Photo" },
      stars: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/review-stars.webp`, alt: "Five Stars" },
      name: "Owner,</br>Digital Agency,</br><span>Clutch Review 2022</span>",
      text: "“Within the first few months of the campaign being live, we were the number one result for Orlando SEO companies. Since then, they’ve delivered those kinds of results for a number of our client companies as well.”",
    },
    {
      photo: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/client-7-e1648673402753.webp`, alt: "Client Photo" },
      stars: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/review-stars.webp`, alt: "Five Stars" },
      name: "Senior Marketing Manager,</br>Financial Services Industry,</br><span>Clutch Review 2022</span>",
      text: "“From our initial consultation and throughout each month, LinkGraph has delivered results for us. The workflow has been seamless. We're seeing more results and moving forward with more deliverables than we could with just our team alone.”",
    },
    {
      photo: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/client-2-e1648673417952.png`, alt: "Client Photo" },
      stars: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/review-stars.webp`, alt: "Five Stars" },
      name: "Chief Information Officer,</br>Ecommerce retailer,</br><span>Clutch Review 2022</span>",
      text: "“LinkGraph provided education, guidance, expert level assistance, and state of the art tools to allow us to identify and repair several issues with our site. We have become a force to be reckoned with in our market thanks to their team.”",
    },
  ],
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