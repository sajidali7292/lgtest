import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from 'scss/components/ShareLinks.module.scss';


interface ShareLinksProps {
    post: any;
}

function ShareLinks({ 
    post
    }: ShareLinksProps): JSX.Element {
    return (
        <div className={`${styles.iconsWrap}`}>
            <Link href={`${`http://twitter.com/intent/tweet?original_referer=${post.link}&text=${post.title()}&url=${post.link}`}`} passHref>
                <a target="_blank" className={`${styles.iconLink}`} >
                    <i className={`dashicons dashicons-twitter text-md`}></i>
                </a>
            </Link>
            <Link href={`${`http://www.facebook.com/sharer/sharer.php?u=${post.link}&title=${post.title()}`}`} passHref>
                <a target="_blank" className={`${styles.iconLink}`} >
                    <i className={`dashicons dashicons-facebook-alt text-md`}></i>
                </a>
            </Link>
            <Link href={`${`http://www.linkedin.com/shareArticle?mini=true&url=${post.link}&title=${post.title()}`}`} passHref>
                <a target="_blank" className={`${styles.iconLink}`} >
                    <i className={`dashicons dashicons-linkedin text-md`}></i>
                </a>
            </Link>
            <Link href={`${`mailto:?subject=${post.title()}&amp;body=Check out this link ${post.link}`}`} passHref>
                <a target="_blank" className={`${styles.iconLink}`} >
                    <i className={`dashicons dashicons-email text-md`}></i>
                </a>
            </Link>
        </div>
    );
}

export default ShareLinks;
