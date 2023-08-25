import 'faust.config';
import { FaustProvider } from '@faustjs/next';
import 'normalize.css/normalize.css';
import React from 'react';
import 'scss/main.scss';
import { client } from 'client';
import type { AppProps } from 'next/app';
import { FooterNew, Header } from 'components';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import Head from 'next/head';



export default function MyApp({ Component, pageProps }: AppProps) {
  const { usePosts, useQuery } = client;

  const propsObj = pageProps?.__CLIENT_CACHE_PROP ? pageProps?.__CLIENT_CACHE_PROP:null;
  //console.log(propsObj);
  const urlObj = propsObj ? JSON.parse(propsObj).cache:null;
  //console.log(urlObj);
  const urlType = urlObj ? Object.values(urlObj).at(0).contentTypeName:'page';
  //console.log(urlType);
  //console.log( useQuery().contentType )

  return (
    <>
      <FaustProvider client={client} pageProps={pageProps}>
        <Header contentType={`${urlType ? urlType:'page'}`}/>
        <Component {...pageProps} />
        <FooterNew
          logoImg = {
            {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/footer-logo.svg`, alt: 'test'}
          }
          phrase = 'Link your Google Search Console account and get smarter SEO insights in 1 easy click.'
          button={{
            linkSingle:{title: 'Get a Proposal', url: 'https://dashboard.linkgraph.io/order-builder'},
            size: 'medium', type: 'secondary'
          }}
          rateText = {{
            image: {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/star.webp`, alt: ''},
            title: '5 star rated &', text: 'Trusted by 100+ companies'
          }}
          partner = {{url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/Partner-RGB.webp`, alt: ''}}
          logoPink ={
            {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/logo.svg`, alt: 'test'}
          }
          socialLinks={[
            {url: 'https://www.facebook.com/linkgraph.io/', ico: 'dashicons-facebook-alt'},
            {url: 'https://www.instagram.com/linkgraph.io/', ico: 'dashicons-instagram'},
            {url: 'https://www.linkedin.com/company/linkgraph-io', ico: 'dashicons-linkedin'},
            {url: 'https://twitter.com/Linkgraphio', ico: 'dashicons-twitter'},
            {url: 'https://www.youtube.com/channel/UCgEUbExBbcVEv8cj-EGD4hA', ico: 'dashicons-youtube'}
          ]}
          locationsLG= 'New York • Las Vegas • Bogotá • Belgrade'
        />

        
        <link rel="stylesheet" href="https://unpkg.com/@icon/dashicons/dashicons.css" />
      </FaustProvider>
    </>
  );
}