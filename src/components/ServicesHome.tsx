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
  subtitle,
  title,
  text,
  links,
  imageUrl,
  sectionClassName = '',
}: Props): JSX.Element {

  const elements = [  
    <div key="services-home-wrap" className={`${styles.wrap}`}>
      <div key="services-home-row" className={`${styles.row} flex flex-row`}>
        <div key="services-home-column1" className={`${styles.column} basis-5/12`}>
          <div key="services-home-subtitle" className={`${styles.subtitle} sub`} dangerouslySetInnerHTML={{ __html: subtitle?.toString() }}></div>
          <h2 key="services-home-title" className={styles.title} dangerouslySetInnerHTML={{ __html: title?.toString() }}></h2>
          <p key="services-home-text" className={styles.text}>{text}</p>
          <ul key="services-home-links" className={`${styles.links} grid grid-cols-2`}>
            {links.map((link, index) => (
              <li key={`services-home-link-${index}-${link.label}`} className={styles.cols}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div key="services-home-column2" className="basis-2/12"></div>
        <div key="services-home-column3" className={`${styles.column_img} basis-5/12`}>
          <img src={imageUrl} alt="Service" />
        </div>
      </div>
    </div>
  ];

  return (
    <section key="services-home-section" className={`${styles.container} ${sectionClassName}`}>
      {elements.map((element, index) => (
        <React.Fragment key={`services-home-element-${index}`}>
          {element}
        </React.Fragment>
      ))}
    </section>

  );
};

export default ServicesHome;