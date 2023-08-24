import React, { useState, useEffect } from "react";
import styles from 'scss/components/ServicesHome.module.scss';
import Image from 'next/image';
import { sectionVariantsTop, sectionVariantsBottom } from './constants';

interface Props {
  data?: any;
  pt?: string;
  pb?: string;
}

function ServicesHome({
  data, pt = 'md', pb = 'md'
  }: Props): JSX.Element {
  
  const ptVariant = sectionVariantsTop[pt];
  const pBVariant = sectionVariantsBottom[pb];

  const [selectedItem, setSelectedItem] = useState(null);

  function handleItemClick(item) {
    setSelectedItem(item === selectedItem ? null : item);
  }

  return (
    <section key="services-home-section" className={`services_section`}>
      <div className={`container ${styles.container} ${ptVariant} ${pBVariant}`}>
        {data.map((item, index, row) => (
          <div key={`services-home-wrap-${item.subtitle?.toString()}`} className={`${styles.wrap} ${item.sectionClassName} ${ index === 0 ? styles.firstRow: index === row.length - 1 ? styles.lastRow : styles.middleRow }`}>
            <div className={`
                ${styles.subToggle}
                ${item.subtitle.toString() === selectedItem ? styles.selected : ""}
                md:hidden
              `}
              onClick={() => handleItemClick(item.subtitle.toString())}>
              <div className={`${styles.subtitle} tag sub`} dangerouslySetInnerHTML={{ __html: item.subtitle?.toString() }}></div>
            </div>
            <div className={`${styles.row} flex flex-wrap ${item.reverSection ? 'flex-row-reverse':'flex-row'}`}>
              <div className={`${styles.column} basis-full md:basis-1/2 lg:basis-5/12 md:pr-4 lg:pr-0`}>
                <div className={`${styles.subtitle} tag sub hidden md:block`} dangerouslySetInnerHTML={{ __html: item.subtitle?.toString() }}></div>
                <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: item.title?.toString() }}></h2>
                <p className={styles.text}>{item.text}</p>
                <ul className={`${styles.links} grid grid-cols-1 lg:grid-cols-2`}>
                  {item.links?.map((link, linkIndex) => (
                    <li key={`services-home-link-${index}-${link.title}`} className={styles.cols}>
                      <a href={link.url}>{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="basis-2/12 hidden lg:block"></div>
              <div className={`${styles.column_img} basis-full md:basis-1/2 lg:basis-5/12 md:pl-4 lg:pl-0`}>
                <Image className={`object-contain object-top`} src={item.image.url} alt={`${item.image.alt ? item.image.alt:item.title}`}
                  width={`${item.image.width ? item.image.width:'650'}`}
                  height={`${item.image.height ? item.image.height:'500'}`}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesHome;