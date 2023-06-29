import React from "react";
import styles from 'scss/components/ServicesHome.module.scss';
import Image from 'next/image';
import { sectionVariantsTop, sectionVariantsBottom } from './constants';

interface Props {
  data?: any;
}

function ServicesHome({
  data, pt = 'md', pb = 'md'
  }: Props): JSX.Element {
  
  const ptVariant = sectionVariantsTop[pt];
  const pBVariant = sectionVariantsBottom[pb];

  return (
    <section key="services-home-section" className={`services_section`}>
      <div className={`${styles.container} ${ptVariant} ${pBVariant}`}>
        {data.map((item, index, row) => (
          <div key={`services-home-wrap-${item.subtitle?.toString()}`} className={`${styles.wrap} ${item.sectionClassName} ${ index === 0 ? styles.firstRow: index === row.length - 1 ? styles.lastRow : styles.middleRow }`}>
            <div className={`${styles.row} flex ${item.reverSection ? 'flex-row-reverse':' flex-row'}`}>
              <div className={`${styles.column} basis-5/12`}>
                <div className={`${styles.subtitle} tag sub`} dangerouslySetInnerHTML={{ __html: item.subtitle?.toString() }}></div>
                <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: item.title?.toString() }}></h2>
                <p className={styles.text}>{item.text}</p>
                <ul className={`${styles.links} grid grid-cols-2`}>
                  {item.links?.map((link, linkIndex) => (
                    <li key={`services-home-link-${index}-${link.label}`} className={styles.cols}>
                      <a href={link.url}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="basis-2/12"></div>
              <div className={`${styles.column_img} basis-5/12`}>
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