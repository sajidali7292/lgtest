import { getNextStaticProps } from '@faustjs/next';
import { client } from 'client';
import { Hero } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import PricingTab from 'components/PricingTab';
import RenderHtml from 'react-native-render-html';

const MyComponent = () => {
  const customStyle = `
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f0f0f0;
    }
    h1 {
      color: #333;
    }
  `
};

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
      <RenderHtml
        source={source}
      />
      <View>
        <style>{customStyle}</style>
        <Text>Hello, World!</Text>
        <Text>This is some text with custom styles applied.</Text>
      </View>
    </>

  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
