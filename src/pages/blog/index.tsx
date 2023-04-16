import styled from '@emotion/styled';
import { NextPage } from 'next';

import InnerPageLayout from 'components/layouts/InnerPageLayout';
import PostsList from 'components/ui/PostsList';
import { categoryPageQuery } from 'queries/categoryPageQuery.gql';
import { TitleBlock, SubtitleBlock } from 'styles/Typography';
import { CategoryInterface, CategoryPageProps } from 'types';
import apolloClient from 'utils/api/apollo-client';

const CATEGORY: CategoryInterface = 'blog';
const LIMIT = 100;
const TITLE = 'Статьи и публикации';
const SUB_TITLE = 'Статьи и публикации на разные темы.';
const EMPTY_PAGE_MESSAGE = 'Здесь ещё ничего нет или что-то пошло не так. 😎';

const BlogPage: NextPage<CategoryPageProps> = ({ posts }): JSX.Element => (
  <InnerPageLayout
    headTitle={TITLE}
    ogUrl={CATEGORY}
    ogDescription={TITLE}
    twitterCard={SUB_TITLE}
  >
    <BlogPageWrapper>
      <div className="container">
        <TitleBlock>{TITLE}</TitleBlock>
        <SubtitleBlock>{SUB_TITLE}</SubtitleBlock>
        {posts ? <PostsList posts={posts} /> : EMPTY_PAGE_MESSAGE}
      </div>
    </BlogPageWrapper>
  </InnerPageLayout>
);

export async function getStaticProps(): Promise<{
  props: CategoryPageProps;
}> {
  const {
    data: { posts },
  } = await apolloClient.query({
    query: categoryPageQuery,
    variables: {
      category: CATEGORY,
      limit: LIMIT,
    },
  });

  return {
    props: {
      posts: posts.data,
    },
  };
}

export const BlogPageWrapper = styled.div`
  padding: 40px 0;
  min-height: calc(100vh - 130px);
`;

export default BlogPage;
