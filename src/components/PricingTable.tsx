import React, { useEffect } from 'react';
import PricingTData from './PricingTData';
import PricingTDataHolder from './PricingTDataHolder';
import styles from 'scss/components/PricingTable.module.scss';

interface Props {
  servicesData: Array<any>;
  isScrolled?: boolean;
}

function PricingTable({
  servicesData,
  isScrolled = false,
}: Props): JSX.Element {
  useEffect(() => {
    window.addEventListener('scroll', isStickyTable);
    return () => {
        window.removeEventListener('scroll', isStickyTable);
    };
  });
  const isStickyTable = (e) => {
    let windowH = window.innerHeight / 2.5;
    let pageScroll = document.getElementsByTagName("html")[0].scrollTop;
    let tableRow = document.querySelector('.table_row');
    let sectionPos = (tableRow as HTMLElement).offsetTop - 50;
    let sectionHeight = sectionPos + (tableRow as HTMLElement).offsetHeight - windowH;
    let posHeader = pageScroll - sectionPos + 25;
    //console.log('posHeader: ', posHeader);
    let arrScrolled = Array.from( document.getElementsByClassName('plan_serviceNScroll') );

    if( pageScroll >= sectionPos ){
      if( pageScroll <= sectionHeight ){
        arrScrolled.forEach(element => {
          element.classList.add('topScrolled');
          (element as HTMLElement).style.top = posHeader+'px';
        });
      }
    }else{
      arrScrolled.forEach(element => {
        element.classList.remove('topScrolled');
        (element as HTMLElement).style.top = '0';
      });
    }
  };
  

  return (
    <div className={`${styles.tableRow} table_row flex flex-row flex-wrap md:flex-nowrap overflow-auto`}>
      <div className={`${styles.Table} w-1/2 md:w-1/3 lg:w-1/7.5 ${styles.planblock0}`}>
        <PricingTDataHolder classStyle={styles} isScrolled={isScrolled}/>
      </div>
      {servicesData?.map((serviceData, index) => (
        <div key={`${index}$-block`}
        className={`${styles.Table} w-1/2 md:w-5/12 lg:w-1/6 planblock${index}`} style={{backgroundColor: serviceData.serviceColor}}>
          <PricingTData isScrolled={isScrolled}
            servData={serviceData} servIndex={index} servColor={serviceData.serviceColor} classStyle={styles}/>
        </div>
      ))}
    </div>
  );
}

export default PricingTable;