import React from 'react';
// import styles from 'scss/components/PricingTDataHolder.module.scss';

interface Props {
  classStyle?: string;
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
          <p className={`${classStyle.different}`}><b>Software Access</b></p>
          <p>Search Atlas Account</p>
          <p>Early access to new software features</p>
          <p>Locked rate</p>
      </div>
      <div className={`${classStyle.plan_supportG}`}>
          <p className={`${classStyle.different}`}><b>Support &amp; Guidance</b></p>
          <p>Account Manager Support (hours)</p>
          <p>Dedicated SEO Writer</p>
          <p>Live chat // Slack private channel</p>
          <p>1-on-1 Consultation with SEO Specialist</p>
      </div>
      <div className={`${classStyle.plan_community}`}>
          <p className={`${classStyle.different}`}><b>Community</b></p>
          <p>Access to Webinars</p>
          <p>SEO Training Modules</p>
      </div>
      <div className={`${classStyle.plan_result}`}>
          <p className={`${classStyle.different}`}><b>Results</b></p>
          <p>Monthly SEO Reporting</p>
          <p className={`${classStyle.larg_r}`}>LinkGraph SEO Metrics Improvement Guarantee **</p>
      </div>
      <div className={`${classStyle.plan_total}`}>
          <p className={`${classStyle.different}`}><b>Total Strategy Hours</b></p>
      </div>
      <div className={`${classStyle.plan_callA}`}>
          <p>&nbsp;</p>
      </div>
    </div>
  );
}

export default PricingTDataHolder;