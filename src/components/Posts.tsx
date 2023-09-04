import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Post } from 'client';
import styles from 'scss/components/Posts.module.scss';
import Heading, { HeadingProps } from './Heading';

interface Props {
  posts: Post[] | undefined;
  intro?: string;
  id?: string;
  heading?: string;
  headingLevel?: HeadingProps['level'];
  postTitleLevel?: HeadingProps['level'];
  readMoreText?: string;
}

function Posts({
  posts,
  intro,
  heading,
  id,
  headingLevel = 'h1',
  postTitleLevel = 'h2',
  readMoreText = 'Read more',
}: Props): JSX.Element {

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <section className={`${styles['posts-block']} container pb-10 md:pb-16`} {...(id && { id })}>
      {heading && (
        <Heading level={headingLevel} className={styles.heading}>
          {heading}
        </Heading>
      )}
      {intro && <p className={styles.intro}>{intro}</p>}
      <div className="posts grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
        {posts.map((post) => (
          <div
          className={`${styles.single} flex flex-col`}
          key={post.id ?? ''}
          id={`post-${post.id}`}
          >
            <div className={`${styles.topWrap}`}>
              <Link href={`${post.uri}`}>
                <a>
                  <div className={`relative pb-5 text-center`}>
                    <Image 
                      src={post?.featuredImage?.node?.sourceUrl()}
                      alt={`${post?.featuredImage?.node.altText ? post?.featuredImage?.node.altText:post.title()}`}
                      className={`object-cover rounded-lg`}
                      width='674'
                      height='400'
                    />
                  </div>
                </a>
              </Link>
            </div>
            <div className={`${styles.bottomWrap} flex flex-col flex-1`}>
              <Heading level={postTitleLevel} className={`${styles.title}`}>
                <Link href={`${post.uri}`}>
                  <a>{post.title()}</a>
                </Link>
              </Heading>
              <div
                className={`${styles.excerpt} flex-1`}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: post?.excerpt()?.substring(0,140) ?? '' }}
              />
              <Link href={`${post.uri}`}>
                <a aria-label={`Read more about ${post.title || 'the post'}`}
                className={`flex gap-3 ${styles.url}`}>
                  {readMoreText}
                  <i className={`dashicons dashicons-arrow-right-alt text-md`}></i>
                </a>
              </Link>
            </div>
          </div>
        ))}
        {posts && posts?.length < 1 && <p>No posts found.</p>}
      </div>
    </section>
  );
}

export default Posts;
