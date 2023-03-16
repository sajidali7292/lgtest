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
    const onScroll = () => {
      let windowH = window.innerHeight / 2.5;
      let pageScroll = document.getElementsByTagName("html")[0].scrollTop;
      let sectionPos = document.getElementsByClassName('table_row')[0].offsetTop - 50;
      let sectionHeight = sectionPos + document.getElementsByClassName('table_row')[0].offsetHeight - windowH;
      let posHeader = pageScroll - sectionPos + 25;
      //console.log(posHeader);
      let arrScrolled = Array.from( document.getElementsByClassName('plan_serviceNScroll') );

      if( pageScroll >= sectionPos ){
        if( pageScroll <= sectionHeight ){
          arrScrolled.forEach(element => {
            element.classList.add('topScrolled');
            element.style.top = posHeader+'px';
          });
        }
      }else{
        arrScrolled.forEach(element => {
          element.classList.remove('topScrolled');
          element.style.top = 0;
        });
      }
      //console.log(posHeader);
    };

    document.addEventListener('DOMContentLoaded', function() {
      document.addEventListener('scroll', onScroll);
    });
    return () => document.removeEventListener('scroll', onscroll)
  })
  

  return (
    <div className={`${styles.tableRow} table_row flex flex-row flex-nowrap overflow-auto`}>
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