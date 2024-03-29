import React from 'react';
import Button from './UI/Button/index';
import { ReactSVG } from "react-svg";
import { backgroundColors, sectionVariantsTop, sectionVariantsBottom } from './constants';
import Image from 'next/image';
// import styles from 'scss/components/PricingTData.module.scss';
import { hexToRgb, luminance, contrastColor } from './common/functions';

interface Props {
  servData: any;
  servIndex: number;
  servColor?: string;
  classStyle?: any;
  isScrolled?: boolean;
}

function stateImage(stateVariable, name, color) {
  var bgColor = luminance(hexToRgb('#000000'));
  var fColor = luminance(hexToRgb(color));
  var constraColor = contrastColor(fColor,bgColor,hexToRgb(color), color);
  // console.log(constraColor);
  if(stateVariable){
    return (
      <ReactSVG
        beforeInjection={(svg) => {
          svg.setAttribute('fill', constraColor)
        }}
      src="https://bplgtest.wpengine.com/wp-content/uploads/2023/03/check_table.svg" />
    );
  }else{
    if(name !== 'Custom'){
      return (
        <ReactSVG
        
        src="https://bplgtest.wpengine.com/wp-content/uploads/2023/03/cross_table.svg" />
      );
    }else{
      return ;
    }
  }
  return (
    <div className="warning">
      Warning!
    </div>
  );
}

function PricingTData({
  servData = '',
  servIndex = 0,
  servColor = '',
  classStyle = '',
  isScrolled = false,
}: Props): JSX.Element {
  return (
    <div className={`${classStyle.plan_serviceWrap} text-center`} style={{backgroundColor: servColor}}>
      <div className={`${classStyle.plan_serviceN} ${classStyle.spacer}`} style={{backgroundColor: servColor}}></div>
      <div className={`${classStyle.plan_serviceN} ${isScrolled ? 'plan_serviceNScroll':''}`} style={{backgroundColor: servColor, color: servData.serviceFColor ? servData.serviceFColor : '' }}>
        <p>{servData.serviceName}</p>
      </div>
      <div className={`${classStyle.plan_serviceL}`} style={{backgroundColor: servColor, color: servData.serviceFColor ? servData.serviceFColor : ''}}>
        <Image src={servData.serviceImage.url} alt={servData.serviceImage.alt}
        width='230' height='100'></Image>
        <p dangerouslySetInnerHTML={{__html: servData.servicePrice}}></p>
      </div>
      <div className={`${classStyle.plan_serviceT} ${classStyle.smallH}`}>
        <p dangerouslySetInnerHTML={{__html: servData.serviceTier}}></p>
      </div>
      <div className={`${classStyle.plan_authorityB} ${classStyle.smallH}`}>
        <p dangerouslySetInnerHTML={{__html: servData.serviceAuthority}}></p>
      </div>
      <div className={`${classStyle.plan_onsiteC} ${classStyle.smallH}`}>
        <p dangerouslySetInnerHTML={{__html: servData.serviceOnsite}}></p>
      </div>
      <div className={`${classStyle.plan_webD}`}>
        <p dangerouslySetInnerHTML={{__html: servData.serviceWeb}}></p>
      </div>
      {/* <div className="plan_paidM"><p><b>Paid Media (hours)</b></p></div> */}
      <div className={`${classStyle.plan_softwareA}`}>
          <div className={`${classStyle.spacerText}`}>&nbsp;</div>
          <div className={`${classStyle.largeText}`} dangerouslySetInnerHTML={{__html: servData.serviceSoftware?.serviceSearch}}></div>
          <div className={`${classStyle.iconW}`}>{stateImage(servData.serviceSoftware?.serviceEarly, servData.serviceName, servColor)}</div>
          <div className={`${classStyle.iconW}`}>{stateImage(servData.serviceSoftware?.serviceLocked, servData.serviceName, servColor)}</div>
      </div>
      <div className={`${classStyle.plan_supportG}`}>
          <div className={`${classStyle.spacerText}`}>&nbsp;</div>
          <div dangerouslySetInnerHTML={{__html: servData.serviceSupport?.serviceAccount}}></div>
          <div className={`${classStyle.iconW}`}>{stateImage(servData.serviceSupport?.serviceDedicated, servData.serviceName, servColor)}</div>
          <div className={`${classStyle.iconW}`}>{stateImage(servData.serviceSupport?.serviceChat, servData.serviceName, servColor)}</div>
          <div className={`${classStyle.iconW}`}>{stateImage(servData.serviceSupport?.serviceConsultation, servData.serviceName, servColor)}</div>
      </div>
      <div className={`${classStyle.plan_community}`}>
          <div className={`${classStyle.spacerText}`}>&nbsp;</div>
          <div className={`${classStyle.iconW}`}>{stateImage(servData.serviceCommunity?.serviceAccess, servData.serviceName, servColor)}</div>
          <div className={`${classStyle.iconW}`}>{stateImage(servData.serviceCommunity?.serviceSEO, servData.serviceName, servColor)}</div>
      </div>
      <div className={`${classStyle.plan_result}`}>
          <div className={`${classStyle.spacerText}`}>&nbsp;</div>
          <div className={`${classStyle.iconW}`}>{stateImage(servData.serviceResults?.serviceMonthly, servData.serviceName, servColor)}</div>
          <div className={`${classStyle.iconW}`}>{stateImage(servData.serviceResults?.serviceLinkGraphMetric, servData.serviceName, servColor)}</div>
      </div>
      <div className={`${classStyle.plan_total}`}>
          <div className={`${classStyle.spacerText}`}><b dangerouslySetInnerHTML={{__html: servData.serviceTotal}}></b></div>
      </div>
      <div className={`${classStyle.plan_callA}`}>
          <Button buttonObj={servData.serviceBtn}/>
      </div>
    </div>
  );
}

export default PricingTData;