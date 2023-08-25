import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from 'scss/components/PostTypes.module.scss';
import ModalLinks from 'components/UI/ModalLinks';
import Modal from './Modal';
import { client } from 'client';


interface PostTypesProps {
    type?: string;
    catID?: number;
}

function RenderPosts({ 
    type='',
    catID=0
    
    }: PostTypesProps): JSX.Element {
    
    const { useQuery, usePosts } = client;
    const [selectedPost, setSelectedPost] = useState(null);

    function handlePost(item) {
        setSelectedPost(item === selectedPost ? null : item);
    }

    const currentPost = (event: React.MouseEvent<HTMLDivElement>) => {
        var toggles = document.getElementsByClassName('typeToggles');
        for (var i = 0; i < toggles.length; i++) {
            console.log( toggles[i].classList.remove('currentPost') );
        }
        event.target.parentElement.classList.add('currentPost');
    };

    return (
        <div className={`${styles.typesWrapper}`}>
            {type == 'blog' && (
                usePosts({where: {categoryId: catID}, first: 5}).nodes.map((item, index) => (
                    <div key={`${item.uri}`}
                    className={`${styles.postWrap}`}
                    >
                        <Link href={`${item.uri}`} passHref>
                            <a href={`${item.uri}`}
                            onClick={() => handlePost(item.uri)}
                            className={`
                            typeToggles ${styles.postList}
                            ${item.uri === selectedPost ? styles.typeSelected : ""}
                            `}>
                                <span dangerouslySetInnerHTML={{ __html: item?.title({format: 'RENDERED'}) }} ></span>
                            </a>
                        </Link>
                    </div>
                ))
            )}
            {type == 'webinar' && (
                useQuery().videoCategory({id: type, idType: 'SLUG'})?.videos()?.nodes.map((item, index) => (
                    <div key={`videoCategory-${index}`} className={`${styles.postWrap}`}>
                        <ModalLinks item={item}/>
                    </div>
                ))
            )}
            {type == 'video' && (
                useQuery().videoCategories({first: 6, where: {excludeTree: "29"}})?.nodes.map((item, index) => (
                    <div key={`videoCategories-${index}-${item.name}`} className={`${styles.postWrap} ${styles.postCategory}`}>
                        <Link href={`${item.uri}`} passHref>
                            <a href={`${item.uri}`}
                            onClick={() => handlePost(item.uri)}
                            className={`
                            typeToggles ${styles.postList}
                            ${item.uri === selectedPost ? styles.typeSelected : ""}
                            `}>
                                <span dangerouslySetInnerHTML={{ __html: item?.name }} ></span>
                            </a>
                        </Link>
                    </div>
                ))
            )}
            {type == 'ebook' && (
                useQuery().ebooks({first: 10})?.nodes.map((item, index) => (
                    <div key={`eBook-${index}_${item.title({format: 'RENDERED'})}`} className={`${styles.postWrap}`}>
                        <Link href={`${item.uri}`} passHref>
                            <a href={`${item.uri}`}
                            onClick={() => handlePost(item.uri)}
                            className={`
                            typeToggles ${styles.postList}
                            ${item.uri === selectedPost ? styles.typeSelected : ""}
                            `}>
                                <span dangerouslySetInnerHTML={{ __html: item.title({format: 'RENDERED'}) }} ></span>
                            </a>
                        </Link>
                    </div>
                ))
            )}
            {type.includes("study") && (
                useQuery().caseStudies({first: 10})?.nodes.map((item, index) => (
                    <div key={`${item?.title({format: 'RENDERED'})}-${index}`} className={`${styles.postWrap}`}>
                        <Link href={`${item.uri}`} passHref>
                            <a href={`${item.uri}`}
                            onClick={() => handlePost(item.uri)}
                            className={`
                            typeToggles ${styles.postList}
                            ${item.uri === selectedPost ? styles.typeSelected : ""}
                            `}>
                                <span dangerouslySetInnerHTML={{ __html: item?.title({format: 'RENDERED'}) }} ></span>
                            </a>
                        </Link>
                    </div>
                ))
            )}
            {/* {renderPosts(type,catID)} */}
        </div>
    );

    function renderPosts(type='',catID=0) {
        

        if( type === 'blog' ){
            return (usePosts({where: {categoryId: catID}, first: 5}).nodes.map((item, index) => (
                <div key={`${item.uri}`}
                className={`${styles.postWrap}
                `}
                >
                    <Link href={`${item.uri}`} passHref>
                        <a href={`${item.uri}`}
                        onClick={() => handlePost(item.uri)}
                        className={`
                        typeToggles ${styles.postList}
                        ${item.uri === selectedPost ? styles.typeSelected : ""}
                        `}>
                            <span dangerouslySetInnerHTML={{ __html: item?.title({format: 'RENDERED'}) }} ></span>
                        </a>
                    </Link>
                </div>
            )))
        }else if( type == 'webinar' ){
            useQuery().videoCategory({id: type, idType: 'SLUG'})?.videos()?.nodes.map((item, index) => (
                <div key={`videoCategory-${index}`} className={`${styles.postWrap}`}>
                    <ModalLinks item={item}/>
                </div>
            ))
        }else if( type == 'video' ){
            useQuery().videoCategories({first: 6, where: {excludeTree: "29"}})?.nodes.map((item, index) => (
                <div key={`videoCategories-${index}-${item.name}`} className={`${styles.postWrap} ${styles.postCategory}`}>
                    <Link href={`${item.uri}`} passHref>
                        <a href={`${item.uri}`}
                        onClick={() => handlePost(item.uri)}
                        className={`
                        typeToggles ${styles.postList}
                        ${item.uri === selectedPost ? styles.typeSelected : ""}
                        `}>
                            <span dangerouslySetInnerHTML={{ __html: item?.name }} ></span>
                        </a>
                    </Link>
                </div>
            ))
        }else if( type == 'ebook' ){
            useQuery().ebooks({first: 10})?.nodes.map((item, index) => (
                <div key={`eBook-${index}_${item.title({format: 'RENDERED'})}`} className={`${styles.postWrap}`}>
                    <Link href={`${item.uri}`} passHref>
                        <a href={`${item.uri}`}
                        onClick={() => handlePost(item.uri)}
                        className={`
                        typeToggles ${styles.postList}
                        ${item.uri === selectedPost ? styles.typeSelected : ""}
                        `}>
                            <span dangerouslySetInnerHTML={{ __html: item.title({format: 'RENDERED'}) }} ></span>
                        </a>
                    </Link>
                </div>
            ))
        }else if( type.includes("study") ){
            useQuery().caseStudies({first: 10})?.nodes.map((item, index) => (
                <div key={`${item?.title({format: 'RENDERED'})}-${index}`} className={`${styles.postWrap}`}>
                    <Link href={`${item.uri}`} passHref>
                        <a href={`${item.uri}`}
                        onClick={() => handlePost(item.uri)}
                        className={`
                        typeToggles ${styles.postList}
                        ${item.uri === selectedPost ? styles.typeSelected : ""}
                        `}>
                            <span dangerouslySetInnerHTML={{ __html: item?.title({format: 'RENDERED'}) }} ></span>
                        </a>
                    </Link>
                </div>
            ))
        }
    }
}

export default RenderPosts;