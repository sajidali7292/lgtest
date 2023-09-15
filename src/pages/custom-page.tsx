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


import React from 'react';
import { View, Text } from 'react-native';

// Define a function
const myFunction = () => {
  // Your JavaScript code here
  // Create a style element and set its content
  const styleElement = document.createElement('style');
  styleElement.innerHTML = 'body { display: none; }';

  // Append the style element to the document's head
  document.head.appendChild(styleElement);
};

const MyComponent = () => {
  // Call the function
  myFunction();

  return (
    <View>
      <Text>Hello, world!</Text>
    </View>
  );
};

export default MyComponent;
