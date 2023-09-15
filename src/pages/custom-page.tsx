import { getNextStaticProps } from '@faustjs/next';
import { client } from 'client';
import { Hero } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import PricingTab from 'components/PricingTab';

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const faqToggle = useQuery().themeGeneralSettings.lgOptions.tabs;

  return (
    <>

      <Hero title="Custom Page" />
      <PricingTab
        pt = 'md'
        pb = 'md'
        version={'v5'}
        title={faqToggle.title}
        sTitle={faqToggle.subtitle}
        isOutside={faqToggle.titleOutside}
        isCenter={faqToggle.titleCenter}
        isInverted={faqToggle.titleReversed}
        bgC={'faqToggle.backgroundContent'}
        tabs={faqToggle.tabsContent}
      />

    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}

import React, { useRef } from 'react';
import { WebView } from 'react-native-webview';

const MyComponent = () => {
  const webViewRef = useRef<WebView | null>(null);

  const styleContent = `
    body {
      background-color: lightblue;
    }
    h1 {
      color: red;
    }
  `;

  const updateStyle = () => {
    const newStyleContent = `
      body {
        background-color: green;
      }
    `;

    // Inject JavaScript to update the style
    const script = `
      const styleElement = document.createElement('style');
      styleElement.textContent = \`${newStyleContent}\`;
      document.head.appendChild(styleElement);
    `;

    webViewRef.current?.injectJavaScript(script);
  };

  return (
    <WebView
      ref={webViewRef}
      originWhitelist={['*']}
      source={{ html: `<html><body><h1>Hello World</h1></body></html>` }}
    />
    <button onPress={updateStyle}>Change Style</button>
  );
};

export default MyComponent;
