import { getNextStaticProps, is404 } from '@faustjs/next';
import Head from 'next/head';
import styles from 'scss/pages/category.module.scss';
import { Posts, Pagination } from 'components';
import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { client } from 'client';
import SearchAjax from 'components/UI/SearchAjax';
import CTA from 'components/CTA';
import BasicForm from 'components/Form/BasicForm';

const POSTS_PER_PAGE = 6;

export default function Page() {
  const { useQuery, usePosts, useCategory } = client;
  const { query = {} } = useRouter();
  const { categorySlug, paginationTerm, categoryCursor } = query;
  const generalSettings = useQuery().generalSettings;
  const categoryCTA = useQuery().themeGeneralSettings.lgOptions.category.cta;
  const siteCTA = useQuery().themeGeneralSettings.lgOptions.siteOwner.cta;
  const formCategory = useQuery().themeGeneralSettings.lgOptions.formGroup;
  const category = useCategory();
  const isBefore = paginationTerm === 'before';
  const posts = usePosts({
    after: !isBefore ? (categoryCursor as string) : undefined,
    before: isBefore ? (categoryCursor as string) : undefined,
    first: !isBefore ? POSTS_PER_PAGE : undefined,
    last: isBefore ? POSTS_PER_PAGE : undefined,
  });

  return (
    <>

      <Head>
        <title>Posts - {generalSettings?.title}</title>
      </Head>

      <main className="content content-single pt-20 lg:pt-44">
        <div className={`${styles.searchContainer} container overflow-visible pb-8`}>
          <div className={`flex flex-row flex-wrap lg:flex-nowrap gap-4 md:gap-0 lg:gap-8`}>
            <div className={`w-full lg:w-9/12 hidden lg:flex flex-col gap-5`}>
            </div>
            <div className={`w-full lg:w-3/12 lg:flex flex-col gap-5`}>
              <SearchAjax />
            </div>
          </div>
        </div>

        <div className={`container`}>
          <h1 className={`${styles.catTitle}`}>Category: {category?.name}</h1>
        </div>

        <Posts posts={posts.nodes} />
        <Pagination
          pageInfo={posts.pageInfo}
          basePath={`/category/${categorySlug}`}
        />

        <CTA
          className="home_cta_seriously"
          title={categoryCTA.ctaTitle}
          text={categoryCTA.ctaDescription}
          buttons={categoryCTA.linksObjs}
          images={categoryCTA.ctaImages}
          pt= "md"
          pb= "md"
        />

        <CTA
          fullBg
          bg={siteCTA.bgVariant}
          pt= {siteCTA.ptVariant}
          pb= {siteCTA.pbVariant}
          className="home_cta_seriously"
          title={siteCTA.ctaTitle}
          text={siteCTA.ctaDescription}
          buttons={siteCTA.linksObjs}
          images={siteCTA.ctaImages}
          secondColumn={siteCTA.secondColumn}
          columnsSize={siteCTA.columnsSize}
          sColumnButtons={siteCTA.secondColumnButtons.linksObjs}
        />

        <BasicForm
          title={formCategory.title}
          description={formCategory.description}
          form={formCategory.fielTypes}
          submitBtn={formCategory.submitType}
          bg={formCategory.bgVariant}
          pt={formCategory.ptVariant}
          pb={formCategory.pbVariant}
        />
      </main>

    </>
  );
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
