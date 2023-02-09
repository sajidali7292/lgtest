import React from 'react';
import styles from 'scss/components/Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  logoImg?: any;
  phrase?: string;
  button?: any;
  rateText?: any;
  partner?: any;
  copyrightHolder?: string;
}

function Footer({
  logoImg,
  phrase,
  button,
  rateText,
  partner,
  copyrightHolder = 'Company Name' 
}: Props): JSX.Element {
  const year = new Date().getFullYear();
  console.log({logoImg});
  return (
    <footer className={`${styles.mainW}`}>
      <div className={`wrap_content wrap_content-extended`}>
        <div className={`${styles.wrapTop} flex flex-row flex-wrap`}>
          <div className={`basis-5/12`}>
            <Image src={logoImg.url} alt={logoImg.alt} className={`${styles.logoImg} w-100 object-contain`} width="216" height="60"/>
            <p className={`${styles.phraseFooter}`}>{phrase}</p>
            <Link href={button.url ?? ''}>
              <a className={`${styles.buttonFooter} button button-secondary rounded`} href={button.url} target={`${button.targetBlank ? '_blank':''}`}>{button.label}</a>
            </Link>
            <div className={`${styles.rated} flex flex-row flex-wrap`}>
              <Image src={rateText.image.url} alt={rateText.image.alt} className={`${styles.ratedImg} w-100 object-contain object-left`} width="45" height="45"/>
              <div className={`${styles.ratedText}`}>
                <h5 className={`${styles.ratedH}`}>{rateText.title}</h5>
                <p className={`${styles.ratedT}`}>{rateText.text}</p>
              </div>
            </div>
            <Image src={partner.url} alt={partner.alt} className={`w-100 object-contain`} width="150" height="145"/>
          </div>
          <div className={`basis-7/12`}>
            
          </div>
        </div>
        <div className={styles.wrapBottom}>
          <p>{`© ${year} ${copyrightHolder}. All rights reserved.`}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
