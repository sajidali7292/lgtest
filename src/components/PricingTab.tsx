import React, { useState } from 'react';
import styles from 'scss/components/PricingTab.module.scss';
import PricingCard from './PricingCard';
import PricingTable from './PricingTable';
import ToggleButton from './UI/ToggleButton'
import { backgroundColors, sectionVariantsTop, sectionVariantsBottom } from './constants';

interface Props {
  id?: string;
  bgImage?: string;
  children?: React.ReactNode;
  isCentered?: boolean;
  tabs?: Array<any>;
  version?: string;
  title?: string;
  sTitle?: string;
  isInverted?: boolean;
  isOutside?: boolean;
  isCenter?: boolean;
  bgC?: string;
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
  version,
  title,
  sTitle,
  isInverted,
  isOutside,
  isCenter,
  bgC,
  tabOpenedID = '1',
  pt = 'md',
  pb = 'md',
}: Props): JSX.Element {
  const [activeTab, setActiveTab] = useState(tabs[0].label); // set the initial active tab to 'managedSeo'

  const ptVariant = sectionVariantsTop[pt];
  const pBVariant = sectionVariantsBottom[pb];
  const bgVariant = backgroundColors[bgC]

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section
      {...(id && { id })}
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}
      className={`${styles.hero} ${isCentered ? 'text-center':''}`}
    >
      <div className={`
      ${styles.wrap}
      flex flex-row flex-wrap overflow-hidden
      ${version == 'v3' || version == 'v4' ? 'wrap_content wrap_content-extended':''}
      ${ptVariant} ${pBVariant} ${styles[version]}
      `}>

        {isOutside &&
          <div
          className={`
          flex flex-wrap basis-full
          ${isInverted ? 'flex-col-reverse':'flex-col'}
          ${isCenter ? 'text-center':''}
          ${styles.headingsWrap}
          `}>
            {title && <h2 dangerouslySetInnerHTML={{__html: title}}></h2>}
            {sTitle && <h3 dangerouslySetInnerHTML={{__html: sTitle}}></h3>}
          </div>
        }
        {tabs && (
          tabs.map((tab, index) => (
            tab.title && (
              <div
              key={tab.title}
              style={{ display: tab.label === activeTab ? 'block' : 'none' }}
              className={`
              ${styles.tabTitles}
              wrap_content md:order-2 lg:order-1
              text-center
              ${version == 'v3' || version == 'v4' ? 'basis-full':''}
              `}>
                  <div
                  key={`${index}-title-${tab.label}`}
                  className={styles.tabTitle}
                  >
                    {tab.title && <h2>{tab.title}</h2>}
                    {tab.subtitle && <h3>{tab.subtitle}</h3>}
                  </div>
              </div>
            )
          ))
        )}

        <div className={`
        ${styles.intro}
        ${version == 'v3' || version == 'v4' ? 'w-full md:w-1/4':'wrap_content'}
        md:order-1 lg:order-2
        `}>
          {!isOutside &&
            <div
            className={`
            flex
            ${isInverted ? 'flex-col-reverse':'flex-col'}
            ${isCenter ? 'text-center':''}
            ${styles.headingsWrap}
            `}>
              {title && <h2 dangerouslySetInnerHTML={{__html: title}}></h2>}
              {sTitle && <h3 dangerouslySetInnerHTML={{__html: sTitle}}></h3>}
            </div>
          }

          <div className={`${styles.tabs}
          flex gap-0 md:gap-5
          ${version == 'v3' || version == 'v4' ? 'flex-row md:flex-col flex-nowrap overflow-auto justify-start md:justify-center':' flex-row flex-wrap lg:flex-nowrap justify-center'}
          `}>
            {tabs.map((tab, index) => (
              <button
                key={`${tab.id}-button`}
                className={`
                ${styles.tab} ${activeTab === tab.label ? styles.active : ''}
                ${version == 'v3' || version == 'v4' ? 'flex-shrink-0 md:flex-shrink':''}
                w-1/2 md:w-auto
                ${tab.typeModule == 'toggle' ? styles.btnToggle:''}
                `}
                onClick={() => handleTabClick(tab.label)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div itemscope="" itemtype="https://schema.org/FAQPage" className={`${styles.tablesTab}
        order-3 w-full container
        ${bgVariant}
        ${version == 'v3' || version == 'v4' ? 'w-full md:w-3/4':'py-5 md:pt-10 md:pb-20'}
        `}>
          {tabs.map((tab, index) => (
            <div key={`${tab.id}-content`} style={{ display: tab.label === activeTab ? 'block' : 'none' }} className={`${styles.contentTab}`}>
              {tab.typeModule == 'table' ? (
                <PricingTable servicesData={tab.tablePricing} isScrolled={tab.pricingScrolled} />
              ) : tab.typeModule == 'card' ? (
                <PricingCard servicesData={tab.tablePricing}/>
              ) : tab.typeModule == 'toggle' ? (
                <ToggleButton toggles={tab.faqToggles} version={tab.faqVersion} isColumns={tab.faqIsTwo}/>
              ) : (<div></div>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingTab;
