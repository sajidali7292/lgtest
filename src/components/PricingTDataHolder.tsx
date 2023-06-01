import React from 'react';
// import styles from 'scss/components/PricingTDataHolder.module.scss';

interface Props {
  classStyle?: any;
  isScrolled?: boolean;
}

function PricingTDataHolder({
  classStyle = '',
  isScrolled = false,
}: Props): JSX.Element {
  return (
    <div className={`${classStyle.plan_serviceWrap}`}>
      <div className={`${classStyle.plan_serviceN} ${classStyle.spacer}`} ></div>
      <div className={`${classStyle.plan_serviceN} ${isScrolled ? 'plan_serviceNScroll':''}`}><p><b>Service Name</b></p></div>
      <div className={`${classStyle.plan_serviceL}`}><p><b>Price</b></p></div>
      <div className={`${classStyle.plan_serviceT} ${classStyle.smallH}`}><p><b>Service Tier</b></p></div>
      <div className={`${classStyle.plan_authorityB} ${classStyle.smallH}`}><p><b>Authority Building (credits)</b></p></div>
      <div className={`${classStyle.plan_onsiteC} ${classStyle.smallH}`}><p><b>Onsite Content (hours)</b></p></div>
      <div className={`${classStyle.plan_webD}`}><p><b>Web Development + Technical SEO (hours)</b></p></div>
      {/* <div className="plan_paidM"><p><b>Paid Media (hours)</b></p></div> */}
      <div className={`${classStyle.plan_softwareA}`}>
          <div className={`${classStyle.different}`}><b>Software Access</b></div>
          <div>Search Atlas Account</div>
          <div>Early access to new software features</div>
          <div>Locked rate</div>
      </div>
      <div className={`${classStyle.plan_supportG}`}>
          <div className={`${classStyle.different}`}><b>Support &amp; Guidance</b></div>
          <div>Account Manager Support (hours)</div>
          <div>Dedicated SEO Writer</div>
          <div>Live chat // Slack private channel</div>
          <div>1-on-1 Consultation with SEO Specialist</div>
      </div>
      <div className={`${classStyle.plan_community}`}>
          <div className={`${classStyle.different}`}><b>Community</b></div>
          <div>Access to Webinars</div>
          <div>SEO Training Modules</div>
      </div>
      <div className={`${classStyle.plan_result}`}>
          <div className={`${classStyle.different}`}><b>Results</b></div>
          <div>Monthly SEO Reporting</div>
          <div className={`${classStyle.larg_r}`}>LinkGraph SEO Metrics Improvement Guarantee **</div>
      </div>
      <div className={`${classStyle.plan_total}`}>
          <div className={`${classStyle.different}`}><b>Total Strategy Hours</b></div>
      </div>
      <div className={`${classStyle.plan_callA}`}>
          <div>&nbsp;</div>
      </div>
    </div>
  );
}

export default PricingTDataHolder;