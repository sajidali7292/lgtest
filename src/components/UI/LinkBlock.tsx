import React from 'react';
import styles from 'scss/components/ThumbnailButtons.module.scss';
import classnames from 'classnames'


interface LinkBlockProps {
  index: number;
  Link_Thumbnail: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  Link_Tag?: string;
  Link_Title?: string;
  Link_URL: string;
  Link_ReadTime?: string;
  className?: string;
}

function LinkBlock({ index, Link_Thumbnail, Link_Title, Link_URL, Link_ReadTime, className, Link_Tag }: LinkBlockProps): JSX.Element {
  return (
    <div className={`${className} flex flex-col`}>
      <div className={`${styles.linkBlocks} linkBlocks flex flex-col h-full`}>
        <a className={`flex flex-col justify-between h-full`} href={Link_URL} target="_blank" rel="noopener noreferrer">
          <div className={`${styles.contentTop}`}>
            <div className={`${classnames(styles.thumbnail_wrapper)} thumbnail_wrapper`} style={{backgroundImage: `url(${Link_Thumbnail.url})`}}>
              {Link_Tag && <div className={`Link_Tag ${styles.Video_Tag}`}>{Link_Tag}</div>}
            </div>
            <div className={`${styles.Link_Title} Link_Title`}>{Link_Title}</div>
          </div>
          <div className={`${styles.ReadTime} ReadTime`}>
            {Link_ReadTime}
            <span>
              <img src={`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/shape.webp`} alt="shape" />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default LinkBlock;
