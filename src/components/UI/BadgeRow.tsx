import React from 'react';
import Image from 'next/image';
import styles from 'scss/components/BadgeRow.module.scss';


interface BadgeRowProps {
    badgeObj: any;
}

function BadgeRow({ 
    badgeObj
    }: BadgeRowProps): JSX.Element {
    return (
        <div className={`${styles.bottom_txt} 
            flex flex-row items-center justify-center gap-2 lg:gap-4 
            bg-${badgeObj.bg} color-${badgeObj.color}
            ${badgeObj.rounded == 'normal' ? 'rounded-md' : badgeObj.rounded == 'pill' ? 'rounded-full':''}`}>
            {badgeObj.badgeRows.map((row, index) => (
                row.type == 'text' ? (
                    <span key={`${row.text}-${index}_text`} dangerouslySetInnerHTML={{__html: row.text}}
                        className={`${styles.text_wrap} ${badgeObj.textSize == 'big' ? 'text-lg': badgeObj.textSize == 'small'? 'text-sm':''}`}></span>
                ):(
                    <span key={`${row.alt}-${index}_image`} className={`${styles.image_wrap}`}>
                        <Image src={row.url} alt={row.alt}
                        width={`${row.width ? row.width:'30'}`}
                        height={`${row.height ? row.height:'30'}`}/>
                    </span>
                )
            ))}
        </div>
    );
}

export default BadgeRow;
