import { IDetailPageProps } from '../../types/detailPageProps';

import ProjectsLayout from 'components/layouts/PoetryLayout';
import DetailItemComponent from 'components/shared/DetailItem';
import { DETAILS_PAGE_QUERY } from 'queries/detailPageQuery.gql';
import { POSTS_PATH_QUERY } from 'queries/postsPathQuery.gql';
import apolloClient from 'utils/api/apollo-client';

export default function BlogPostPage({
  detailedPost,
}: IDetailPageProps): JSX.Element {
  const { content, created_at, image_url, slug, title, updated_at } =
    detailedPost;
  const socialImage = `${image_url}?tr=w-1080,h-280,fo-top`;
  return (
    <ProjectsLayout
      headTitle={title}
      ogUrl={`https://ckomop0x.me/blog/${slug}/`}
      ogImage={socialImage}
      ogDescription={title}
      twitterCard={title}
    >
      <DetailItemComponent
        title={title}
        created_at={created_at}
        updated_at={updated_at}
        description={(content?.[0]?.rich_text as string) || ''}
        image={image_url}
      />
    </ProjectsLayout>
  );
}

export async function getStaticProps({ params }: any): Promise<any> {
  const { data } = await apolloClient.query({
    query: DETAILS_PAGE_QUERY,
    variables: { category: 'blog', slug: params.slug },
  });
  const [detailedPost] = data.posts;

  return {
    props: {
      detailedPost,
    },
  };
}

export async function getStaticPaths(): Promise<any> {
  const { data } = await apolloClient.query({
    query: POSTS_PATH_QUERY,
    variables: {
      category: 'blog',
    },
  });
  const paths = data.posts.map((slugData: any) => `/blog/${slugData.slug}`);

  return {
    paths,
    fallback: false,
  };
}
