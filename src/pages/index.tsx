import { getNextStaticProps } from '@faustjs/next';
import Head from 'next/head';
import { GetStaticPropsContext } from 'next';
import React from 'react';
import { CTAImage, HeroHome, DataDriven, BasicText, GridImages, TestimonialsM, CountingNumbers, ServicesHome, CTA, HomeFormSection, ReviewsSlider, VideoHome, PricingTab, Paths, CaseStudyHome, LearnHome } from 'components';
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
        id='home_hero'
      />
        
      <BasicText 
        pt="t6"
        pb="b3"
        descriptions={
          [
            'At LinkGraph, our goal is simple: help companies scale their organic traffic and revenue with white-glove <a class="color-hg1" href="/services/" data-wpel-link="internal">marketing services</a> and <a class="color-hg0" href="/searchatlas-seo-software/" data-wpel-link="internal">cutting-edge SEO software</a>. Our clients range from startups to enterprise companies in verticals like Saas, Healthcare, Ecommerce, and more. If you’re looking for a <a class="color-hg2" href="/case-studies-and-results/" data-wpel-link="internal">results-based agency</a> to scale your company to the next level, <a class="color-hg1" href="https://meetings.linkgraph.io/meetings/link-graph/linkgraph-initial-consultation" data-wpel-link="external" rel="follow">we should talk</a>.',
            'P.S. If you’re an agency, you’re in luck– our <a class="color-hg0" href="/white-label-link-building/" data-wpel-link="internal">white label services and software</a> can help you 10x your ability to deliver for your clients.'
          ]
        }
      />
      
      <GridImages
        pt="xs"
        pb="xs"
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
        pt="sm"
        pb="md"
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
            '<p><b>Google relies on over 200 ranking factors when determining whether to rank web pages. At LinkGraph, we narrow those factors down to four key areas:<span class="bg-hg1">Authority</span>, <span class="bgpin bg-pink">Content </span>, <span class="bg-hg2">Page Experience</span>, and <span class="bg-yellow">Industry ’s</span> standards.</b></p>',         '<p>Our SEO agency works to elevate the quality-signals of your web pages in all of these core areas. Through our data-driven SEO service and proprietary software, we help Google see your content as <b class="color-light-blue">more relevant, more valuable, and more authoritative than your competitors.</b></p>'
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
        pt= 'xl'
        pb= 'xs'
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
          linkSingle:{title: 'Get a Proposal', url: 'https://dashboard.linkgraph.io/order-builder'},
          icon: true, size: 'big', hoverTransparent: true
        }}
        pt= 'xs'
        pb= 'xs'
      />

      <ServicesHome
        data={[
          {
            sectionClassName: "services_1",
            subtitle: `<span>01.</span> Authority`,
            title: "Authoritative Backlinks at Scale",
            text: "Backlinks to your website are essential to ranking well in Google. We create original content to earn you high-quality backlinks from reputable, trustworthy publications.",
            links: [
              { title: "Link Building Services", url: "#" },
              { title: "White Label Link Building", url: "#" },
              { title: "SEO Reputation Management", url: "#" },
            ],
            image: {
              url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/Group-34442.webp`,
              alt: '', width: '', height: ''
            },
          },
          {
            sectionClassName: "services_2",
            subtitle: "<span>02.</span> Content",
            title: `High-Quality,</br> Top-Ranking Content`,
            text: "Our 50+ editorial team of SEO professionals can earn your brand more keyword rankings, higher positions, and more organic traffic opportunities. We know what it takes to rank for high-value keywords in your industry.",
            links: [
              { title: "SEO Content Strategy", url: "#" },
              { title: "On Page SEO", url: "#" },
            ],
            image: {
              url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/Group-34381.webp`,
              alt: '', width: '', height: ''
            },
          },
          {
            sectionClassName: "services_3",
            subtitle: "<span>03.</span> Page Experience",
            title: `Fast & Responsive</br> Technical Performance`,
            text: "Our technical SEO team optimizes the backend of your web pages for improved page speed, load times, and mobile-usability. Then, our CRO team ensures that your web pages turn organic traffic into conversions.",
            links: [
              { title: "Technical SEO Services", url: "#" },
              { title: "Conversion Rate Optimization", url: "#" },
            ],
            image: {
              url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/Group-35461.webp`,
              alt: '', width: '', height: ''
            },
          },
          {
            sectionClassName: "services_4",
            subtitle: "<span>04.</span> Industry",
            title: `Industry-Specific Approach to Outrank Competitors`,
            text: "We bring an industry-specific approach to every optimization we make so Google sees your brand as a leading authority in your industry. Outrank your competitors in less time with our targeted, data-driven approach.",
            links: [
              { title: "Enterprise SEO", url: "#" },
              { title: "Ecommerce SEO", url: "#" },
              { title: "SaaS Marketing", url: "#" },
              { title: "White Label SEO", url: "#" },
              { title: "BigCommerce SEO", url: "#" },
              { title: "Local SEO", url: "#" },
            ],
            image: {
              url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/Group-34611.webp`,
              alt: '', width: '', height: ''
            },
          },
        ]}
        pt= "md"
        pb= "sm"
      />

      <CTA
        className="home_cta_1"
        title="Are you ready to seriously scale?"
        text="Choose only the products you need right now from our comprehensive menu. Whether you need a quick authority boost or a comprehensive growth package, we got you covered."
        textCenterd
        buttons={[
          {
            linkSingle:{title: 'Get a Proposal', url: 'https://dashboard.linkgraph.io/order-builder'},
            icon: true, size: 'big', hoverTransparent: true
          }
        ]}
        pt= "md"
        pb= "md"
      />

      <HomeFormSection
        className="home_hubspot_form"
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
        pt= "md"
        pb= "md"
      />

      <PricingTab
        isCentered
        pt = 'md'
        pb = 'md'
        tabOpenedID = 'managedSeo'
        tabs={[
          {
            id: 'managedSeo',
            label: 'Managed SEO',
            title: 'SEO Campaigns Tailored to your Website’s Needs',
            content: 'Managed SEO campaigns include a custom combination of on-page SEO, off-site SEO, technical SEO, and content strategy tailored to your website’s needs.',
            typeModule: 'table',
            pricingScrolled: true,
            tablePricing:[
              {
                serviceName: 'Small Business Boon', servicePrice: '$1,500<span> / M</span>', serviceColor: '#e59e59', serviceTier: 'Bronze', serviceAuthority: 500,
                serviceImage:{ url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/icons_table_check_bronze.png`, alt: "Small Business Boon" },
                serviceOnsite: 3, serviceWeb: 1,
                serviceSoftware: {
                  serviceSearch: 'Starter plan $48 (without campagin $99) 1 seat', serviceEarly: true, serviceLocked: false
                },
                serviceSupport: {
                  serviceAccount: 2, serviceDedicated: false, serviceChat: false, serviceConsultation: false
                },
                serviceCommunity: {
                  serviceAccess: true, serviceSEO: true
                },
                serviceResults: {
                  serviceMonthly: true, serviceLinkGraphMetric: false
                },
                serviceTotal: 6, serviceBtn:{linkSingle:{url: 'https://buy.stripe.com/9AQ7ui2ls0m401O2ci', title: 'Get Started'}, size: 'medium', pill: true, type: 'fourth'}
              },
              {
                serviceName: 'Business Basic Deal', servicePrice: '$3,000<span> / M</span>', serviceColor: '#afafaf', serviceTier: 'Silver', serviceAuthority: 1000,
                serviceImage:{ url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/icons_table_check_silver.webp`, alt: "Business Basic Deal" },
                serviceOnsite: 9, serviceWeb: 1,
                serviceSoftware: {
                  serviceSearch: 'Growth plan $148 (without campaign $299)', serviceEarly: true, serviceLocked: true
                },
                serviceSupport: {
                  serviceAccount: 3, serviceDedicated: true, serviceChat: false, serviceConsultation: false
                },
                serviceCommunity: {
                  serviceAccess: true, serviceSEO: true
                },
                serviceResults: {
                  serviceMonthly: true, serviceLinkGraphMetric: true
                },
                serviceTotal: 13, serviceBtn:{linkSingle:{url: 'https://buy.stripe.com/bIY7ui6BIb0Ig0M3gn', title: 'Get Started'}, size: 'medium', pill: true, type: 'fifth'}
              },
              {
                serviceName: 'Business Growth Plan', servicePrice: '$6,000<span> / M</span>', serviceColor: '#eeba2b', serviceTier: 'Gold', serviceAuthority: 2700,
                serviceImage:{ url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/icons_table_check_gold.png`, alt: "Business Growth Plan" },
                serviceOnsite: 12, serviceWeb: 3,
                serviceSoftware: {
                  serviceSearch: 'Growth plan $148 (without campaign $299)', serviceEarly: true, serviceLocked: true
                },
                serviceSupport: {
                  serviceAccount: 4, serviceDedicated: true, serviceChat: true, serviceConsultation: '1'
                },
                serviceCommunity: {
                  serviceAccess: true, serviceSEO: true
                },
                serviceResults: {
                  serviceMonthly: true, serviceLinkGraphMetric: true
                },
                serviceTotal: 20, serviceBtn:{linkSingle:{url: 'https://buy.stripe.com/cN23e25xEgl2bKw04c', title: 'Get Started'}, size: 'medium', pill: true, type: 'seventh'}
              },
              {
                serviceName: 'Enterprise-Ready Plan', servicePrice: '$12,000<span> / M</span>', serviceColor: '#d5ecf9', serviceTier: 'Diamond', serviceAuthority: 6000,
                serviceImage:{ url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/icons_table_check_diamond.png`, alt: "Enterprise-Ready Plan" },
                serviceOnsite: 26, serviceWeb: 8,
                serviceSoftware: {
                  serviceSearch: 'PRO plan $224 (without campaign $499)', serviceEarly: true, serviceLocked: true
                },
                serviceSupport: {
                  serviceAccount: 6, serviceDedicated: true, serviceChat: true, serviceConsultation: '1'
                },
                serviceCommunity: {
                  serviceAccess: true, serviceSEO: true
                },
                serviceResults: {
                  serviceMonthly: true, serviceLinkGraphMetric: true
                },
                serviceTotal: 47, serviceBtn:{linkSingle:{url: 'https://buy.stripe.com/cN27ui7FM1q84i44kt', title: 'Get Started'}, size: 'medium', pill: true, type: 'sixth'}
              },
              {
                serviceName: 'Custom', servicePrice: '<span>Min&nbsp;</span> $6,000', serviceColor: '#000000', serviceTier: 'Custom', serviceAuthority: 'Custom',
                serviceImage:{ url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/icons_table_check_custom.png`, alt: "Custom Plan" },
                serviceOnsite: 'Custom', serviceWeb: 'Custom', serviceFColor: '#FFFFFF',
                serviceTotal: 13, serviceBtn:{linkSingle:{url: 'https://meetings.linkgraph.io/meetings/link-graph/linkgraph-initial-consultation', title: 'Speak with a Rep'}, size: 'medium', pill: true, type: 'black'}
              }
            ]
          },
          {
            id: 'linkBuilding',
            label: 'Link Building',
            title: 'Link Building to grow your site’s authority and traffic ',
            content: 'Our link building packages are designed to always be on time and on budget so you can start getting results.',
            typeModule: 'card',
            tablePricing:[
              {
                serviceImage:{ url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/Monticello-7-copy-2.webp`, alt: "Monticello" },
                title: 'MONTICELLO', description: 'Start building with high quality links', price: '$549 <span> / Month</span>',
                serviceBtn:{linkSingle:{url: 'https://dashboard.linkgraph.io/order-builder?product_slug=link-building-packages', title: 'Get Started'}, size: 'medium', type: 'black'},
                linksTotal: '4 links total',
                features:[
                  'DA 20-30: 3 Links',
                  'DA 30-40: 1 Links'
                ]
              },
              {
                serviceImage:{ url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/Rushmore-7-copy-2.webp`, alt: "Rushmore" },
                title: 'RUSHMORE', description: 'Round out your backlink profile', price: '$999 <span> / Month</span>',
                serviceBtn:{linkSingle:{url: 'https://dashboard.linkgraph.io/order-builder?product_slug=link-building-packages', title: 'Get Started'}, size: 'medium', type: 'black'},
                linksTotal: '6 links total',
                features:[
                  'DA 20-30: 3 Links',
                  'DA 30-40: 2 Links',
                  'DA 40-50: 1 Link'
                ]
              },
              {
                serviceImage:{ url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/Kilimanjaro-7-copy-2.png`, alt: "Kilimanjaro" },
                title: 'KILIMANJARO', description: 'Supercharge your backlink building', price: '$2499 <span> / Month</span>',
                serviceBtn:{linkSingle:{url: 'https://dashboard.linkgraph.io/order-builder?product_slug=link-building-packages', title: 'Get Started'}, size: 'medium', type: 'black'},
                linksTotal: '10 links total',
                features:[
                  'DA 20-30: 4 Links',
                  'DA 30-40: 2 Links',
                  'DA 40-50: 2 Links',
                  'DA 50-60: 1 Link',
                  'DA 60-70: 1 Link'
                ]
              },
              {
                serviceImage:{ url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/Everest-7-copy-2.png`, alt: "Everest" },
                title: 'EVEREST', description: 'Experience rapid growth in your rankings', price: '$4999 <span> / Month</span>',
                serviceBtn:{linkSingle:{url: 'https://dashboard.linkgraph.io/order-builder?product_slug=link-building-packages', title: 'Get Started'}, size: 'medium', type: 'black'},
                linksTotal: '18 links total',
                features:[
                  'DA 20-30: 6 Links',
                  'DA 30-40: 4 Links',
                  'DA 40-50: 4 Links',
                  'DA 50-60: 2 Links',
                  'DA 60-70: 1 Links',
                  'DA 70-79: 1 Link'
                ]
              }
            ]
          },
          {
            id: 'localSeo',
            label: 'Local SEO',
            title: 'Local SEO to dominate your market',
            content: 'Dominate your market with thousands of hyper-local citations that turn local search into local business.',
            typeModule: 'card',
            tablePricing:[
              {
                title: 'LOCAL SEO FUNDAMENTALS', description: 'Billed quarterly, from:', price: '$20 <span> / Month</span>',
                serviceBtn:{linkSingle:{url: 'https://dashboard.linkgraph.io/order-builder?product_slug=local-seo-package', title: 'Order Now'}, size: 'medium', type: 'black'},
                localSEO: 100,
                webSearch: 0,
                features:[
                  'Price Per Location',
                  '30+ Structured Citations',
                  'Daily Local SEO Reports',
                  'Daily Citation Tracker Reporting'
                ],
                featureCheck: true,
                featureCheckColor: 'bronze'
              },
              {
                title: 'GROWTH CAMPAIGN', description: 'Billed quarterly, from:', price: '$60 <span> / Month</span>',
                serviceBtn:{linkSingle:{url: 'https://dashboard.linkgraph.io/order-builder?product_slug=local-seo-package', title: 'Order Now'}, size: 'medium', type: 'black'},
                localSEO: 100,
                webSearch: 55,
                features:[
                  'Price Per Location',
                  '40+ Structured Citations',
                  '1 DA 20-40 Geotargeted Backlink',
                  'Daily Local SEO Reports',
                  'Daily Citation Tracker Reporting',
                  'Review Monitoring',
                  'Everything in Package 1'
                ],
                featureCheck: true,
                featureCheckColor: 'purple'
              },
              {
                title: 'ASPIRE CAMPAIGN', description: 'Billed quarterly:', price: '$150 <span> / Month</span>',
                serviceBtn:{linkSingle:{url: 'https://dashboard.linkgraph.io/order-builder?product_slug=local-seo-package', title: 'Order Now'}, size: 'medium', type: 'black'},
                localSEO: 100,
                webSearch: 100,
                features:[
                  'Price Per Location',
                  '50+ Structured Citations',
                  '3 DA 20-40 Geotargeted Backlinks Per Quarter',
                  'Daily Local SEO Reports',
                  'Daily Citation Tracker Reporting',
                  'Review Monitoring',
                  'Complete Google My Business Audit',
                  'Everything in Package 1'
                ],
                featureCheck: true,
                featureCheckColor: 'green'
              },
              {
                title: 'NEED A CUSTOMIZED LOCAL SEO CAMPAIGN?', price: 'LinkGraph can help',
                serviceBtn:{linkSingle:{url: 'https://www.linkgraph.com/learn-how-we-can-grow-your-business/', title: 'Learn More'}, size: 'medium', type: 'black'}
              }
            ]
          },
          {
            id: 'technicalSeo',
            label: 'Technical SEO',
            title: 'On-site technical SEO for websites of all sizes',
            content: 'Comprehensive technical SEO optimizations to improve crawling, indexing, and keyword rankings for your web pages.',
            typeModule: 'card',
            tablePricing:[
              {
                title: 'FULL SITE <br/>TECHNICAL AUDIT', price: '$500 <span> / Site</span>',
                serviceBtn:{linkSingle:{url: 'https://dashboard.linkgraph.io/order-builder?product_slug=full-site-technical-audit', title: 'Get Started'}, size: 'medium', type: 'black'},
                features:[
                  'Site size < 100 pages',
                  'Meta tag analysis',
                  'Core Web Vitals analysis',
                  'Broken Link analysis',
                  'Page Speed analysis'
                ],
                featureCheck: true,
                featureCheckColor: 'bronze'
              },
              {
                title: 'TOXIC BACKLINK <br/>ANALYSIS', price: '$500 <span> / 50 Pages</span>',
                serviceBtn:{linkSingle:{url: 'https://dashboard.linkgraph.io/order-builder?product_slug=full-site-technical-audit', title: 'Get Started'}, size: 'medium', type: 'black'},
                features:[
                  'Site size < 500 referring domains',
                  'Toxic/Spam link identification',
                  'Toxicity/Spam scores',
                  'Recommended domains/subdomains for Disavow',
                  'Disavow .txt file'
                ],
                featureCheck: true,
                featureCheckColor: 'purple'
              },
              {
                title: 'INTERNAL LINKING <br/>ANALYSIS', price: '$1500 <span> / 50 Pages</span>',
                serviceBtn:{linkSingle:{url: 'https://dashboard.linkgraph.io/order-builder?product_slug=full-site-technical-audit', title: 'Get Started'}, size: 'medium', type: 'black'},
                features:[
                  'Internal Link Suggestions',
                  'Orphan page identification',
                  'Site Structure Visualization',
                  'PageRank Distribution Analysis'
                ],
                featureCheck: true,
                featureCheckColor: 'green'
              },
              {
                title: 'IN-DEPTH SEO STRATEGY <br/>CONSULTATION WITH CTO', price: '$1000 <span> / 1 Hour</span>',
                serviceBtn:{linkSingle:{url: 'https://dashboard.linkgraph.io/order-builder?product_slug=full-site-technical-audit', title: 'Get Started'}, size: 'medium', type: 'black'},
                features:[
                  'SEO consultation meeting with LinkGraph’s CTO, Manick Bhan',
                  '1 hour-long'
                ],
                featureCheck: true,
                featureCheckColor: 'pink'
              }
            ]
          },
        ]}
      />

      <CTA
        className="home_cta_2"
        title="Work with our Award-Winning SEO Strategists"
        text="The LinkGraph team consists of SEO experts, industry-leading web developers, and editorial experts. With our talent and groundbreaking software suite, it's easy to guarantee results from our managed SEO campaigns."
        textCenterd
        div="Products start as low as $250 / month"
        buttons={[
          {
            linkSingle:{title: 'Get a Proposal', url: 'https://dashboard.linkgraph.io/order-builder'},
            icon: true, size: 'big', hoverTransparent: true
          }
        ]}
        pt= "xs"
        pb= "xs"
      />

      <ReviewsSlider
        reviews= {[
          {
            photo: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/Mask-Group1.webp`, alt: "Client Photo" },
            stars: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/review-stars.webp`, alt: "Five Stars" },
            name: "Ted Hunting,</br>Senior VP of Marketing",
            text: "“Their creative, strategic approach, and the intelligence of their team members is beyond what other companies in the space can provide. Trust and rely on their expertise, because they know what they’re doing.”",
          },
          {
            photo: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/client-3-e1648673375178.png`, alt: "Client Photo" },
            stars: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/review-stars.webp`, alt: "Five Stars" },
            name: "Owner,</br>Digital Agency,</br><span>Clutch Review 2022</span>",
            text: "“Within the first few months of the campaign being live, we were the number one result for Orlando SEO companies. Since then, they’ve delivered those kinds of results for a number of our client companies as well.”",
          },
          {
            photo: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/client-7-e1648673402753.webp`, alt: "Client Photo" },
            stars: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/review-stars.webp`, alt: "Five Stars" },
            name: "Senior Marketing Manager,</br>Financial Services Industry,</br><span>Clutch Review 2022</span>",
            text: "“From our initial consultation and throughout each month, LinkGraph has delivered results for us. The workflow has been seamless. We're seeing more results and moving forward with more deliverables than we could with just our team alone.”",
          },
          {
            photo: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/client-2-e1648673417952.png`, alt: "Client Photo" },
            stars: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/review-stars.webp`, alt: "Five Stars" },
            name: "Chief Information Officer,</br>Ecommerce retailer,</br><span>Clutch Review 2022</span>",
            text: "“LinkGraph provided education, guidance, expert level assistance, and state of the art tools to allow us to identify and repair several issues with our site. We have become a force to be reckoned with in our market thanks to their team.”",
          }
        ]}
        pt = 'xxs'
        pb = 'xs'
      />

      <CTA
        className="home_cta_3"
        title="The LinkGraph Guarantee"
        text="With every managed SEO campaign, we guarantee measurable results in keyword rankings, organic traffic, or overall search visibility."
        textSize="small"
        textCenterd
        sectionRounded
        imageBg= {
          {url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/award-3.webp`, alt: '',
          position: '100% 0', size: '20%', repeat: 'no-repeat'}
        }
        buttons={[
          {
            linkSingle:{title: 'Get a Proposal', url: 'https://dashboard.linkgraph.io/order-builder'},
            icon: true, size: 'big'
          }
        ]}
        bg= "dark"
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
        pt= "lg"
        pb= "xxs"
      />

      <Paths
        title="Choose your path"
        paths={[
          {
            img: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/Mask-Group12.webp` },
            tag: { name: 'Services', color: 'primary' },
            title: 'Choose the perfect, done-for-you SEO Solution.',
            txt: `From full SEO services like link building, to managed PR campaigns and PPC, LinkGraph's specialists are standing by to help. When you work with us, we bake in our software into our partnership so you get double the marketing power.`,
            button: {
              linkSingle:{title: 'View Services', url: 'https://linkgraphstage.wpengine.com/services/'},
              type: 'white', pill: false, size: 'small'
            }
          },
          {
            img: { url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/Mask-Group13.webp` },
            tag: { name: 'Software', color: 'light-blue' },
            title: 'DIY with advanced SEO Software',
            txt: 'Our cutting-edge software suite can be used alone, or with our services, to track your rankings, optimize your content, analyze your competitors and more. You can create watch lists for important keywords and enable notifications so you never miss a move in the SERPs.',
            button: {
              linkSingle:{title: 'View Software', url: 'https://linkgraphstage.wpengine.com/searchatlas-seo-software/'},
              type: 'white', pill: false, size: 'small'
            }
          },
        ]}
        pt= "xxs"
        pb= "xl"
      />

      <CTA
        className="home_cta_4"
        tag= {{name: "Integrations", color: "semi-white"}}
        title= "Share data and insights across all of your (other) favorite tools by integrating with LinkGraph"
        text= "Explore thousands of keywords and get tailored suggestions for your keyword strategy. Understand the competitive SEO landscape of your industry."
        textSize="small"
        buttons={[
          {
            type: 'primary', linkSingle:{url: 'https://dashboard.linkgraph.io/order-builder',
            title: 'Get a Proposal'}, icon: true, hoverTransparent: true
          }
        ]}
        secondColumnMiddle
        secondColumn={{
          img:{ url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/Group-35472.webp`, alt: "Integrations", width: 407, height: 450  }
        }}
        pt="xxs"
        pb="xxs"
      />

      <CaseStudyHome
        tag= {{name: "Case Study", color: "bronze"}}
        title="Trusted by the world’s most customer-centric teams"
        text="LinkGraph has driven growth for hundreds of brands in every industry. Learn more about our strategic approach in our case studies."
        button = {{
          linkSingle:{title: 'View SaaS Case Study', url: 'https://linkgraphstage.wpengine.com/case-study-bright-pattern/'},
          type: 'dark', size: 'big'
        }}
        quote="“Their creative, strategic approach, and the intelligence of their team members is beyond what other companies in the space can provide. Trust and rely on their expertise, because they know what they’re doing.”"
        photo={{ url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/Mask-Group1.webp`, alt: "Client Photo" }}
        name="Ted Hunting"
        position="Senior VP of Marketing at BrightPattern"
        logo={{ url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/image-1172.webp`, alt: "Brightpattern logo", width: 145, height: 13 }}
        bgImage1= {{
          url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/Group-3392.png`,
          position: '97% 40%', size: '24px', repeat: 'no-repeat'
        }}
        bgColor1= "semi_white"
        bgImage2= {{
          url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/quotes-1.webp`,
          position: '95% 5%', size: '227px', repeat: 'no-repeat'
        }}
        bgColor2= "yellow"
        badgeObj={{
          badgeRows:[
            {
              type: 'text',
              text: 'Best B2B SEO Campaign 2021 -',
            },
            {
              type: 'image',
              url:`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/svgexport-15.svg`,
              alt: 'Drum Awards', width: 30, height: 29,
            },
            {
              type: 'text',
              text: 'The Drum Awards',
            },
          ]
        }}
        pt="xs"
        pb="xl"
      />

      <LearnHome
        title="Keep Learning with Us"
        text="LinkGraph is committed to driving innovation in the SEO space by producing data science research, free eBooks, thought leadership pieces, webinars and more."
        button={{
          type: 'primary', linkSingle:{url: '/explore/',
          title: 'See All Free Resources'}, hoverTransparent: true
        }}
        links={[
          {
            url: "https://linkgraphstage.wpengine.com/seo-and-digital-marketing-ebooks/",
            title: "eBooks",
          },
          {
            url: "https://linkgraphstage.wpengine.com/digital-marketing-seo-webinars/",
            title: "Webinars",
          },
          {
            url: "https://linkgraphstage.wpengine.com/seo-and-digital-marketing-blog/",
            title: "Blog Posts",
          },
          {
            url: "https://linkgraphstage.wpengine.com/videos/",
            title: "Videos",
          },
        ]}
        blocks={[
          {
            type: "video",
            index: 1,
            thumbnail: {
              url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/Untitled-280-×-190-px3.webp`,
              width: 574,
              height: 322,
              alt: "Video1",
            },
            tag: "Video",
            title: "Mastering Crawl Budget Optimization at brightonSEO ft. Manick Bhan",
            readTime: "2 minute watch",
            modalContent: (
              <div>
                <iframe
                  width="780"
                  height="417"
                  src="https://www.youtube.com/embed/vq0O7d1pqaM"
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
            index: 2,              
            thumbnail: {
              url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/ExvmwY6WQAA0CQu.webp`,
              width: 574,
              height: 322,
              alt: "video2",
            },
            tag: "Video",
            title: "Manick Bhan's Ad World Talk on Google Ranking Factors",
            readTime: "2 minute watch",
            modalContent: (
              <div>
                <iframe width="780"
                height="417"
                src="https://www.youtube.com/embed/gY-t2vbwYoM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
                </iframe>
              </div>
            ),
          },
          {
            tag: "Ebook",
            type: "link",
            index: 3,
            thumbnail: {
              url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/Mask-Group6.webp`,
              width: 574,
              height: 322,
              alt:"Link1",
            },
            title: "LinkGraph’s Guide to Link Building",
            readTime: "2 minute read",
            link: "https://www.linkgraph.io",
          },
          {
            tag: "Ebook",
            type: "link",
            index: 4,
            thumbnail: {
              url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/Mask-Group7.webp`,
              width: 574,
              height: 322,
              alt:"link2",
            },
            title: "Paid Media Ebook: Scaling Google Ads an...",
            readTime: "2 minute read",
            link: "https://www.linkgraph.io",
          },
        ]}
        pt="xl"
        pb="xxl"
        bg="dark"
      />

      <CTA
        className="Hiring"
        isReversed
        title= "We're here, we're fun, and we're hiring."
        text= "At LinkGraph, you’ll work with team members that value one another’s skills and expertise. Our philosophy is simple – hire diverse, driven individuals who foster a culture that empowers great work for our clients."
        buttons={[
          {
            type: 'dark', linkSingle:{url: '/button-1',
            title: 'See Open Roles'}, hoverTransparent: true
          }
        ]}
        secondColumnMiddle
        secondColumn={{
          img:{ url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/Group-3016.webp`, alt: "We're Hiring", width: 447, height: 473 }
        }}
        pt="xxl"
        pb="lg"
      />

      <CTA
        className="create_faster"
        title= "Create and publish 6 months of content in 1 week."
        text= "We combined content optimization with AI text generation to build the most useful SEO content suite on the market. Write faster, rank higher, and dominate the SERPs."
        buttons={[
          {
            type: 'dark', linkSingle:{url: '/button-1',
            title: 'Get Started'}, hoverTransparent: true
          },
          {
            type: 'dark',
            isLink: true,
            isUnderline: true,
            linkSingle:{url: '/button-2',
            title: 'Learn More'},
          }
        ]}
        badgeObj={{
          bg: 'red',
          color: 'white',
          rounded: 'normal',
          textSize: 'small',
          badgeRows:[
            {
              type: 'image',
              url:`${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/1st.svg`,
              alt: 'Drum Awards', width: 47, height: 48,
            },
            {
              type: 'text',
              text: '<b>Most Popular Product of the Day</b> <br>on ProductHunt',
            },
            {
              type: 'image',
              url: 'https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=348024&theme=light',
              alt: 'Product Hunt', width: 190, height: 40,
            },
          ]
        }}
        secondColumnMiddle
        secondColumn={{
          img:{ url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/image-108.webp`, alt: "We're Hiring", width: 440, height: 378 }
        }}
        pt="xxl"
        pb="lg"
      />

      {/* <CTA
        className="subscribers_off"
        title= "New subscribers get 30% off"
        text= "Level up your SEO with our cutting-edge software suite."
        buttons={[
          {
            linkSingle:{title: 'Get your Discount Now', url: 'https://dashboard.linkgraph.io/onboarding?promo_code=SEOPIONEERS', target: true},
          type: 'third', pill: true, size: 'big', icon: true
          }
        ]}
        secondColumnMiddle
        secondColumn={{}}
        fullBg
        imageBg= {{url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/02/New-subscribers.webp`, alt: '',
          position: '115% 50%', size: '821px', repeat: 'no-repeat'
        }}
        pt="xl"
        pb="xl"
        bg="yellow"
      /> */}

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
