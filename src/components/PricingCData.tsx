import React from 'react';
import Button from './UI/Button/index';
import Circle from './UI/circlePercentage';
import { ReactSVG } from "react-svg";
// import { backgroundColors, sectionVariantsTop, sectionVariantsBottom } from './constants';
// import styles from 'scss/components/PricingTData.module.scss';

interface Props {
  servData: any;
  classStyle?: string;
}


function PricingTData({
  servData = '',
  classStyle = '',
}: Props): JSX.Element {
  

  return (
    <div className={`${classStyle.plan_cardWrap} text-center ${servData.serviceImage ? '': classStyle.noImageCard}`}>
      {servData.serviceImage &&
        <div className={`${classStyle.plan_img_bg}`}>
            <img src={servData.serviceImage} alt="" />
        </div>
      }
      <div className={`${classStyle.plan_bg_grey}`}>
        <div className={`${classStyle.planName_plan}`} dangerouslySetInnerHTML={{__html: servData.title}}></div>
        {classStyle.planDesc_plan &&
          <div className={`${classStyle.planDesc_plan}`} dangerouslySetInnerHTML={{__html: servData.description}}></div>
        }
        <div className={`${classStyle.planPrice_plan}`} dangerouslySetInnerHTML={{__html: servData.price}}></div>
        {servData.localSEO &&
          <div className={`${classStyle.planOptimization_plan } flex flex-row flex-wrap items-center`}>
            <div className={`${classStyle.planSingleW} basis-1/2`}>
              <div className={`${classStyle.planSingle} flex flex-row`}>
                <Circle cStyle={classStyle.svgCircle} percentage={servData.localSEO} />
                <p>Local SEO Optimization</p>
              </div>
            </div>
            <div className={`${classStyle.planSingleW} basis-1/2`}>
              <div className={`${classStyle.planSingle} flex flex-row`}>
                <Circle cStyle={classStyle.svgCircle} percentage={servData.webSearch} />
                <p>Web Search Optimization</p>
              </div>
            </div>
          </div>
        }
        <div className={`${classStyle.stripBtn}`}>
          <Button buttonObj={servData.serviceBtn}/>
        </div>
        {servData.linksTotal &&
          <div className={`${classStyle.planLinkst_plan}`} dangerouslySetInnerHTML={{__html: servData.linksTotal}}></div>
        }
        <div className={`${classStyle.planInclude_plan}`}>
          <ul className={`${servData.featureCheck ? 'checkList':''} ${servData.featureCheckColor}Before`}>
            {servData.features?.map((feature, index) => (
              <li key={`${index}-featureCard`} dangerouslySetInnerHTML={{__html: feature}}></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PricingTData;