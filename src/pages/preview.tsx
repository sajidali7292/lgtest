import type { Page, Post } from 'client';
import { client } from 'client';
import { PostComponent } from './blog/[postSlug]';
import { PageComponent } from './[...pageUri]';

export default function Preview() {
  const isLoading = client.useIsLoading();
  const { typeName, node } = client.auth.usePreviewNode();

  if (isLoading || node === undefined) {
    return <p>Loading...</p>;
  }

  if (node === null) {
    return <p>Post not found</p>;
  }

  switch (typeName) {
    case 'Page': {
      const page = node as Page;
      return <PageComponent page={page} />;
    }
    case 'Post': {
      const post = node as Post;
      return <PostComponent post={post} />;
    }
    // Add custom post types here as needed
    case 'eBook': {
      const post = node as Post;
      return <PostComponent post={post} />;
    }
    default: {
      throw new Error(`Unknown post type: ${typeName}`);
    }
  }
}
