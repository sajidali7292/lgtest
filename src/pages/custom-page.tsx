import { getNextStaticProps } from '@faustjs/next';
import { client } from 'client';
import { Hero } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import PricingTab from 'components/PricingTab';
import RenderHtml from 'react-native-render-html';

const source = {
  html: `<p style="color: purple; font-size: 2rem;">
  <span style="text-align: center; text-decoration-line: underline;">
    Hello world!
  </span>
</p>`
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
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
