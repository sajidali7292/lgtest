import Link from 'next/link';
import { ReactSVG } from "react-svg";

//RENDER LINK A
const button = ({ buttonObj }) => {
    const btnType = buttonObj.type == 'secondary' ? 'button-secondary': buttonObj.type = 'third' ? 'button-third':'';
    return (
        <Link href={buttonObj.url}>
            <a href={buttonObj.url}
            className={`button ${btnType}
            ${buttonObj.rounded ? 'rounded':''}
            ${buttonObj.size == 'medium' ? 'medium': buttonObj.size = 'big' ? 'big':''}
            ${buttonObj.icon ? 'icon':''}
            `}>{buttonObj.label}
            {buttonObj.icon && <span className="ico"><ReactSVG src="https://bplgtest.wpengine.com/wp-content/uploads/2023/02/arrow.svg" /></span>}
            </a>
        </Link>
    );
};
  
export default button;