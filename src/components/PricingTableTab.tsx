import React, { useState } from 'react';
import styles from 'scss/components/PricingTableTab.module.scss';

interface Props {
  id?: string;
  bgImage?: string;
  children?: React.ReactNode;
  tab?: Tab[];
}

interface Tab {
  id: string;
  label: string;
  planTitle: string;
  content: string;
}

function PricingTableTab({
  id,
  bgImage,
  children,
  tab,
}: Props): JSX.Element {
  const [activeTab, setActiveTab] = useState('managedSeo'); // set the initial active tab to 'managedSeo'

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };  

  return (
    <section
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...(id && { id })}
      style={{ backgroundImage: bgImage ? `url(${bgImage})` : 'none' }}
      className={styles.hero}
    >
      <div className={styles.wrap}>
        {tab.map((tab) => (
          <h2
            key={tab.id}
            style={{ display: tab.id === activeTab ? 'block' : 'none'}}
          >
            {tab.planTitle}
          </h2>
        ))}
        <div className={styles.intro}>
          <div className={styles.tabContent}>
            {/* Render different content based on the active tab */}
            {tab.map((tab) => (
              <div
                key={tab.id}
                style={{ display: tab.id === activeTab ? 'block' : 'none' }}
              >
                <p>{tab.content}</p>
              </div>
            ))}
          </div>
          <div className={`${styles.tabs} flex flex-row`}>
            {tab.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tab} ${
                  activeTab === tab.id ? styles.active : ''
                } basis-3/12`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingTableTab;
