import React, { useState, useEffect } from 'react';
import styles from 'scss/components/Loading.module.scss';
import { client } from 'client';


interface SearchAjaxProps {
}

function Loading({ 
    }: SearchAjaxProps): JSX.Element {

    return (
        <div className={`${styles.loading}`}>
            <div className={`${styles.spiner}`}>

            </div>
        </div>
    );
}

export default Loading;
