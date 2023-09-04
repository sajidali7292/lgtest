import React, { useRef, useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

//RENDER LINK A
const submit = ({ buttonObj }) => {
    return (
        
        <input type="submit"
        className={`button button-${buttonObj.type} ${buttonObj.isLink ? 'button-link':''} ${buttonObj.isUnderline ? 'underline hover:underline':''}
            ${buttonObj.hoverTransparent ? 'transparent_effect':''}
            ${buttonObj.pill ? 'rounded-full':'rounded-md'}
            ${buttonObj.icon ? 'icon':''}
            ${buttonObj.size}
            mx-auto cursor-pointer
        `} value="Submit" />
    );
};
  
export default submit;