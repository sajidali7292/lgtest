import React from "react";
import styles from 'scss/components/HeroHome.module.scss';

interface Award {
    image?: string;
    text?: string;
}

interface Props {
  awardsTitle?: React.ReactNode;
  awards?: Array<Award>;
}

function AwardsSection({
    awardsTitle="Awards & Recognition",
    awards=[
      {
        text: 'Fastest Growing Agencies 2022',
        image: '/wp-content/uploads/2023/02/newlogo.svg'
      },
      {
        text: 'Fastest Growing US Companies',
        image: '/wp-content/uploads/2023/02/Inc-5000-logo.webp'
      },
      {
        text: 'Best Start-Up Agency',
        image: '/wp-content/uploads/2023/02/Us-search-awards-color-logo.webp'
      },
      {
        text: '#1 Product of the Day',
        image: '/wp-content/uploads/2023/02/Product-hunt-colored-logo.webp'
      },
      {
        text: 'Top B2B SEO Companies',
        image: '/wp-content/uploads/2023/02/clutch-color-log.webp'
      },
      {
        text: 'Best B2B Campaign',
        image: '/wp-content/uploads/2023/02/The-drum-awards-color-logo.webp'
      },
    ],
}: Props): JSX.Element {

  return (
    <div className={`${styles.row} flex flex-row`}>
      <div className={`${styles.awardsTitle} basis-[23%]`}>
        {awardsTitle}
      </div>
      <div className={`${styles.award_row} basis-[77%] flex flex-row`}>
        {awards?.map((item, index) => (
          <div className={`basis-1/6`} key={index}>
            <div className={styles.awardsContainer}>
              <img className={styles.awardImg} src={process.env.NEXT_PUBLIC_WORDPRESS_URL + item.image} alt="Logos" />
              <div className={styles.awardText}>{item.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;