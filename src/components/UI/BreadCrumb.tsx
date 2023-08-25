import React from 'react';
import Link from 'next/link';
import styles from 'scss/components/BreadCrumb.module.scss';
import { client, MenuLocationEnum } from 'client';


interface BreadCrumbProps {
    pageObj?: any;
}

function BreadCrumb({ 
    pageObj
    }: BreadCrumbProps): JSX.Element {
    const { useQuery } = client;
    const { allSettings, page, pageBy } =  useQuery();

    const blogPageID = allSettings.readingSettingsPageForPosts.toString();
    //const blogPageObj = pageBy({pageId: blogPageID});
    const blogType = 'ID';
    const blogPageObj = page({id: blogPageID, idType: 'DATABASE_ID'});

    const pageCategory = pageObj?.categories({first:1}).edges[0].node;
    const isPost = pageObj.contentTypeName == 'post' ? true:false;
    

    return (
        <div className={`${styles.breadWrap} flex flex-row flex-wrap items-center gap-2 md:mt-3`}>
            <Link href={`/`} passHref>
                <a href={`/`}>Home</a>
            </Link>
            <i className={`dashicons dashicons-arrow-right-alt2 text-md`}></i>
            {isPost &&
            <>
                <Link href={`${blogPageObj?.uri}`} passHref>
                    <a href={`${blogPageObj?.uri}`} dangerouslySetInnerHTML={{ __html: blogPageObj?.title() }} ></a>
                </Link>
                <i className={`dashicons dashicons-arrow-right-alt2 text-md`}></i>
            </>
            }
            
            {pageCategory &&
            <>
                <Link href={`${ pageCategory.uri }`} passHref>
                    <a href={`${pageCategory.uri}`} dangerouslySetInnerHTML={{ __html: pageCategory.name }} ></a>
                </Link>
                <i className={`dashicons dashicons-arrow-right-alt2 text-md`}></i>
            </>
            }
            <p dangerouslySetInnerHTML={{ __html: pageObj?.title() }} ></p>
        </div>
    );
}

export default BreadCrumb;
