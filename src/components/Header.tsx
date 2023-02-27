import React from 'react';
import styles from 'scss/components/Header.module.scss';
import Link from 'next/link';
import { client, MenuLocationEnum } from 'client';
import Head from 'next/head';
import Image from 'next/image'

interface Props {
  title?: string;
  description?: string;
}


function Header({
  description,
}: Props): JSX.Element {
  const { menuItems } = client.useQuery()
  const links = menuItems({
    where: { location: MenuLocationEnum.PRIMARY },
  }).nodes;


  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  
  return (
    <header className={styles.header}>
      <Head>
        <title>
          {generalSettings.title} - {generalSettings.description}
        </title>
      </Head>
      <div className={styles.wrap}>
        <div className={styles['title-wrap']}>
          <p className={styles['site-title']}>
            <Link href="/">
              <Image
                className={styles.logo}
                src={process.env.NEXT_PUBLIC_WORDPRESS_URL + '/wp-content/uploads/2023/02/logo-1.svg'}
                alt="Image description"
                width={115}
                height={43}
              />
            </Link>
          </p>
          {generalSettings.description && <p className={styles.description}>{generalSettings.description}</p>}
        </div>
        <div className={styles.menu}>
          <ul>
            {links?.map((link) => (
              <li key={`${link.label}$-menu`}>
                <Link href={link.url ?? ''}>
                  <a href={link.url}>{link.label}</a>
                </Link>
              </li>
            ))}
            <li>
              <Link href="https://github.com/wpengine/faustjs">
                <a
                  className="button"
                  href="https://github.com/wpengine/faustjs">
                  GitHub
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
  
}

export default Header;
