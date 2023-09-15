import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from 'scss/components/ToggleButton.module.scss';
import { client } from 'client';


interface ToggleButtonProps {
    isColumns?: any;
    version?: any;
    toggles?: any;
}

function ToggleButton({
    isColumns,
    version,
    toggles

    }: ToggleButtonProps): JSX.Element {

    const [selectedItem, setSelectedItem] = useState(null);

    function handleItemClick(item) {
        setSelectedItem(item === selectedItem ? null : item);
    }

    return (
        <div className={`
        container flex
        ${version == 'v1'? 'gap-y-5':version == 'v3'? 'gap-y-3':''}
        ${styles.toggles}
        ${isColumns ? 'flex-row flex-wrap':'flex-col'}
        `}>
            {toggles.map((item, index, row) => (
                <div
                key={item.title}
                className={`
                    ${isColumns ? 'w-full md:w-1/2':''}
                    ${index % 2 == 0 && isColumns ? 'pr-0 md:pr-2':'pl-0 md:pl-2'}
                `}>
                    <div key={`services-home-wrap-${item.title}`}
                    className={`
                    ${styles.toggle} ${item.sectionClassName}
                    ${styles[version]}
                    tag-full_${index+1}
                    `}>
                        <div itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question" className={`
                            ${styles.toggleTitle}
                            ${item.title === selectedItem ? styles.typeSelected : ""}
                            flex flex-row justify-between`}
                            onClick={() => handleItemClick(item.title)}>
                            <div className={`${styles.title} flex items-center`} dangerouslySetInnerHTML={{ __html: item.title }}></div>
                            {version == 'v1' && <i className={`dashicons ${item.title === selectedItem ? 'dashicons-minus':'dashicons-plus'}`}></i>}
                            {version == 'v3' && <i className={`dashicons ${item.title === selectedItem ? 'dashicons-arrow-up-alt2':'dashicons-arrow-down-alt2'}`}></i>}
                        </div>
                        <div itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer" className={`${styles.answer} flex flex-col`}>
                            <div className={`${styles.content}`} dangerouslySetInnerHTML={{ __html: item.answer }}></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ToggleButton;
