import React from "react";
import styles from 'scss/components/ServicesHome.module.scss';

interface Link {
    label?: string;
    url?: string;
}

interface Props {
  subtitle?: React.ReactNode;
  title?: string;
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

    <div className={`${styles.wrap}`}>
      <div className={`${styles.row} flex flex-row`}>
        <div className={`${styles.column} basis-5/12`}>
          <div className={`${styles.subtitle} sub`} dangerouslySetInnerHTML={{ __html: subtitle?.toString() }}></div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
          <ul className={`${styles.links} flex flex-row`}>
            {links.map((link, index) => (
              <li key={`${index}-${link.label} basis-6/12`}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={`basis-2/12`}></div>
        <div className={`${styles.column} basis-5/12`}>
          <img src={imageUrl} alt="Service" />
        </div>
      </div>
    </div>
  ];

  return (
    <section className={`${styles.container} ${sectionClassName}`}>
      {elements.map((element, index) => (
        <React.Fragment key={`element-${index}`}>
          {element}
        </React.Fragment>
      ))}
    </section>

  );
};

export default ServicesHome;