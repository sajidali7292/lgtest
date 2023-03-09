import React from "react";
import styles from 'scss/components/ServicesHome.module.scss';

interface Link {
    label?: string;
    url?: string;
}

interface Props {
  subtitle?: React.ReactNode;
  title?: React.ReactNode;
  text?: string;
  links?: Array<Link>;
  imageUrl?: string;
  sectionClassName?: string;
}

function ServicesHome({
  data = [],
}: { data: Props[] }): JSX.Element {

  return (
    <section key="services-home-section" className={`${styles.container}`}>
      {data.map((item, index) => (
        <React.Fragment key={`services-home-element-${index}`}>
          <div key="services-home-wrap" className={`${styles.wrap} ${item.sectionClassName}`}>
            <div key="services-home-row" className={`${styles.row} flex flex-row`}>
              <div key="services-home-column1" className={`${styles.column} basis-5/12`}>
                <div key="services-home-subtitle" className={`${styles.subtitle} sub`} dangerouslySetInnerHTML={{ __html: item.subtitle?.toString() }}></div>
                <h2 key="services-home-title" className={styles.title} dangerouslySetInnerHTML={{ __html: item.title?.toString() }}></h2>
                <p key="services-home-text" className={styles.text}>{item.text}</p>
                <ul key="services-home-links" className={`${styles.links} grid grid-cols-2`}>
                  {item.links?.map((link, linkIndex) => (
                    <li key={`services-home-link-${index}-${link.label}`} className={styles.cols}>
                      <a href={link.url}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div key="services-home-column2" className="basis-2/12"></div>
              <div key="services-home-column3" className={`${styles.column_img} basis-5/12`}>
                <img src={item.imageUrl} alt="Service" />
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default ServicesHome;