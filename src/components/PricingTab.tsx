import React, { useState } from 'react';
import styles from 'scss/components/PricingTab.module.scss';
import PricingCard from './PricingCard';
import PricingTable from './PricingTable';
import { backgroundColors, sectionVariantsTop, sectionVariantsBottom } from './constants';

interface Props {
  id?: string;
  bgImage?: string;
  children?: React.ReactNode;
  isCentered?: boolean;
  tabs?: Array<any>;
  tabOpenedID?: string;
  pt?: string;
  pb?: string;
}

function PricingTab({
  id,
  bgImage,
  children,
  isCentered,
  tabs,
  tabOpenedID = '1',
  pt = 'md',
  pb = 'md',
}: Props): JSX.Element {
  const [activeTab, setActiveTab] = useState(tabOpenedID); // set the initial active tab to 'managedSeo'
  
  const ptVariant = sectionVariantsTop[pt];
  const pBVariant = sectionVariantsBottom[pb];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };  

  return (
    <section
      {...(id && { id })}
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}
      className={`${styles.hero} ${isCentered ? 'text-center':''} wrap_content wrap_content-extended ${ptVariant} ${pBVariant}`}
    >
      <div className={`${styles.wrap} flex flex-row flex-wrap overflow-hidden`}>

        <div className={`${styles.tabTitles} wrap_content md:order-2 lg:order-1`}>
          {tabs.map((tab) => (
            <div
            key={`${tab.id}-title`}
            style={{ display: tab.id === activeTab ? 'block' : 'none' }}
            className={styles.tabTitle}
            >
              <h2>{tab.planTitle}</h2>
              <p>{tab.content}</p>
            </div>
          ))}
        </div>

        <div className={`${styles.intro} wrap_content wrap_content-small md:order-1 lg:order-2`}>
          <div className={`${styles.tabs} flex flex-row flex-wrap justify-center`}>
            {tabs.map((tab) => (
              <button
                key={`${tab.id}-button`}
                className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''} w-1/2 md:w-auto`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className={`${styles.tablesTab} order-3 w-full`}>
          {tabs.map((tab) => (
            <div key={`${tab.id}-content`} style={{ display: tab.id === activeTab ? 'block' : 'none' }} className={`${styles.contentTab}`}>
              {tab.pricingModule == 'table' ? (
                <PricingTable servicesData={tab.tablePricing} isScrolled={tab.pricingScrolled} />
              ) : tab.pricingModule == 'card' ? (
                <PricingCard servicesData={tab.tablePricing}/>
              ) : (<div></div>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingTab;
