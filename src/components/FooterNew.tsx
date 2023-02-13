import React from 'react';
import styles from 'scss/components/Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import MenuBuilder from './Menus/MenuBuilder';
import { client, MenuLocationEnum } from 'client';

interface Props {
  logoImg?: any;
  phrase?: string;
  button?: any;
  rateText?: any;
  partner?: any;
  logoPink?: any;
  socialLinks?: any;
  locationsLG?: string;
  copyrightHolder?: string;
}

function Footer({
  logoImg,
  phrase,
  button,
  rateText,
  partner,
  logoPink,
  socialLinks,
  locationsLG,
  copyrightHolder = 'Company Name'
}: Props): JSX.Element {
  const { menuItems } = client.useQuery()
  const links = menuItems({
    where: { location: MenuLocationEnum.FOOTER },
  }).nodes;
  const year = new Date().getFullYear();
  // console.log({links1});
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
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
            <div className={`flex flex-row flex-wrap`}>
              <div className={`basis-4/12`}>
                <MenuBuilder menu={links} keyI='f1' classMenu={styles.menu_footer} classAParent={styles.FParentLink} classAChild={styles.FCLink} />
              </div>
              <div className={`basis-4/12`}>
                <MenuBuilder menu={links} keyI='f2' classMenu={styles.menu_footer} classAParent={styles.FParentLink} classAChild={styles.FCLink} />
              </div>
              <div className={`basis-4/12`}>
                <MenuBuilder menu={links} keyI='f3' classMenu={styles.menu_footer} classAParent={styles.FParentLink} classAChild={styles.FCLink} />
                
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.wrapBottom} flex flex-row flex-wrap`}>
          <div className="basis-1/2">
            <Image src={logoPink.url} alt={logoPink.alt} className={`${styles.logoPink} w-100 object-contain`} width="120" height="28"/>
            <p className={styles.copyright}>{`© All copyrights reserved, ${copyrightHolder=generalSettings.title} ${year}.`}</p>
          </div>
          <div className="basis-1/2">
            <ul className={`${styles.list_social} flex flex-wrap flex-row justify-end align-middle items-center`}>
              {socialLinks?.map((socialLink, index) => { 
                return (
                  <li key={`icons-${index}`}><a href={socialLink.url}><i className={`dashicons ${socialLink.ico} text-2xl ml-2 `}></i></a></li>
                );
              })}
            </ul>
            <p className={`${styles.loc} text-right`}>{locationsLG}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
