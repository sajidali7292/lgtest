import { getNextStaticProps } from '@faustjs/next';
import Head from 'next/head';
import { GetStaticPropsContext } from 'next';
import React from 'react';
import { CTA, HeroHome, Posts, BasicText, GridImages, TestimonialsM } from 'components';
import styles from 'scss/pages/home.module.scss';
import { client } from 'client';

export default function Page() {
  const { usePosts } = client;
  const posts = usePosts({
    first: 6,
    where: {
      categoryName: 'uncategorized',
    },
  });

  return (
    <>
      <Head>
        <title>LinkGraph | Enterprise SEO and Link Building | #1 Search Agency of 2022</title>
      </Head>

      <main className="content">
        
        <HeroHome
          text="Award winning services and cutting-edge software to grow your traffic. Start with a FREE and Instant Site Audit."
          placeholder="Enter your website"
          buttonText="Analyze My Site"
          id={styles.home_hero}
        />
        
        <BasicText 
          pt="t6"
          pb="b3"
          descriptions={
            [
              'At LinkGraph, our goal is simple: help companies scale their organic traffic and revenue with white-glove <a class="hg1" href="/services/" data-wpel-link="internal">marketing services</a> and <a class="hg0" href="/searchatlas-seo-software/" data-wpel-link="internal">cutting-edge SEO software</a>. Our clients range from startups to enterprise companies in verticals like Saas, Healthcare, Ecommerce, and more. If you’re looking for a <a class="hg2" href="/case-studies-and-results/" data-wpel-link="internal">results-based agency</a> to scale your company to the next level, <a class="hg1" href="https://meetings.linkgraph.io/meetings/link-graph/linkgraph-initial-consultation" data-wpel-link="external" rel="follow">we should talk</a>.',
              'P.S. If you’re an agency, you’re in luck– our <a class="hg-0" href="/white-label-link-building/" data-wpel-link="internal">white label services and software</a> can help you 10x your ability to deliver for your clients.'
            ]
          }
        />
        
        <GridImages
          pt="t6"
          pb="b8"
          title="800+ organizations trust LinkGraph to drive growth"
          images={
            [
              {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2022/06/acm-blueprint/media/305/bd703d50-bb83-3d6e-91ec-cb40313ed16f.jpg`, alt: 'Sample1'},
              {url: '/images/headless_hero_background.jpg', alt: 'Sample2'},
              {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2022/06/acm-blueprint/media/305/bd703d50-bb83-3d6e-91ec-cb40313ed16f.jpg`, alt: 'Sample3'},
              {url: '/images/headless_hero_background.jpg', alt: 'Sample4'},
              {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2022/06/acm-blueprint/media/326/22dd1f93-438c-3c6f-ba29-10754a43b669.jpg`, alt: 'Sample5'},
              {url: '/images/headless_hero_background.jpg', alt: 'Sample6'},
              {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2022/06/acm-blueprint/media/305/bd703d50-bb83-3d6e-91ec-cb40313ed16f.jpg`, alt: 'Sample7'},
              {url: '/images/headless_hero_background.jpg', alt: 'Sample8'},
              {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2022/06/acm-blueprint/media/326/22dd1f93-438c-3c6f-ba29-10754a43b669.jpg`, alt: 'Sample9'},
              {url: '/images/headless_hero_background.jpg', alt: 'Sample10'},
              {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2022/06/acm-blueprint/media/305/bd703d50-bb83-3d6e-91ec-cb40313ed16f.jpg`, alt: 'Sample11'},
              {url: '/images/headless_hero_background.jpg', alt: 'Sample12'},
              {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2022/06/acm-blueprint/media/326/22dd1f93-438c-3c6f-ba29-10754a43b669.jpg`, alt: 'Sample13'},
            ]
          }
        />

        <TestimonialsM 
          pt="t3"
          pb="b8"
          testimonialsA={
            [
              {
                name: 'Brad Brenner', title: 'Co-Founder & CEO, Therapy Group of DC',
                message: 'Our organic search traffic has increased 53% since we started to work with LinkGraph and we have risen to the 3-5 position on high volume search terms. For other more niche search terms, we are routinely in the 1-2 spots.'
              }
            ]
          }
        />

        <section className={styles.explore}>
          <div className="wrap">
            <h2>Explore this Example Project</h2>
            <p>
              This headless example project uses{' '}
              <a href="https://nextjs.org/">Next.js</a>,{' '}
              <a href="https://graphql.org/">GraphQL</a>,{' '}
              <a href="https://gqty.dev">GQty</a> and the{' '}
              <a href="https://github.com/wpengine/faustjs">
                WP&nbsp;Engine headless packages
              </a>{' '}
              for WordPress integration. Dive in and edit this template at{' '}
              <code>src/pages/index.tsx</code> or discover more below.
            </p>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>Static Site Generation</h3>
                <p>
                  This example project uses Next.js&apos;{' '}
                  <a href="https://nextjs.org/docs/basic-features/pages#two-forms-of-pre-rendering">
                    Static Site Generation (SSR)
                  </a>
                  . SSG unlocks better performance by statically generating
                  pages that can then be cached by a CDN.
                </p>
              </div>

              <div className={styles.feature}>
                <h3>Incremental Static Regeneration</h3>
                <p>
                  This example project uses Next.js&apos;{' '}
                  <a href="https://vercel.com/docs/concepts/next.js/incremental-static-regeneration">
                    Incremental Static Regeneration (ISR)
                  </a>
                  . This allows you to revalidate static pages without having to
                  rebuild your entire site. By default, Faust.js sets a{' '}
                  <strong>
                    15 minute <code>revalidate</code> time per page.
                  </strong>{' '}
                  <br />
                  <a href="https://faustjs.org/docs/next/guides/ssr-ssg#setting-up-incremental-static-regeneration-isr">
                    Learn more about how Faust.js uses ISR.
                  </a>
                </p>
              </div>

              <div className={styles.feature}>
                <h3>Ready for Atlas</h3>
                <p>
                  <a href="https://wpengine.com/atlas">Atlas</a> is the complete
                  Headless WordPress Platform for absurdly fast dynamic sites.
                  One headless solution, one price, all in one place.
                  <br />
                </p>
              </div>
            </div>
            <div className={styles.features}>
              <div className={styles.feature}>
                <h3>Global Styles and Fonts</h3>
                <p>
                  Add styles to load on every page, such as typography and
                  layout rules, in <code>src/scss/main.scss</code>. The project
                  adds{' '}
                  <a href="https://necolas.github.io/normalize.css/">
                    normalize.css
                  </a>{' '}
                  in <code>src/pages/_app.tsx</code>. Google Fonts are enqueued
                  in <code>src/pages/_document.tsx</code>.
                </p>
              </div>

              <div className={styles.feature}>
                <h3>Hooks</h3>
                <p>
                  Fetch data from WordPress with <code>usePost</code>,{' '}
                  <code>usePosts</code>, <code>useGeneralSettings</code> and
                  other custom hooks. Use these hooks in your page templates to
                  pass data to custom components. See{' '}
                  <code>src/pages/index.tsx</code> for examples.
                </p>
              </div>

              <div className={styles.feature}>
                <h3>Components</h3>
                <p>
                  Add or edit components in the <code>src/components</code>{' '}
                  folder. Find component styles at{' '}
                  <code>src/scss/components</code>, which use{' '}
                  <a href="https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css">
                    CSS modules
                  </a>{' '}
                  to scope CSS to each component.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Posts
          posts={posts.nodes}
          heading="Latest Posts"
          intro="The Posts component in src/pages/index.tsx shows the latest six posts from the connected WordPress site."
          headingLevel="h2"
          postTitleLevel="h3"
          id={styles.post_list}
        />
        
        <CTA
          title="New subscribers get 30% off"
          description="Level up your SEO with our cutting-edge software suite."
          button = {{
            label: 'Get your Discount Now', url: 'https://dashboard.linkgraph.io/onboarding?promo_code=SEOPIONEERS',
            type: 'third', rounded: true, size: 'big', icon: true
          }}
          headingLevel="h2"
          pt="xl"
          pb="xl"
          colorBg="yellow"
          imageBg= {
            {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/New-subscribers.webp`, alt: '',
            position: '115% 50%', size: '821px', repeat: 'no-repeat'}
          }
        />
      </main>
    </>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
