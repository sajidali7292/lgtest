import { getNextStaticProps, is404 } from '@faustjs/next';
import { client, Post } from 'client';
import { Hero } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import styles from 'scss/pages/post/post.module.scss';
import Image from 'next/image';
import PostDetail from 'components/UI/PostDetail';
import BreadCrumb from 'components/UI/BreadCrumb';
import PostShare from 'components/UI/PostShare';
import BuildPerfect from 'components/BuildPerfect';
import SideNav from 'components/UI/SideNav';
import SearchAjax from 'components/UI/SearchAjax';
import PostTypes from 'components/UI/PostTypes';
import PricingTab from 'components/PricingTab';
import Link from 'next/link';

export interface PostProps {
  post: Post | Post['preview']['node'] | null | undefined;
}

export function PostComponent({ post }: PostProps) {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const postHero = useQuery().themeGeneralSettings.lgOptions.postHero;
  const buildPerfect = useQuery().themeGeneralSettings.lgOptions.buildPerfectSeo;
  const toggleLeft = useQuery().themeGeneralSettings.lgOptions.toggleLeftSection.toggleItems;
  const faqToggle = useQuery().themeGeneralSettings.lgOptions.tabs;

  return (
    <>

      <Head>
        <title>
          {post?.title()} - {generalSettings.title}
        </title>
      </Head>

      {postHero && <Hero
        title={postHero.postHeroTitle}
        description = {postHero.postHeroDescription}
        bgImage = {postHero.postHeroImage.mediaItemUrl}
        buttons={postHero.postLinksObjs}
      />}

      <section className={`${styles.contentSingle}`}>
        {/* <PricingTab
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
        /> */}

        <div className={`container ${styles.singleContainer}`}>
          <div className={`flex flex-row flex-wrap lg:flex-nowrap gap-4 md:gap-0 lg:gap-8`}>

            <div className={`w-full lg:w-3/12 hidden lg:flex flex-col gap-5`}>
              <div className={`${styles.formWrap}`}>
                <SearchAjax />
              </div>
              <div className={`${styles.typesContainer}`}>
                <PostTypes sections={ ['Posts','Case Studies', 'eBooks', 'Webinars', 'Videos'] }
                tSections={toggleLeft}
                />
              </div>
              <div className={`flex flex-row flex-wrap gap-2`}>
                {post?.categories({first:5})?.edges?.map((category, index) => (
                  <Link key={category.node.name} href={`${category.node.uri}`} passHref>
                    <a className={`tag tag_${category?.node?.name?.toLowerCase().replace(' ','-')} small`} href={`${category.node.uri}`}>{category.node.name}</a>
                  </Link>
                ))}
              </div>
            </div>

            <div className={`w-full lg:w-6/12 flex flex-col gap-5 md:gap-14`}>
              <div className={`${styles.singleInfo}`}>
                <BreadCrumb pageObj={post}/>
                <h1>{post?.title()}</h1>
                <PostDetail author={post?.author} date={post?.date} content={post?.content()} />
                {post.featuredImage &&
                  <div className={`relative py-5 text-center`}>
                    <Image 
                      src={post?.featuredImage?.node?.sourceUrl()}
                      alt={`${post.featuredImage.node.altText ? post.featuredImage.node.altText:post.title()}`}
                      className={`object-cover rounded-lg`}
                      width='674'
                      height='643'
                    />
                  </div>
                }
                <div id={`singleContent`} className={`${styles.content} relative`}>
                  <div dangerouslySetInnerHTML={{ __html: post?.content() ?? '' }} />
                </div>
              </div>
              <PostShare author={post?.author} post={post} isDescription/>
            </div>

            <div className={`w-full lg:w-3/12 hidden lg:flex flex-col gap-5 relative`}>
              {buildPerfect && <BuildPerfect buildPerfect={buildPerfect} />}
              <PostShare author={post?.author} post={post}/>
              <SideNav postCat={post.categories({first:1}).edges[0].node.categoryId}/>
            </div>

          </div>
        </div> 
        
      </section>

    </>
  );
}

export default function Page() {
  const { usePost } = client;
  const post = usePost();

  return <PostComponent post={post} />;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
    notFound: await is404(context, { client }),
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
