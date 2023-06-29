import Link from 'next/link';
import { ReactSVG } from "react-svg";

//RENDER LINK A
const button = ({ buttonObj }) => {
    return (
        <Link href={buttonObj.url}>
            <a href={buttonObj.url}
            className={`button button-${buttonObj.type} ${buttonObj.isLink ? 'button-link':''} ${buttonObj.isUnderline ? 'underline hover:underline':''}
            ${buttonObj.hoverTransparent ? 'transparent_effect':''}
            ${buttonObj.pill ? 'rounded-full':'rounded-md'}
            ${buttonObj.size == 'small' ? 'small' : buttonObj.size == 'medium' ? 'medium': buttonObj.size = 'big' ? 'big':''}
            ${buttonObj.icon ? 'icon':''}
            `}
            target={`${buttonObj.target ? '_blank':'_self'}`}>{buttonObj.label}
            {buttonObj.icon && <span className="ico"><ReactSVG src="https://bplgtest.wpengine.com/wp-content/uploads/2023/02/arrow.svg" /></span>}
            </a>
        </Link>
    );
};
  
export default button;