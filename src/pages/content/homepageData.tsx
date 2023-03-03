

//Props of the Award section at the hero
export const awards = [
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


  //Props of the services section
  export const servicesData = [
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


  
  //Props Of the video block section
  export const videoBlocks = [
    {
      Video_Thumbnail: {
        url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/How-to-draft.webp`,
        width: 574,
        height: 322,
      },
      Video_Title: 'How to Draft a Blog Post with AI (in 90 seconds)',
      Video_ReadTime: '2 minute watch',
      modalContent: <div><iframe width="560" height="315" src="https://www.youtube.com/embed/JC4vhPfBX5E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>,
    },
    {
      Video_Thumbnail: {
        url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/How-to-choose-blog-topics.webp`,
        width: 574,
        height: 322,
      },
      Video_Title: 'How to Choose Blog Topics for Keywords',
      Video_ReadTime: '3 minute watch',
      modalContent: <div><iframe width="560" height="315" src="https://www.youtube.com/embed/ifxdxLOwH8o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>,
    },
    {
      Video_Thumbnail: {
        url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/How-to-create-content-brief.webp`,
        width: 574,
        height: 322,
      },
      Video_Title: 'How to Create a Content Brief for Writers',
      Video_ReadTime: '7 minute watch',
      modalContent: <div><iframe width="560" height="315" src="https://www.youtube.com/embed/-bCCKbrns30" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>,
    },
    {
      Video_Thumbnail: {
        url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-content/uploads/2023/03/How-to-do-an-OnPage-SEO.webp`,
        width: 574,
        height: 322,
      },
      Video_Title: 'How to do an OnPage SEO Audit',
      Video_ReadTime: '8 minute watch',
      modalContent: <div><iframe width="560" height="315" src="https://www.youtube.com/embed/S6AIcb35Ab4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>,
    },
    //Add as many videos as needed
  ];