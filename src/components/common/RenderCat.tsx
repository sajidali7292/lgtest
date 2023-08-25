import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from 'scss/components/PostTypes.module.scss';
import ModalLinks from 'components/UI/ModalLinks';
import RenderPosts from 'components/common/RenderPosts';
import Modal from './Modal';
import { client } from 'client';


interface PostTypesProps {
    type?: any;
    catsObj?: any;
}

function RenderCat({ 
    type,
    catsObj
    
    }: PostTypesProps): JSX.Element {
    
    const { useQuery, usePosts } = client;

    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItemChild, setSelectedItemChild] = useState(null);
    
    function handleItemClickChild(item) {
        setSelectedItemChild(item === selectedItemChild ? null : item);
    }

    return (
        <div className={`${styles.typesWrapper}`}>
            {renderCat(type, catsObj)}
        </div>
    );

    function renderCat(type, catsObj) {
        return catsObj.nodes.map((item, index, row) => (
            <div
            key={`toggle-wrap-${item.name}`}
            className={`${styles.typesWrap} ${item.sectionClassName} ${ index === 0 ? styles.firstRow: index === row.length - 1 ? styles.lastRow : styles.middleRow }`}
            >
                <div className={`
                ${styles.typeToggle} ${styles.typeToggleChild}
                ${item.name === selectedItemChild ? styles.typeSelected : ""}
                flex flex-row justify-between
                `}
                onClick={() => handleItemClickChild(item.name)}
                >
                    <div className={`${styles.subtitle}`} dangerouslySetInnerHTML={{ __html: item.name }}></div>
                    <i className={`dashicons ${item.name === selectedItem ? 'dashicons-arrow-down-alt2':'dashicons-arrow-up-alt2'} text-md`}></i>
                </div>
                <div className={`${styles.typeContent} flex flex-wrap flex-col`}>
                    {/* {renderPosts(type, item.categoryId)} */}
                    <RenderPosts type={type} catID={item.categoryId} />
                </div>
            </div>
        ))
    }
}

export default RenderCat;
