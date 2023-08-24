import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from 'scss/components/PostTypes.module.scss';
import ModalLinks from 'components/UI/ModalLinks';
import RenderCat from 'components/common/RenderCat.tsx';
import RenderPosts from 'components/common/RenderPosts.tsx';
import Modal from './Modal';
import { client } from 'client';


interface PostTypesProps {
    sections?: any;
    tSections?: any;
}

function PostTypes({ 
    sections,
    tSections
    
    }: PostTypesProps): JSX.Element {
    
    const { useQuery, usePosts } = client;
    const categObj = useQuery().categories( {first: 10} );

    const contentTypes = useQuery().contentTypes()?.nodes;

    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItemChild, setSelectedItemChild] = useState(null);
    
    function handleItemClick(item) {
        setSelectedItem(item === selectedItem ? null : item);
        if(selectedItem === null){
            setSelectedItemChild(null)
        }
    }

    return (
        <div className={`${styles.typesWrapper}`}>
            {renderToggle(tSections)}
            {contentTypes.map((item, index) => (
                //console.log(item.name)
            ))}
        </div>
    );

    function renderToggle( toggleObj ){
        return toggleObj.map((item, index, row) => (
            <div key={`toggle-wrap-${item.toggleTitle}`} className={`${styles.typesWrap} ${item.sectionClassName} ${ index === 0 ? styles.firstRow: index === row.length - 1 ? styles.lastRow : styles.middleRow }`}>
                <div className={`
                ${styles.typeToggle}
                ${item.toggleTitle === selectedItem ? styles.typeSelected+' clicked' : ""}
                flex flex-row justify-between`}
                onClick={() => handleItemClick(item.toggleTitle)}>
                    <div className={`${styles.subtitle} relative`}>
                        <Image 
                        src={item.toggleImage.mediaItemUrl}
                        className={`object-contain object-left p-4`}
                        layout='fill'
                        />
                        <span dangerouslySetInnerHTML={{ __html: item.toggleTitle }}></span>
                    </div>
                    <i className={`dashicons ${item.toggleTitle === selectedItem ? 'dashicons-arrow-down-alt2':'dashicons-arrow-up-alt2'} text-md`}></i>
                </div>
                <div className={`${styles.typeContent} flex flex-col`}>
                    {item.typeOfPost === 'blog' ? (
                        <>
                            <div className={`${styles.title}`} dangerouslySetInnerHTML={{ __html: item.title?.toString() }}></div>
                            <RenderCat type={item.typeOfPost} catsObj={categObj}/>
                        </>
                    ):(
                        <>
                            <div className={`${styles.typeContent} ${styles.noTitle}`}>
                                <RenderPosts type={item.typeOfPost} />
                            </div>
                        </>
                    )}
                </div>
            </div>
        ))
    }
}

export default PostTypes;
