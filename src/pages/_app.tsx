import 'faust.config';
import { FaustProvider } from '@faustjs/next';
import 'normalize.css/normalize.css';
import React from 'react';
import 'scss/main.scss';
import { client } from 'client';
import type { AppProps } from 'next/app';
import { FooterNew, Header } from 'components';



export default function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <FaustProvider client={client} pageProps={pageProps}>
        <Header/>
        <Component {...pageProps} />
        <FooterNew 
        logoImg = {
          {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/footer-logo.svg`, alt: 'test'}
        }
        
        phrase = 'Link your Google Search Console account and get smarter SEO insights in 1 easy click.'
        button = {{
          label: 'Get started for free', url: 'https://api.searchatlas.com/account/google/oauth/start',
          targetBlank: true
        }}
        rateText = {{
          image: {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/star.webp`, alt: ''},
          title: '5 star rated &', text: 'Trusted by 100+ companies'
        }}
        partner = {{url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/Partner-RGB.webp`, alt: ''}}
        />
      </FaustProvider>
    </>
  );
}