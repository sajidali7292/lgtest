import React from 'react';
import Link from 'next/link';
import styles from 'scss/components/PostDetail.module.scss';


interface PostDetailProps {
    author: any;
    date?: any;
    content?: any;
}

function PostDetail({ 
    author,
    date,
    content
    }: PostDetailProps): JSX.Element {
    const customDate = new Date(date);

    const simpleContent = content?.replace(/<\/?[^>]+(>|$)/g, "");
    return (
        <div className={`${styles.detailWrap}`}>
            <p className={`${styles.authorDetail}`}>
                <span>By </span>
                <Link href={`${author?.node?.uri}`} passHref>
                    <a href={`${author?.node?.uri}`}><span>{author?.node?.firstName} {author?.node?.lastName}</span></a>
                </Link>
                {date &&
                    <span> On {customDate.toLocaleString('default', { month: 'short' })} {customDate.getDate()} ,{customDate.getFullYear()}</span>
                }
            </p>
            {content &&
                <div className={`${styles.shortContent}`} dangerouslySetInnerHTML={{ __html: simpleContent.substring(0, 210)+ ' […]'}} ></div>
            }
        </div>
    );
}

export default PostDetail;
