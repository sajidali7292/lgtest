import { getNextStaticProps } from '@faustjs/next';
import Head from 'next/head';
import { GetStaticPropsContext } from 'next';
import React from 'react';
import { CTA, HeroHome, DataDriven, BasicText, GridImages, TestimonialsM, CountingNumbers, ServicesHome, CTA2, HomeFormSection, ReviewsSlider, VideoHome, PricingTableTab, Paths, TextLeftImageRight, CaseStudyHome, LearnHome } from 'components';
import styles from 'scss/pages/home.module.scss';
import { client } from 'client';
import $ from 'jquery';



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

        <ServicesHome
          data={[
            {
              sectionClassName: "services_1",      subtitle: `<span>01.</span> Authority`,      title: "Authoritative Backlinks at Scale",      text: "Backlinks to your website are essential to ranking well in Google. We create original content to earn you high-quality backlinks from reputable, trustworthy publications.",      links: [        { label: "Link Building Services", url: "#" },        { label: "White Label Link Building", url: "#" },        { label: "SEO Reputation Management", url: "#" },      ],
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
          ]}
        />


        <CTA2
          title="Are you ready to seriously scale?"
          text="Choose only the products you need right now from our comprehensive menu. Whether you need a quick authority boost or a comprehensive growth package, we got you covered."
          button={{
            label: 'Get a Proposal', url: 'https://dashboard.linkgraph.io/order-builder',
            icon: true, size: 'big'
          }}
        />

        <HomeFormSection
          title="See why the world's best companies choose LinkGraph to drive leads, traffic and revenue."
          text="“They are dedicated to our success and are a thoughtful sounding board when we run ideas by them - sometimes on ideas and projects that are tangential to our main SEO project with them. Also, I love that they allow for shorter-term contracts compared to the usual 1-year contract with other SEO companies. Lastly, they deliver on their promises.”"
          photo={{ url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/Mask-Group11.webp`, alt: "Client Photo" }}
          client_name="Brad Brenner"
          client_position="Ph.D, Co-Founder & CEO Therapy Group DC"
          form_logos={[
            { client_logo: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/IOC.webp` , alt: "Olympic Comittee" } },
            { client_logo: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/Shutterfly.webp` , alt: "Shutterfly" } },
            { client_logo: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/P_G.webp` , alt: "P&G" } },
            { client_logo: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/Verkada.webp` , alt: "Verkada" } }
          ]}
          hubspotFormProps={{
            portalId: '7038850',
            formId: '19865112-5d46-46ff-93f8-3bf9013e7656',
            css: '',
            onSubmit: () => console.log('form submitted'),
            loading: <div>Loading...</div>,
            onReady: (form: any) => {
              console.log('form ready', form);
              //custom code of the form here
                $('.hs_budget_available_to_spend').wrap('<div class="budget_btn"></div>')
                $('.hs_services_that_interest_you').wrap('<div class="services_btn"></div>')
                $('.budget_btn').append('<div id="budget-radio" class="budget-btn">Budget</div>');
                $('.services_btn').append("<div id='select_btn' class='servicesIntin' value='Services you&#39;re interested in'>Services you&#39;re interested in</div>");
                $('.hbspt-form input[type=hidden]').closest('fieldset').hide();                                    
                $('.hs_services_that_interest_you').hide();
                $('.hs_budget_available_to_spend').hide();
                $( "#budget-radio" ).click(function(event) {
                    $(this).toggleClass("selected");
                });
                $( "#select_btn" ).click(function(event) {
                    $(this).toggleClass("selected");
                });
                $("input[type='radio']").wrap('<label class="custom-radio"></label>');
                $('.custom-radio').append('<span class="checkmark"></span>');
                $('.hs-form-radio').wrap('<div class="li-bg"></div>');
                $('.li-bg').click(function(event){                                        
                    $('.li-bg').removeClass('active');
                    $(this).addClass('active');
                    $("#budget-radio").addClass('budactive');
                });
                $('.custom-radio').click(function(event) {
                    $('.custom-radio').removeClass('checked');
                    $(this).addClass('checked');
                });
                $("input[type='checkbox']").change(function(){
                    if($(this).is(":checked")){
                        $(this).parent().addClass("active");

                      }else{
                        $(this).parent().removeClass("active");
                    }
                });
                $(document).on('click', "input[type='radio']", function() {
                    var target = $("#budget-radio");
                    target.html($(this).val());                                    
                });

                $('input[type="checkbox"]').on('change', function() {

                    var tags = $('.hs-form-checkbox-display > input[type="checkbox"]:checked')
                    .map(function() {
                        return $(this).val();
                    }).get().join(', ');

                    if(tags.length === 0){
                        $("#select_btn").html('Services you&#39;re interested in');
                        $("#select_btn").removeClass('budactive');
                    }else{
                        $("#select_btn").html(tags);
                        $("#select_btn").addClass('budactive');
                    } 
                });

                $(document).click(function(e){
                    var containerS = $("#select_btn");
                    var dropdownS = $('.hs_services_that_interest_you');
                    if(!containerS.is(e.target) && containerS.has(e.target).length === 0){
                        dropdownS.hide();
                        containerS.removeClass("selected");
                    }else{
                        dropdownS.toggle();
                    }
                    if(!dropdownS.is(e.target) && dropdownS.has(e.target).length === 1){
                        dropdownS.show();
                        containerS.addClass("selected");
                    }                                     
                });

                $(document).click(function(e){
                    var containerB = $("#budget-radio");
                    var dropdownB = $('.hs_budget_available_to_spend');
                    var submit = $('.hs-button');
                    if(!containerB.is(e.target) && containerB.has(e.target).length === 0){
                        dropdownB.hide();
                        containerB.removeClass("selected");
                    }else{
                        dropdownB.toggle();
                    }
                    if(!dropdownB.is(e.target) && dropdownB.has(e.target).length === 1){
                        dropdownB.show();
                        containerB.addClass("selected");
                    }
                    if(!submit.is(e.target) && submit.has(e.target).length === 1){

                    }                                    
                });
            },
          }}
        />

        <PricingTableTab
          tab={[
            {
              id: 'managedSeo',
              label: 'Managed SEO',
              planTitle: 'SEO Campaigns Tailored to your Website’s Needs',
              content: 'Managed SEO campaigns include a custom combination of on-page SEO, off-site SEO, technical SEO, and content strategy tailored to your website’s needs.',
            },
            {
              id: 'linkBuilding',
              label: 'Link Building',
              planTitle: 'Link Building to grow your site’s authority and traffic ',
              content: 'Our link building packages are designed to always be on time and on budget so you can start getting results.',
            },
            {
              id: 'localSeo',
              label: 'Local SEO',
              planTitle: 'Local SEO to dominate your market',
              content: 'Dominate your market with thousands of hyper-local citations that turn local search into local business.',
            },
            {
              id: 'technicalSeo',
              label: 'Technical SEO',
              planTitle: 'On-site technical SEO for websites of all sizes',
              content: 'Comprehensive technical SEO optimizations to improve crawling, indexing, and keyword rankings for your web pages.',
            },
          ]}
        />

        <CTA2
          title="Work with our Award-Winning SEO Strategists"
          text="The LinkGraph team consists of SEO experts, industry-leading web developers, and editorial experts. With our talent and groundbreaking software suite, it's easy to guarantee results from our managed SEO campaigns."
          div="Products start as low as $250 / month"
          button={{
            label: 'Get a Proposal', url: 'https://dashboard.linkgraph.io/order-builder',
            icon: true, size: 'big'
          }}
        />

        <ReviewsSlider />

        <CTA2
          id="guarantee_cta"
          backgroundImage={process.env.NEXT_PUBLIC_WORDPRESS_URL + '/wp-content/uploads/2023/03/award-3.webp'}
          title="The LinkGraph Guarantee"
          text="With every managed SEO campaign, we guarantee measurable results in keyword rankings, organic traffic, or overall search visibility."
          button={{
            label: 'Get a Proposal', url: 'https://dashboard.linkgraph.io/order-builder',
            icon: true, size: 'big'
          }}
        />

        <VideoHome
          title="The Most Advanced SEO Software Suite on the Market"
          text="Do content optimization, backlink analysis, site audits, keyword rank tracking, and more from the convenience of a single platform. "
          videoBlocks={[
            {
              Video_Thumbnail: {
                url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/How-to-draft.webp`,
                width: 574,
                height: 322,
                alt: "Most Advanced SEO Software"
              },
              Video_Title: 'How to Draft a Blog Post with AI (in 90 seconds)',
              Video_ReadTime: '2 minute watch',
              modalContent: <div><iframe width="780" height="417" src="https://www.youtube.com/embed/JC4vhPfBX5E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>,
            },
            {
              Video_Thumbnail: {
                url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/How-to-choose-blog-topics.webp`,
                width: 574,
                height: 322,
                alt: "How To Draft a Blog Post"
              },
              Video_Title: 'How to Choose Blog Topics for Keywords',
              Video_ReadTime: '3 minute watch',
              modalContent: <div><iframe width="780" height="417" src="https://www.youtube.com/embed/ifxdxLOwH8o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>,
            },
            {
              Video_Thumbnail: {
                url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/How-to-create-content-brief.webp`,
                width: 574,
                height: 322,
                alt: "How to create content brief"
              },
              Video_Title: 'How to Create a Content Brief for Writers',
              Video_ReadTime: '7 minute watch',
              modalContent: <div><iframe width="780" height="417" src="https://www.youtube.com/embed/-bCCKbrns30" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>,
            },
            {
              Video_Thumbnail: {
                url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/How-to-do-an-OnPage-SEO.webp`,
                width: 574,
                height: 322,
                alt: "how to do an onpage seo"
              },
              Video_Title: 'How to do an OnPage SEO Audit',
              Video_ReadTime: '8 minute watch',
              modalContent: <div><iframe width="780" height="417" src="https://www.youtube.com/embed/S6AIcb35Ab4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>,
            },
          ]}
        />

        <Paths
          title="Choose your path"
          paths={[
            {
              img: { url: 'path1.jpg' },
              tag: 'services',
              title: 'Choose the perfect, done-for-you SEO Solution.',
              txt: `From full SEO services like link building, to managed PR campaigns and PPC, LinkGraph's specialists are standing by to help. When you work with us, we bake in our software into our partnership so you get double the marketing power.`,
              button: {
                label: 'Get your Discount Now', url: 'https://dashboard.linkgraph.io/onboarding?promo_code=SEOPIONEERS',
                type: 'third', rounded: true, size: 'big', icon: true
              }
            },
            {
              img: { url: 'path2.jpg' },
              tag: 'software',
              title: 'DIY with advanced SEO Software',
              txt: 'Our cutting-edge software suite can be used alone, or with our services, to track your rankings, optimize your content, analyze your competitors and more. You can create watch lists for important keywords and enable notifications so you never miss a move in the SERPs.',
              button: {
                label: 'Get your Discount Now', url: 'https://dashboard.linkgraph.io/onboarding?promo_code=SEOPIONEERS',
                type: 'third', rounded: true, size: 'big', icon: true
              }
            },
          ]}
        />

        <TextLeftImageRight
          tag= "Integrations"
          title= "Share data and insights across all of your (other) favorite tools by integrating with LinkGraph"
          text= "Explore thousands of keywords and get tailored suggestions for your keyword strategy. Understand the competitive SEO landscape of your industry."
          img={{ url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/Group-35472.webp`, alt: "Integrations" }}
          buttons={[
            {
              type: 'primary',
              url: '/button-1',
              label: 'Button 1',
            },
          ]}
        />

        <CaseStudyHome
          tag="Case Study"
          title="Trusted by the world’s most customer-centric teams"
          text="LinkGraph has driven growth for hundreds of brands in every industry. Learn more about our strategic approach in our case studies."
          button = {{
            label: 'Get your Discount Now', url: 'https://dashboard.linkgraph.io/onboarding?promo_code=SEOPIONEERS',
            type: 'third', rounded: true, size: 'big', icon: true
          }}
          quote="Their creative, strategic approach, and the intelligence of their team members is beyond what other companies in the space can provide. Trust and rely on their expertise, because they know what they’re doing."
          photo={{ url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/Mask-Group1.webp`, alt: "Client Photo" }}
          name="Ted Hunting"
          position="Senior VP of Marketing at BrightPattern"
          logo={{ url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/image-1172.webp`, alt: "Brightpattern logo" }}
        />

        <LearnHome
          title="Keep Learning with Us"
          text="LinkGraph is committed to driving innovation in the SEO space by producing data science research, free eBooks, thought leadership pieces, webinars and more."
          links={[
            {
              url: "https://www.linkgraph.io/resources",
              title: "Resources",
            },
            {
              url: "https://www.linkgraph.io/blog",
              title: "Blog",
            },
          ]}
          blocks={[
            {
              type: "video",
              index: 1,
              className: "sm:basis-full md:basis-6/12 basis-3/12",
              thumbnail: {
                url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/How-to-draft.webp`,
                width: 574,
                height: 322,
              },
              title: "How to Draft a Blog Post with AI (in 90 seconds)",
              readTime: "2 minute watch",
              modalContent: (
                <div>
                  <iframe
                    width="780"
                    height="417"
                    src="https://www.youtube.com/embed/JC4vhPfBX5E"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              ),
            },
            {
              type: "video",
              index: 1,
              className: "sm:basis-full md:basis-6/12 basis-3/12",
              thumbnail: {
                url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/How-to-draft.webp`,
                width: 574,
                height: 322,
              },
              title: "How to Draft a Blog Post with AI (in 90 seconds)",
              readTime: "2 minute watch",
              modalContent: (
                <div>
                  <iframe
                    width="780"
                    height="417"
                    src="https://www.youtube.com/embed/JC4vhPfBX5E"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              ),
            },
            {
              type: "link",
              index: 2,
              className: "sm:basis-full md:basis-6/12 basis-3/12",
              thumbnail: {
                url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/How-to-draft.webp`,
                width: 574,
                height: 322,
              },
              title: "How to Draft a Blog Post with AI (in 90 seconds)",
              readTime: "2 minute read",
              link: "https://www.linkgraph.io",
            },
            {
              type: "link",
              index: 2,
              className: "sm:basis-full md:basis-6/12 basis-3/12",
              thumbnail: {
                url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/How-to-draft.webp`,
                width: 574,
                height: 322,
              },
              title: "How to Draft a Blog Post with AI (in 90 seconds)",
              readTime: "2 minute read",
              link: "https://www.linkgraph.io",
            },
          ]}
        />

        <TextLeftImageRight
          column1="order-last"
          column3="order-first"
          title= "We're here, we're fun, and we're hiring."
          text= "At LinkGraph, you’ll work with team members that value one another’s skills and expertise. Our philosophy is simple – hire diverse, driven individuals who foster a culture that empowers great work for our clients."
          img={{ url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/Group-3016.webp`, alt: "We're Hiring" }}
          buttons={[
            {
              type: 'primary',
              url: '/button-1',
              label: 'Button 1',
            },
          ]}
        />

        <TextLeftImageRight
          column1="order-first"
          column3="order-last"
          title= "Create and publish 6 months of content in 1 week."
          text= "We combined content optimization with AI text generation to build the most useful SEO content suite on the market. Write faster, rank higher, and dominate the SERPs."
          img={{ url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/image-108.webp`, alt: "We're Hiring" }}
          buttons={[
            {
              type: 'primary',
              url: '/button-1',
              label: 'Button 1',
            },
            {
              type: 'secondary',
              url: '/button-2',
              label: 'Button 2',
              icon: true,
            },
          ]}
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
