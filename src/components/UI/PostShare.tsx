import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from 'scss/components/PostShare.module.scss';
import ShareLinks from './ShareLinks';


interface PostShareProps {
    author: any;
    post?: any;
    isDescription?: boolean;
}

function PostShare({ 
    author,
    post,
    isDescription
    }: PostShareProps): JSX.Element {
    return (
        <div className={`${styles.authorCard} pt-7 px-9 pb-10 rounded-md`}>
            <div className={`flex flex-row flex-wrap items-center ${isDescription ? 'mb-6':''}`}>
                <div className={`flex flex-row gap-4 items-center ${isDescription ? 'basis-5/12':'basis-full'}`}>
                    <div className={`${styles.authorImg}`}>
                        <Image 
                            src={`https://bplgtest.wpengine.com/wp-content/uploads/2023/02/Vector.svg`}
                            width='40'
                            height='40'
                            className={`object-contain`}
                        />
                    </div>
                    <div className={`${styles.authorDetail}`}>
                        <span className={`${styles.authorTitle}`}>Author </span>
                        <Link href={`${author?.node?.uri}`} passHref>
                            <a className={`${styles.authorName}`} href={`${author?.node?.uri}`}><span>{author?.node?.firstName} {author?.node?.lastName}</span></a>
                        </Link>
                    </div>
                </div>
                {!isDescription &&
                    <div className={`${styles.authorDescription} mt-5 mb-4`}>Did like a post? Share it with:</div>
                }
                <div className={`flex justify-end ${isDescription ? 'basis-7/12':'basis-full'}`}>
                    <ShareLinks post={post} />
                </div>
            </div>
            {isDescription &&
                <div dangerouslySetInnerHTML={{__html: author?.node.description}} className={`${styles.authorDescription}`}></div>
            }
            
        </div>
    );
}

export default PostShare;
