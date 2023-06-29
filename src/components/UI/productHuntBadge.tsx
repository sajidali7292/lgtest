import React from 'react';
import styles from 'scss/components/ProductHuntBadge.module.scss';
import classnames from 'classnames'

interface ProductHuntBadgeProps {
  className?: string;
}

function ProductHuntBadge({ className }: ProductHuntBadgeProps): JSX.Element {
  return (
    <div className={classnames(styles.phBadge_banner, className)}>
      <div className={styles.phBadge_txt}>
        <img src={`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/1st.svg`} alt="award-badge" className={styles.ph_badge} />
        <div className={styles.phBanner_txt}>
          <span>Most Popular Product of the Day</span>
          <span>on ProductHunt</span>
        </div>
      </div>
      <div className={styles.pHuntbtn}>
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=348024&amp;theme=light"
          alt="SEO Content Assistant by SearchAtlas - Generate 6 months of SEO content in 1 week | Product Hunt"
          className={styles.pHuntbtn}
          width="180"
          height="54"
        />
      </div>
    </div>
  );
}

export default ProductHuntBadge;
