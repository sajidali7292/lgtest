import React from 'react';
import Image from 'next/image';
import styles from 'scss/components/CaseStudyHome.module.scss';
import Button from './UI/Button/index';
import BadgeRow from './UI/BadgeRow';
import { sectionVariantsTop, sectionVariantsBottom } from './constants';

interface Props {
  tag?: any;
  title?: string;
  text?: string;
  quote?: string;
  photo?: any;
  name?: string;
  position?: string;
  logo?: any;
  button?: any;
  badgeObj?: any;
  bgImage1?: any;
  bgColor1?: string;
  bgImage2?: any;
  bgColor2?: string;
  pt?: string;
  pb?: string;
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
  badgeObj,
  bgImage1,
  bgColor1,
  bgImage2,
  bgColor2,
  pt = 'md',
  pb = 'md',
}: Props): JSX.Element {
  const ptVariant = sectionVariantsTop[pt];
  const pBVariant = sectionVariantsBottom[pb];

  const bgStyle1 = 
    bgImage1 ? { 
      backgroundImage: `url(${bgImage1?.url})`,
      backgroundPosition: bgImage1?.position ? bgImage1.position:'center',
      backgroundSize: bgImage1?.size ? bgImage1.size:'cover',
      backgroundRepeat: bgImage1?.repeat ? bgImage1.repeat:'no-repeat'
    } : {};
  const bgStyle2 = 
    bgImage2 ? { 
      backgroundImage: `url(${bgImage2?.url})`,
      backgroundPosition: bgImage2?.position ? bgImage2.position:'center',
      backgroundSize: bgImage2?.size ? bgImage2.size:'cover',
      backgroundRepeat: bgImage2?.repeat ? bgImage2.repeat:'no-repeat'
    } : {};

  return (
    <section className={`${styles.trustC} ${ptVariant} ${pBVariant}`}>
      <div className={`container ${styles.containerCase}`}>
        <div className={`flex flex-row ${styles.rowCase}`}>
          <div className={`basis-full lg:basis-6/12 ${styles.bg_trustC} bg-${bgColor1}`} style={bgStyle1}>
            <div className={styles.trust_col1}>
              { tag && <div className={`${styles.int_subHead} tag tag_${tag.color}`}>{tag.name} {tag.span && <span>{tag.span}</span> }</div>}
              <h2 className={styles.int_title}>{title}</h2>
              <div className={styles.int_txt}>{text}</div>
              {button && (
                <Button buttonObj={button} />
              )}
              {badgeObj && (
                <BadgeRow badgeObj={badgeObj}/>
              )}
            </div>
          </div>
          <div className={`basis-full lg:basis-6/12 ${styles.bg_trustC} bg-${bgColor2}`} style={bgStyle2}>
            <div className={styles.trust_col2}>
              <div className={styles.trust_quote}>{quote}</div>
              { name &&
                <div className={`flex flex-row items-center ${styles.caseWrapper}`}>
                  <div className={`flex-none ${styles.photoCaseStudyHome}`}>
                    <Image className={`${styles.trust_cPhoto} object-contain object-right`}
                      src={photo.url} alt={photo.alt}
                      width={`${photo.width ? photo.width:'77'}`}
                      height={`${photo.height ? photo.height:'77'}`}/>
                  </div>
                  <div className={`basis-7/12 ${styles.txtCaseStudyHome}`}>
                    <div className={styles.trust_cName}>{name}</div>
                    <div className={styles.trust_cPosition}>{position}</div>
                    <div className={styles.trust_cLogo}>
                      <Image className={`object-contain object-right`}
                        src={logo.url} alt={logo.alt}
                        width={`${logo.width ? logo.width:'150'}`}
                        height={`${logo.height ? logo.height:'20'}`}/>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudyHome;
