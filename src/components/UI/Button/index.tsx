import Link from 'next/link';
import React, { useRef, useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

//RENDER LINK A
const button = ({ buttonObj }) => {
    return (
        <Link href={`${buttonObj.linkSingle.url}`} passHref>
            <a href={`${buttonObj.url}`}
            className={`button button-${buttonObj.type} ${buttonObj.isLink ? 'button-link':''} ${buttonObj.isUnderline ? 'underline hover:underline':''}
            ${buttonObj.hoverTransparent ? 'transparent_effect':''}
            ${buttonObj.pill ? 'rounded-full':'rounded-md'}
            ${buttonObj.icon ? 'icon':''}
            ${buttonObj.size}
            `}
            target={`${buttonObj.linkSingle.target ? '_blank':'_self'}`}
            >
                {buttonObj.linkSingle.title}
                {buttonObj.icon && <span className="ico"><ReactSVG src="https://bplgtest.wpengine.com/wp-content/uploads/2023/02/arrow.svg" /></span>}
            </a>
        </Link>
    );
};
  
export default button;