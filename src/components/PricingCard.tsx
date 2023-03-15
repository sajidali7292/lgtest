import React from 'react';
import styles from 'scss/components/PricingCard.module.scss';
import PricingCData from './PricingCData';

interface Props {
  servicesData: Array<any>;
}

function PricingCard({
  servicesData
}: Props): JSX.Element {
  return (
    <div className={`${styles.cardRow} flex flex-row flex-wrap overflow-auto`}>
      {servicesData?.map((serviceData, index) => (
        <div 
        className={`${styles.card} w-full md:w-1/2 lg:w-1/4 py-4 px-0
        ${index % 2 == 0 ? 'md:pr-4 md:pl-0':'md:pr-0 md:pl-4'}
        ${index > 1 ? 'md:pt-4 md:pb-0':'md:pt-0 md:pb-4'}
        lg:pr-8 lg:py-0 lg:pl-0 cardblock${index}`}>
          <PricingCData key={`${index}$-card`} servData={serviceData} classStyle={styles} />
        </div>
      ))}
    </div>
  );
}

export default PricingCard;