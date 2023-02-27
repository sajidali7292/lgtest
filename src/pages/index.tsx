import { getNextStaticProps } from '@faustjs/next';
import Head from 'next/head';
import { GetStaticPropsContext } from 'next';
import React from 'react';
import { CTA, HeroHome, DataDriven, BasicText, GridImages, TestimonialsM, CountingNumbers, ServicesHome } from 'components';
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

  const awards = [
    {
      text: 'Fastest Growing Agencies 2022',
      image: '/wp-content/uploads/2023/02/newlogo.svg'
    },
    {
      text: 'Fastest Growing US Companies',
      image: '/wp-content/uploads/2023/02/Inc-5000-logo.webp'
    },
    {
      text: 'Best Start-Up Agency',
      image: '/wp-content/uploads/2023/02/Us-search-awards-color-logo.webp'
    },
    {
      text: '#1 Product of the Day',
      image: '/wp-content/uploads/2023/02/Product-hunt-colored-logo.webp'
    },
    {
      text: 'Top B2B SEO Companies',
      image: '/wp-content/uploads/2023/02/clutch-color-log.webp'
    },
    {
      text: 'Best B2B Campaign',
      image: '/wp-content/uploads/2023/02/The-drum-awards-color-logo.webp'
    },
    // Add more awards as needed
  ];

  const servicesData = [
    {
      sectionClassName: "services_1",
      subtitle: `<span>01.</span> Authority`,
      title: "Authoritative Backlinks at Scale",
      text: "Backlinks to your website are essential to ranking well in Google. We create original content to earn you high-quality backlinks from reputable, trustworthy publications.",
      links: [
        { label: "Link Building Services", url: "#" },
        { label: "White Label Link Building", url: "#" },
        { label: "SEO Reputation Management", url: "#" },
      ],
      imageUrl: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/Group-34442.webp`,
    },
    {
      sectionClassName: "services_2",
      subtitle: "<span>02.</span> Content",
      title: `High-Quality,</br> Top-Ranking Content`,
      text: "Our 50+ editorial team of SEO professionals can earn your brand more keyword rankings, higher positions, and more organic traffic opportunities. We know what it takes to rank for high-value keywords in your industry.",
      links: [
        { label: "SEO Content Strategy", url: "#" },
        { label: "On Page SEO", url: "#" },
      ],
      imageUrl: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/Group-34381.webp`,
    },
    {
      sectionClassName: "services_3",
      subtitle: "<span>03.</span> Page Experience",
      title: `Fast & Responsive</br> Technical Performance`,
      text: "Our technical SEO team optimizes the backend of your web pages for improved page speed, load times, and mobile-usability. Then, our CRO team ensures that your web pages turn organic traffic into conversions.",
      links: [
        { label: "Technical SEO Services", url: "#" },
        { label: "Conversion Rate Optimization", url: "#" },
      ],
      imageUrl: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/Group-35461.webp`,
    },
    {
      sectionClassName: "services_4",
      subtitle: "<span>04.</span> Industry",
      title: `Industry-Specific Approach to Outrank Competitors`,
      text: "We bring an industry-specific approach to every optimization we make so Google sees your brand as a leading authority in your industry. Outrank your competitors in less time with our targeted, data-driven approach.",
      links: [
        { label: "Enterprise SEO", url: "#" },
        { label: "Ecommerce SEO", url: "#" },
        { label: "SaaS Marketing", url: "#" },
        { label: "White Label SEO", url: "#" },
        { label: "BigCommerce SEO", url: "#" },
        { label: "Local SEO", url: "#" },
      ],
      imageUrl: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/Group-34611.webp`,
    },

    // Add more data as needed
  ];

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
          awardsTitle="Awards & Recognition"
          awards={awards}
        />
        
        <BasicText 
          pt="t6"
          pb="b3"
          descriptions={
            [
              'At LinkGraph, our goal is simple: help companies scale their organic traffic and revenue with white-glove <a class="hg1" href="/services/" data-wpel-link="internal">marketing services</a> and <a class="hg0" href="/searchatlas-seo-software/" data-wpel-link="internal">cutting-edge SEO software</a>. Our clients range from startups to enterprise companies in verticals like Saas, Healthcare, Ecommerce, and more. If you’re looking for a <a class="hg2" href="/case-studies-and-results/" data-wpel-link="internal">results-based agency</a> to scale your company to the next level, <a class="hg1" href="https://meetings.linkgraph.io/meetings/link-graph/linkgraph-initial-consultation" data-wpel-link="external" rel="follow">we should talk</a>.',
              'P.S. If you’re an agency, you’re in luck– our <a class="hg0" href="/white-label-link-building/" data-wpel-link="internal">white label services and software</a> can help you 10x your ability to deliver for your clients.'
            ]
          }
        />
        
        <GridImages
          pt="t6"
          pb="b8"
          title="800+ organizations trust LinkGraph to drive growth"
          images={
            [
              {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/Zynga_logo.webp`, alt: 'Zynga'},
              {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/IOC.webp`, alt: 'IOC'},
              {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/Shutterfly.webp`, alt: 'Shutterfly'},
              {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/P_G.webp`, alt: 'P&G'},
              {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/Verkada.webp`, alt: 'Verkada'},
              {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/serenalily.webp`, alt: 'Serena&Lily'},
              {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/gritgroup.webp`, alt: 'GritGroup'},
              {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/hawkemedia.webp`, alt: 'Hawkmedia'},
              {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/Vendasta.webp`, alt: 'Vendasta'},
              {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/Cartcom_logo.webp`, alt: 'Cartcom'},
              {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/University_of_Cincinnati.webp`, alt: 'University Of Cincinnati'},
              {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/image_hi.webp`, alt: 'HealthInsurance'},
              {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/image-1011.webp`, alt: 'Tinyurl'},
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

        <DataDriven
          title="Data-driven SEO for Enterprise Brands."
          imageUrl={process.env.NEXT_PUBLIC_WORDPRESS_URL + '/wp-content/uploads/2023/02/Dat-driven-video-thumbnail.webp'}
          bgImage={process.env.NEXT_PUBLIC_WORDPRESS_URL + '/wp-content/uploads/2023/02/svgexport-12.svg'}
          descriptions={
            [
              '<p class="p_1">Google relies on over 200 ranking factors when determining whether to rank web pages. At LinkGraph, we narrow those factors down to four key areas:<span class="bgpur">Authority</span>, <span class="bgpin pink-bg">Content </span>, <span class="bgbl">Page Experience</span>, and <span class="bgpye">Industry ’s</span> standards.</p>',         '<p class="p_2">Our SEO agency works to elevate the quality-signals of your web pages in all of these core areas. Through our data-driven SEO service and proprietary software, we help Google see your content as <span style="color: #b790ff;">more relevant, more valuable, and more authoritative than your competitors.</span></p>'
            ]
          }
          modalContent={
            <div>
              <iframe
                width="780"
                height="417"
                src="https://www.youtube.com/embed/sxgMzxkV5O8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          }
        />

        <CountingNumbers
          id="counter_home"
          title="The Proof is in the Numbers"
          targets={[89134, 25000, 33160, 89000000]}
          labels={[
            'Link placements with software SEO products',
            'Blog posts in more than 500 industries',
            'In depth SERP keyword analysis',
            'Keywords indexed in our database',
          ]}
          button={{
            label: 'Get a Proposal', url: 'https://dashboard.linkgraph.io/order-builder',
            icon: true, size: 'big'
          }}
        />

        {servicesData.map((service, index) => (
          <ServicesHome
            key={index}
            sectionClassName={service.sectionClassName}
            subtitle={service.subtitle}
            title={service.title}
            text={service.text}
            links={service.links}
            imageUrl={service.imageUrl}
          />
        ))}
        
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
