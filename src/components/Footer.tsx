import React from 'react';
import styles from 'scss/components/Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { client } from 'client';


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

  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  return (
    <footer className={`${styles.mainW}`}>
      <div className={`wrap_content wrap_content-extended`}>
        <div className={styles.wrapBottom}>
          <p>{`© ${year} ${copyrightHolder=generalSettings.title}. All rights reserved.`}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
