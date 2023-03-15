import React from 'react';
import circle from 'scss/components/circle.module.scss';

interface LinkBlockProps {
    percentage: number;
    cStyle?: string;
}

function LinkBlock ({ percentage, cStyle }: LinkBlockProps): JSX.Element {
    return (
        <svg viewBox="0 0 36 36"
        className={`${cStyle} ${circle.circularChart} ${percentage < 20 || !percentage ? circle.orange : percentage < 60 ? circle.green : circle.blue}`}>
            <path className={`${circle.circleBg}`}
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path className={`${circle.circle}`}
                strokeDasharray={`${percentage} 100`}
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className={`${circle.percentage}`}>{percentage}%</text>
        </svg>
    );
};

export default LinkBlock;