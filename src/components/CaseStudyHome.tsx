import React from 'react';
import styles from 'scss/components/CaseStudyHome.module.scss';
import Button from './UI/Button/index';

interface Props {
  tag?: string;
  title?: string;
  text?: string;
  quote?: string;
  photo?: {
    url?: string;
    alt?: string;
  };
  name?: string;
  position?: string;
  logo?: {
    url?: string;
    alt?: string;
  };
  button?: any;
}

function CaseStudyHome({
  tag,
  title,
  text,
  quote,
  photo,
  name,
  position,
  logo,
  button,
}: Props): JSX.Element {
  return (
    <section className={styles.trust}>
      <div className="container">
        <div className="flex flex-row">
          <div className={`basis-full lg:basis-6/12 ${styles.bg_trustG}`}>
            <div className={styles.trust_col1}>
              <div className={styles.int_subHead}>{tag}</div>
              <h2 className={styles.int_title}>{title}</h2>
              <div className={styles.int_txt}>{text}</div>
              {button && (
                  <Button buttonObj={button} />
                )}
              <div className={styles.bottom_txt}>
                Best B2B SEO Campaign 2021 - <span><img src="/wp-content/uploads/2022/03/Group2.svg" alt="" /></span> The Drum Awards
              </div>
            </div>
          </div>
          <div className={`basis-full lg:basis-6/12 ${styles.bt_trustY}`}>
            <div className={styles.trust_col2}>
              <div className={styles.trust_quote}>{quote}</div>
              <div className="flex flex-row">
                <div className="basis-6/12 photoCaseStudyHome">
                  <img src={photo.url} alt={photo.alt} className={styles.trust_cPhoto} />
                </div>
                <div className="basis-6/12 txtCaseStudyHome">
                  <div className={styles.trust_cName}>{name}</div>
                  <div className={styles.trust_cPosition}>{position}</div>
                  <div className={styles.trust_cLogo}>
                    <img src={logo.url} alt={logo.alt} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudyHome;
