import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from 'scss/components/PostTypes.module.scss';
import ModalLinks from 'components/UI/ModalLinks';
import Modal from 'components/UI/Modal';
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
        const { target } = event
        for (var i = 0; i < toggles.length; i++) {
            console.log( toggles[i].classList.remove('currentPost') );
        }
        target.parentElement.classList.add('currentPost');
    };

    return (
        <div className={`${styles.typesWrapper}`}>
            {type === 'blog' && 
                RenderPosts(type,catID)
            }
            {type === 'webinar' && 
                RenderCategory(type,catID)
            }
            {type === 'video' && 
                RenderCategories(type,catID)
            }
            {type === 'ebook' && 
                RenderBooks(type,catID)
            }
            {type.includes("study") &&
                RenderCases(type,catID)
            }
        </div>
    );

    function RenderPosts(type='',catID=0) {
        return usePosts({where: {categoryId: catID}, first: 5}).nodes.map((item, index) => (
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
                        <span dangerouslySetInnerHTML={{ __html: item?.title() }} ></span>
                    </a>
                </Link>
            </div>
        ))
    }
    function RenderCategory(type='',catID=0) {
        return useQuery().videoCategory({id: type, idType: 'SLUG'})?.videos()?.nodes.map((item, index) => (
            <div key={`videoCategory-${index}`} className={`${styles.postWrap}`}>
                <ModalLinks item={item}/>
            </div>
        ))
    }
    function RenderCategories(type='',catID=0) {
        return useQuery().videoCategories({first: 6, where: {excludeTree: "29"}})?.nodes.map((item, index) => (
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
        
    }
    function RenderBooks(type='',catID=0) {
        return useQuery().ebooks({first: 10})?.nodes.map((item, index) => (
            <div key={`eBook-${index}_${item.title()}`} className={`${styles.postWrap}`}>
                <Link href={`${item.uri}`} passHref>
                    <a href={`${item.uri}`}
                    onClick={() => handlePost(item.uri)}
                    className={`
                    typeToggles ${styles.postList}
                    ${item.uri === selectedPost ? styles.typeSelected : ""}
                    `}>
                        <span dangerouslySetInnerHTML={{ __html: item.title() }} ></span>
                    </a>
                </Link>
            </div>
        ))
    }
    function RenderCases(type='',catID=0) {
        return useQuery().caseStudies({first: 10})?.nodes.map((item, index) => (
            <div key={`${item?.title()}-${index}`} className={`${styles.postWrap}`}>
                <Link href={`${item.uri}`} passHref>
                    <a href={`${item.uri}`}
                    onClick={() => handlePost(item.uri)}
                    className={`
                    typeToggles ${styles.postList}
                    ${item.uri === selectedPost ? styles.typeSelected : ""}
                    `}>
                        <span dangerouslySetInnerHTML={{ __html: item?.title() }} ></span>
                    </a>
                </Link>
            </div>
        ))
    }
}

export default RenderPosts;
