import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from 'scss/components/PostTypes.module.scss';
import Modal from './Modal';
import { client } from 'client';


interface ModalLinksProps {
    item?: any;
}

function ModalLinks({ 
    item
    
    }: ModalLinksProps): JSX.Element {

    const [showModal, setShowModal] = useState(false);

    const handleModalButtonClick = (event) => {
        event.preventDefault();
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div className={`${styles.postWrap}`}>
            <Link href="#" passHref>
                <a onClick={handleModalButtonClick}>
                    <span dangerouslySetInnerHTML={{ __html: item?.title() }}></span>
                </a>
            </Link>
            <Modal
                isOpen={showModal}
                closeModal={closeModal}
                content={item.iframe}
            />
        </div>
    );
}

export default ModalLinks;
