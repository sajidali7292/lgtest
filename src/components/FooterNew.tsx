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
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const { menuItems } =  useQuery();
  const { menu } = useQuery();
  const Footercolumn1 = menuItems({
    where: { location: MenuLocationEnum.FOOTER },
  }).nodes;
  const Footercolumn2 = menu({ id: 'dGVybToxNw==' })?.menuItems()?.nodes;
  const Footercolumn3 = menuItems({
    where: { location: MenuLocationEnum.FOOTER_3 }
  })?.nodes;
  const year = new Date().getFullYear();
  // console.log({linksTest});
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
                {Footercolumn1 && <MenuBuilder menu={Footercolumn1} keyI='f1' classMenu={styles.menu_footer} classAParent={styles.FParentLink} classAChild={styles.FCLink} />}
              </div>
              <div className={`basis-4/12`}>
                {Footercolumn2 && <MenuBuilder menu={Footercolumn2} keyI='f1' classMenu={styles.menu_footer} classAParent={styles.FParentLink} classAChild={styles.FCLink} />}
              </div>
              <div className={`basis-4/12`}>
                {Footercolumn3 && <MenuBuilder menu={Footercolumn3} keyI='f1' classMenu={styles.menu_footer} classAParent={styles.FParentLink} classAChild={styles.FCLink} />}
                
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.wrapBottom} flex flex-row flex-wrap`}>
          <div className="basis-1/2">
            <Image src={logoPink.url} alt={logoPink.alt} className={`${styles.logoPink} w-100 object-contain`} width="120" height="28"/>
            <p className={styles.copyright}
            dangerouslySetInnerHTML={{ __html: `© All copyrights reserved, ${copyrightHolder=generalSettings.title} ${year}. <a href="/terms-of-service/" style="text-decoration: underline;"  data-wpel-link="internal">Terms of Service</a>. <a href="/privacy-policy/" style="text-decoration: underline;" data-wpel-link="internal">Privacy policy</a>` }}></p>
          </div>
          <div className="basis-1/2">
            <ul className={`${styles.list_social} flex flex-wrap flex-row justify-end align-middle items-center`}>
              {socialLinks?.map((socialLink, index) => { 
                return (
                  <li key={`icons-${index}`}><a href={socialLink.url}><i className={`dashicons ${socialLink.ico} text-2xl ml-1.5 `}></i></a></li>
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