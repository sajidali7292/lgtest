import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from 'scss/components/BuildPerfect.module.scss';
import Button from './UI/Button/index';
import { client, MenuLocationEnum } from 'client';


interface BuildPerfectProps {
    buildPerfect: any;
}

function BuildPerfect({ 
    buildPerfect
    }: BuildPerfectProps): JSX.Element {
    return (
        <div className={`${styles.buildWrap}`}>
            <div className={`${styles.buildContainer} flex flex-col items-start gap-5 rounded-md`}>
                {buildPerfect.perfectImage?.mediaItemUrl &&
                    <Image 
                        src={`${buildPerfect?.perfectImage?.mediaItemUrl?.toString()}`}
                        alt={`${buildPerfect.perfectImage.alt ? buildPerfect.perfectImage.alt:'LG Icon'}`}
                        width='30'
                        height= '30'
                    />
                }
                <div className={`${styles.buildTitle}`}>
                    {buildPerfect?.perfectTitle}
                </div>
                <div className={`${styles.buttonWrap} flex flex-row flex-wrap gap-3`}>
                    {buildPerfect.linksObjs &&
                        buildPerfect.linksObjs.map((button, index) => (
                            <Button key={`${button.linkSingle.title}`} buttonObj={button} key={index} />
                        ))
                    }
                </div>
                {buildPerfect.imagesReview &&
                    <div className={`${styles.imageWrap} flex flex-row flex-wrap gap-5`}>
                        {buildPerfect.imagesReview.map((image, index) => (
                            <Image key={`${index}_${image.imageReview.alt}`} 
                                src={`${image.imageReview.mediaItemUrl ? image.imageReview.mediaItemUrl.toString():''}`}
                                alt={`${image.imageReview.alt ? image.imageReview.alt:'LG Icon'}`}
                                className={`object-contain`}
                                width='96'
                                height= '50'
                            />
                        ))}
                    </div>
                }
            </div>
        </div>
    );
}

export default BuildPerfect;
