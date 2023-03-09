import React from 'react';
import styles from 'scss/components/ThumbnailButtons.module.scss';

interface LinkBlockProps {
  index: number;
  Link_Thumbnail: {
    url: string;
    width: number;
    height: number;
  };
  Link_Title?: string;
  Link_URL: string;
  Link_ReadTime?: string;
  className?: string;
}

function LinkBlock ({ index, Link_Thumbnail, Link_Title, Link_URL, Link_ReadTime, className }: LinkBlockProps): JSX.Element {
    return (
        <div className={className}>
            <div className={styles.linkBlocks}>
                <a href={Link_URL} target="_blank" rel="noopener noreferrer">
                    <div className={styles.imgWrapper}>
                        <div className={`${styles.img} img-block-${index}`}>
                            <img
                                src={Link_Thumbnail.url}
                                width={Link_Thumbnail.width}
                                height={Link_Thumbnail.height}
                            />
                        </div>
                    </div>
                    <div className={`${styles.Link_Title}`}>{Link_Title}</div>
                    <div className={`${styles.ReadTime}`}>
                        {Link_ReadTime}
                        <span>
                            <img src="/wp-content/uploads/2022/08/shape.png" alt="" />
                        </span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default LinkBlock;