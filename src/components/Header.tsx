import React, { useState, useEffect } from "react";
import styles from 'scss/components/Header.module.scss';
import Link from 'next/link';
import { client, MenuLocationEnum } from 'client';
import Head from 'next/head';
import Image from 'next/image';
import classnames from 'classnames'

interface Props {
  title?: string;
  description?: string;
  contentType?: any;
}


function Header({
  description,
  contentType
}: Props): JSX.Element {
  const [sticky, setSticky] = useState("");
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.getElementById('mainHeader');
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 450 ? 'is-sticky' : "";
    setSticky(stickyClass);
  };
  const classes = `${styles[sticky]}`;
  const isStickied = sticky ? true:false;


  const { useQuery } = client;
  const { menuItems, themeGeneralSettings } =  useQuery();

  const topLevelNavMenuTopLeftItems = useQuery().menuItems({
    where: { location: MenuLocationEnum.NAVIGATION_MENU_TOP_LEFT, parentDatabaseId: 0 }, first: 50
  })?.nodes;

  const topLevelNavMenuTopItems = useQuery().menuItems({
    where: { location: MenuLocationEnum.NAV_MENU_TOP, parentDatabaseId: 0 }, first: 50
  })?.nodes;

  const topLevelNavMenuLeftItems = useQuery().menuItems({
    where: { location: MenuLocationEnum.NAV_MENU_LEFT, parentDatabaseId: 0 }, first: 50
  })?.nodes;

  const topLevelNavMenuRightItems = useQuery().menuItems({
    where: { location: MenuLocationEnum.NAV_MENU_RIGHT, parentDatabaseId: 0 }, first: 50
  })?.nodes;

  const lgNumber = themeGeneralSettings.lgOptions.lgNumber;
  const lgLogo = themeGeneralSettings.lgOptions.lgLogo;
  const lgDashboardMobile = themeGeneralSettings.lgOptions.menuTopItems;

  const [showMobile, setShowMobile] = useState(false);

  const handleMobile = () => {
    setShowMobile(!showMobile);
  };

  const [selectedItem, setSelectedItem] = useState(null);

  function handleItemClick(item) {
    setSelectedItem(item === selectedItem ? null : item);
  }
  function perColumn(num1, num2){
    if( !num2 ){
      num2 = 1;
    }
    var itemNum = num1 + num2;
    return itemNum;
  }

  const generalSettings = useQuery().generalSettings;

  // Helper function to render menu items
  function renderMenuItems(
    menuItems,
    customClassName,
    customLiClasses = {},
    customFirstChildContent = {},
    customMenuConfig = {}, // Add this parameter
    mobClass='',
    defaultItemsPerColumn = 7,
    defaultTotalColumns = 4,
  ) {

    const renderColumnItems = (items, startIndex, itemsPerColumn, icon = false) => {
      return items.slice(startIndex, startIndex + itemsPerColumn).map((child, index) => (
        <li key={`${child.label}-${Math.random()}`}>
          {child.menuFields.newIcon &&
            <Image
              src={child?.menuFields?.newIcon?.mediaItemUrl}
              alt={`${child.menuFields.newIcon.altText ? child.menuFields.newIcon.altText:'Menu Icon'}`}
              width={35}
              height={35}
            />
          }
          <Link href={child.url ?? ''} passHref>
            <a href={child.url}>{child.label}</a>
          </Link>
          {icon &&(
            <i className={`dashicons dashicons-arrow-right-alt2 text-md`}></i>
          )}
        </li>
      ));
    };
  
    return (
      <ul className={`${customClassName ? styles[customClassName] : ""}`}>
        {menuItems?.map((link) => {
          if (!link.label) {
            return null;
          }
  
          const hasChildItems = link.childItems()?.nodes?.length > 0;
          const hasImgItem = link.menuFields.newIcon ? true:false;
          const customLiClass = customLiClasses[link.label] || "";
          const firstChildContent = customFirstChildContent[link.label] || null;
  
          // Update itemsPerColumn and totalColumns based on customMenuConfig
          const itemsPerColumn = customMenuConfig[link.label]?.itemsPerColumn || defaultItemsPerColumn;
          const totalColumns = customMenuConfig[link.label]?.totalColumns || defaultTotalColumns;

          var indexT = 0;
  
          return (
            <li
            key={`${link.label}-menu_${Math.random()}`}
            onClick={() => hasChildItems && handleItemClick(link.label+'_'+customClassName+'-'+mobClass)}
            className={`${link.label+'_'+customClassName+'-'+mobClass === selectedItem && hasChildItems ? `${styles.selected}` : ""} ${styles[customLiClass]} 
            ${hasChildItems ? styles.header_megamenu : styles.header_menu}
            ${link.menuFields.newIcon ? styles.has_img:''}`}
            >
              <Link href={`${hasChildItems ? '#':link.url}`} passHref>
                <a href={`${hasChildItems ? '#':link.url}`} 
                  className={`
                    ${link.cssClasses.toString().replaceAll(',',' ')}
                    ${link.cssClasses.includes("button") ? styles.button+' gap-2 rounded-md':''}
                    ${link.menuFields.isReversed ? styles.isReversed:''}
                  `}>
                  { hasImgItem &&
                    <Image src={link.menuFields.newIcon?.mediaItemUrl} alt={`${link.menuFields.newIcon.altText ? link.menuFields.newIcon.altText:'Icon'}`} width="15" height="15"/>
                  }
                  {link.label}
                  {hasChildItems &&
                    <i className={`dashicons dashicons-arrow-down-alt2 text-md`}></i>
                  }
                </a>
              </Link>
              {hasChildItems && (
                <ul className={`
                  ${styles.column_container}
                  ${link.menuFields.submenuIsReversed ? styles.isReversed:''}
                `}>
                  <div className={`container flex flex-row flex-wrap p-0`}>
                    {firstChildContent  && (
                      <li key={`firstChild-${Math.random()}`} className={`${styles.column} ${styles.firstChild} ${styles[customLiClass]}`} dangerouslySetInnerHTML={{__html: firstChildContent}}></li>
                    )}
                    {Array.from({ length: totalColumns }).map((_, index) => (
                      <div key={`wrapper-${index}__${Math.random()}`} className={`${styles.column} column-${index + 1} md:flex-1`}>
                        <div className={`${link.menuFields.haveTitle == null ? styles.subMenu+' '+styles.subNoTitle:''}`}>
                          {link.childItems({first: 100})?.nodes.slice( indexT,perColumn( indexT,itemsPerColumn ) ).map((submenu, index) => (
                            <>
                              {link.menuFields.haveTitle !== null ? (
                                <>
                                  <li key={`${submenu.label}-${Math.random()}`} className={`${styles.headerSub} headerI-${submenu.cssClasses.toString().replaceAll(',',' ')}`}>
                                    <Link href={submenu.url ?? ''} passHref>
                                      <a href={submenu.url} dangerouslySetInnerHTML={{__html: submenu.label}}></a>
                                    </Link>
                                  </li>
                                </>
                              ):(
                                <>
                                  <li key={`${submenu.label}-${Math.random()}`} className={`flex basis-full lg:basis-1/4`}>
                                      <Link href={submenu.url ?? ''} passHref>
                                        <a href={submenu.url}>
                                          <span dangerouslySetInnerHTML={{__html: submenu.label}} className={`${styles.contentDesc} ${styles.titleWrap}`}></span>
                                          {link.description &&
                                            <span dangerouslySetInnerHTML={{__html: submenu.description}} className={`${styles.contentDesc} ${styles.descrptionWrap}`}></span>
                                          }
                                        </a>
                                      </Link>
                                  </li>
                                </>
                              )}
                              {submenu.childItems()?.nodes?.length > 0 &&
                                <ul className={`${styles.subMenu}`}>
                                  {renderColumnItems(
                                    submenu.childItems({ first: 100 }).nodes,
                                    0,
                                    500, // Pass the updated itemsPerColumn value
                                    customClassName == 'topMenu' ? false:true
                                  )}
                                </ul>
                              }
                              
                              <span className="hidden">{indexT++}</span>
                            </>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className={`
                    ${styles.lastChild}
                    ${customClassName == 'topMenu' ? 'bg-semi_dark '+styles.topMenuBottomText : 'linear_bg-'+link.childItems({first: 1}).nodes[0].cssClasses.toString().replaceAll(',',' ')}
                  `}>
                    <div className={`container flex flex-row flex-wrap justify-between items-center`}>
                      {customClassName == 'topMenu' ? (
                        <>
                        <div className={`${styles.footer_chat}`}>
                          <a href={link.url} rel="follow">
                            {link.description}
                          </a>
                        </div>
                        <div className={`${styles.navNew_phone}`}>
                          <span className={`${styles.footer_phoneAgency}`}>
                            <Link href="/learn-how-we-can-grow-your-business/" passHref>
                              <a href="/learn-how-we-can-grow-your-business/">Contact sales</a>
                            </Link>
                          </span>
                        </div>
                        </>
                      ) : (
                        <>
                        <div className={`${styles.footer_chat}`}>
                          Not sure where to start? 
                          <Link href="/learn-how-we-can-grow-your-business/" passHref>
                            <a href="/learn-how-we-can-grow-your-business/" rel="follow">Chat with us</a>
                          </Link>
                        </div>
                        <div className={`${styles.navNew_phone}`}>
                          Free  consultation 
                          <span className={`${styles.footer_phoneAgency}`}>
                            <Image src={`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/06/Vector.png`} alt="Phone" width="18" height="18"/>
                            <a href={`tel:+1 ${lgNumber}`}>{lgNumber}</a>
                          </span>
                        </div>
                        </>
                      )}
                    </div>
                  </div>
                  
                </ul>
              )}
              
            </li>
          );
        })}
      </ul>
    );
  }
  

  const customMenuLiClasses = {
    'SEO Services': 'nav_seo_services',
    'SEO Software': 'nav_seo_software',
    'For Agencies': 'nav_for_agencies',
    'Industry Solutions': 'nav_industry_solutions'
  };

  const customMenuConfig = {
    'SEO Services': {
      itemsPerColumn: 2,
      totalColumns: 3,
    },
    'SEO Software': {
      itemsPerColumn: 1,
      totalColumns: 2,
    },
    'For Agencies': {
      itemsPerColumn: 6,
      totalColumns: 1,
    },
    'Industry Solutions': {
      itemsPerColumn: 1,
      totalColumns: 2,
    },
    'Resources': {
      itemsPerColumn: 1,
      totalColumns: 4,
    },
    'About': {
      itemsPerColumn: 8,
      totalColumns: 1,
    },
  };
  

  const customFirstChildContent = {
    'SEO Services': `
      <div class="managed_SEOBanner">
        <img class="lazyload entered lazyloaded" data-lazy-src="https://linkgraphstage.wpengine.com/wp-content/uploads/2022/11/Frame1.png" alt="frame" data-ll-status="loaded" src="https://linkgraphstage.wpengine.com/wp-content/uploads/2022/11/Frame1.png">
        <h5>Managed SEO</h5>
        <p class="navTxt">Reach your ranking goals with our comprehensive SEO management services.</p>
        <a href="/managed-seo-packages-and-campaigns/" data-wpel-link="external" rel="follow" class="button button-eigth rounded-md medium icon">View Pricing
          <span class="ico"><div><div><svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none" class="injected-svg" data-src="/wp-content/uploads/2023/02/arrow.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
          <path d="M11.993 6.11794C12.3348 5.77615 12.3348 5.22107 11.993 4.87927L7.61797 0.504272C7.27617 0.162476 6.72109 0.162476 6.3793 0.504272C6.0375 0.846069 6.0375 1.40115 6.3793 1.74294L9.26406 4.62498H0.875C0.391016 4.62498 0 5.01599 0 5.49998C0 5.98396 0.391016 6.37498 0.875 6.37498H9.26133L6.38203 9.25701C6.04023 9.5988 6.04023 10.1539 6.38203 10.4957C6.72383 10.8375 7.27891 10.8375 7.6207 10.4957L11.9957 6.12068L11.993 6.11794Z" fill="white"></path>
          </svg></div></div></span>
        </a>
      </div>
    `,
    'SEO Software': `
      <div class="managed_SEOSoftware">
        <h5>Award winning SEO Toolkit</h5>
        <p class="navTxt">Reach your ranking goals with our comprehensive SEO</p>
        <a href="https://dashboard.linkgraph.io/" class="button rounded-md medium icon" data-wpel-link="external" rel="follow">Sign up Now
          <span class="ico"><div><div><svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none" class="injected-svg" data-src="/wp-content/uploads/2023/02/arrow.svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="img">
          <path d="M11.993 6.11794C12.3348 5.77615 12.3348 5.22107 11.993 4.87927L7.61797 0.504272C7.27617 0.162476 6.72109 0.162476 6.3793 0.504272C6.0375 0.846069 6.0375 1.40115 6.3793 1.74294L9.26406 4.62498H0.875C0.391016 4.62498 0 5.01599 0 5.49998C0 5.98396 0.391016 6.37498 0.875 6.37498H9.26133L6.38203 9.25701C6.04023 9.5988 6.04023 10.1539 6.38203 10.4957C6.72383 10.8375 7.27891 10.8375 7.6207 10.4957L11.9957 6.12068L11.993 6.11794Z" fill="white"></path>
          </svg></div></div></span>
        </a>
      </div>
    `,
    'For Agencies': `
      <div id="playerContainerNav" class="navMenuVideo">
        <div id="agenciesPlayer"></div>
        <div id="forAgenciesImg" class="yTplayerThumbnail">
          <img class="lazyload entered lazyloaded" alt="video" data-ll-status="loaded" src="https://bplgtest.wpengine.com/wp-content/uploads/2023/06/Mask-group4.png">
        </div>
      </div>
    `,
  };
      
  
  return (
    <header id={`mainHeader`} className={`${styles.header} ${classes} ${styles.content_} ${styles[contentType]}`}>
      <Head>
        <title>
          {generalSettings.title} - {generalSettings.description}
        </title>
      </Head>
      <div className={`${styles.header_container} flex flex-col container`}>
        <div className={`${styles.header_row} ${styles.header_row_top} hidden lg:flex flex-row flex-wrap justify-between`}>
          <div className={`flex-1 flex ${styles.header__order_builder}`}>
            {renderMenuItems(topLevelNavMenuTopLeftItems, 'topMenu', customMenuLiClasses, customFirstChildContent, customMenuConfig)}
          </div>
          <div className="flex-none flex justify-center items-center">
            <div className={styles['title-wrap']}>
              <Link href="/" passHref>
                <a href="/" className="leading-none">
                  <Image
                    src={lgLogo.mediaItemUrl}
                    alt={`${lgLogo.altText ? lgLogo.altText:'LinkGraph Logo'}`} width="105" height="38"/>
                </a>
              </Link>
            </div>
          </div>
          <div className={`flex-1 flex justify-end ${styles.header__order_builder}`}>
            {renderMenuItems(topLevelNavMenuTopItems, 'topMenu', customMenuLiClasses, customFirstChildContent, customMenuConfig)}
          </div>
        </div>
        <div className={`${styles.header_row} ${styles.header_row_bottom} hidden lg:flex flex-row flex-wrap justify-between items-center`}>
          <div className={`${styles.header__menu_left} flex-1`}>
            {renderMenuItems(topLevelNavMenuLeftItems, 'leftMenu', customMenuLiClasses, customFirstChildContent, customMenuConfig)}
          </div>
          <div className={`${styles.numberWrap} flex-none flex justify-center`}>
            {isStickied ? (
              <>
                <div className={styles['title-wrap']}>
                  <Link href="/" passHref>
                    <a href="/" className="leading-none">
                      <Image
                        className={styles.logo}
                        src={lgLogo.mediaItemUrl}
                        alt={`${lgLogo.altText ? lgLogo.altText:'LinkGraph Logo'}`} width="105" height="38"/>
                    </a>
                  </Link>
                </div>
              </>
            ):(
              <>
                <p className={`${styles.numberP} text-center mb-0`}> 
                  <Link href={`tel:+1 ${lgNumber}`} passHref>
                    <a href={`tel:+1 ${lgNumber}`}>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/06/Vector.png`}
                        alt="Phone" width="18" height="18"/>
                      {lgNumber}
                    </a>
                  </Link> 
                </p>
              </>
            )}
            
          </div>
          <div className={`${styles.header__menu_right} flex-1`}>
            {renderMenuItems(topLevelNavMenuRightItems, 'rightMenu', customMenuLiClasses, customFirstChildContent, customMenuConfig)}
          </div>
        </div>
        <div className={`container ${styles.sectionMobile}`}>
          <div className={`flex lg:hidden flex-row flex-wrap justify-between items-center py-5 px-0 md:px-5`}>
            <div className={`flex flex-col basis-1/4`}>
              <Link href="/" passHref>
                <a href="/" className="leading-none">
                  <Image
                    className={styles.logo}
                    src={lgLogo.mediaItemUrl}
                    alt={`${lgLogo.altText ? lgLogo.altText:'LinkGraph Logo'}`} width="105" height="38"/>
                </a>
              </Link>
            </div>
            <div className={`flex flex-row flex-wrap justify-end items-center gap-10 basis-3/4 ${styles.menuMobTop}`}>
              {lgDashboardMobile &&
                lgDashboardMobile.map((itemMobile, index) => (
                  <Link key={itemMobile.linkMenu.title} href={`${itemMobile.linkMenu.url}`}>
                    <a href={`${itemMobile.linkMenu.url}`} target={`${itemMobile.linkMenu.target ? itemMobile.linkMenu.target:'_self'}`}
                      className={`
                        ${itemMobile.isButton ? 'button button-primary rounded-md':''}
                        ${itemMobile.showMobile ? 'block':'hidden sm:block '+styles.hideMobi}
                      `}
                    >
                      {itemMobile.linkMenu.title}
                    </a>
                  </Link>
                ))
              }
              <div className={`${styles.mobWrapper} ${showMobile ? styles.showMenuMob:''}`}>
                <button onClick={handleMobile}>
                  <i className={`dashicons dashicons-menu-alt3 text-2xl`}></i>
                </button>
                <div className={`fixed top-0 left-0 bg-white px-5 md:px-10 pt-16 pb-5 overflow-auto max-h-screen h-screen max-w-full w-full ${styles.menuMobWrap}`}>
                  <i onClick={handleMobile} className={`absolute top-5 right-2 md:right-9 dashicons dashicons-no-alt text-4xl`}></i>
                  <div className={`flex flex-col`}>
                    {renderMenuItems(topLevelNavMenuLeftItems, 'leftMenu', customMenuLiClasses, customFirstChildContent, customMenuConfig, 'Mob')}
                    {renderMenuItems(topLevelNavMenuRightItems, 'rightMenu', customMenuLiClasses, customFirstChildContent, customMenuConfig, 'Mob')}
                    {renderMenuItems(topLevelNavMenuTopItems, 'topMenu', customMenuLiClasses, customFirstChildContent, customMenuConfig, 'Mob')}
                    <div className={`${styles.buttonInside} flex flex-row flex-wrap justify-center items-center gap-x-6 gap-y-4 md:gap-y-8 mt-10`}>
                      {lgDashboardMobile &&
                        lgDashboardMobile.map((itemMobile, index) => (
                          <Link key={itemMobile.linkMenu.title} href={`${itemMobile.linkMenu.url}`}>
                            <a href={`${itemMobile.linkMenu.url}`} target={`${itemMobile.linkMenu.target ? itemMobile.linkMenu.target:'_self'}`}
                              className={`
                                ${itemMobile.isButton ? 'button button-primary rounded-md':''}
                              `}
                            >
                              {itemMobile.linkMenu.title}
                            </a>
                          </Link>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;