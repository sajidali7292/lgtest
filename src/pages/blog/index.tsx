import { getNextStaticProps } from '@faustjs/next';
import { client, OrderEnum, PostObjectsConnectionOrderbyEnum } from 'client';
import { Pagination, Posts, Hero } from 'components';
import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import styles from 'scss/pages/posts.module.scss';

const POSTS_PER_PAGE = 6;

export default function Page() {
  const { query = {} } = useRouter();
  const { postSlug, postCursor } = query;
  const { usePosts, useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  const isBefore = postSlug === 'before';
  const posts = usePosts({
    after: !isBefore ? (postCursor as string) : undefined,
    before: isBefore ? (postCursor as string) : undefined,
    first: !isBefore ? POSTS_PER_PAGE : undefined,
    last: isBefore ? POSTS_PER_PAGE : undefined,
  });
  const postHero = useQuery().themeGeneralSettings.lgOptions.postHero;

  if (useQuery().$state.isLoading) {
    return null;
  }

  return (
    <>
     
      <Head>
        <title>
          {generalSettings.title} - {generalSettings.description}
        </title>
      </Head>

      {postHero && <Hero
        title={postHero.postHeroTitle}
        description = {postHero.postHeroDescription}
        bgImage = {postHero.postHeroImage.mediaItemUrl}
        buttons={postHero.postLinksObjs}
      />}

      <main className="content content-index">
        <Posts
          posts={posts.nodes}
          heading="Blog Posts"
          headingLevel="h2"
          postTitleLevel="h3"
          id={styles.post_list}
        />
        <Pagination pageInfo={posts.pageInfo} basePath="/blog" />
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
