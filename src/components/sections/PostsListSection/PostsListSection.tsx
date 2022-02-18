import { FC } from 'react';

import {
  AllPostsLink,
  AllPostsLinkButton,
  PostsListSectionWrapper,
} from './styles';

import PostsList from 'components/UI/PostsList';
import {
  IndexPageQuery_categories,
  IndexPageQuery_poetryItems,
} from 'queries/types/indexPageQuery';
import { TitleBlock, SubtitleBlock } from 'styles/Typography';

interface PostsListSectionProps {
  blockTitle: string;
  blockSubtitle: string;
  items: IndexPageQuery_poetryItems[];
  categories: IndexPageQuery_categories[];
}

const PostsListSection: FC<PostsListSectionProps> = ({
  blockTitle,
  blockSubtitle,
  items,
  categories,
}): JSX.Element => {
  const postsCategoryLink = items[0].category ?? '';
  const [postsCategory] = categories.filter(
    (category: IndexPageQuery_categories) =>
      category.slug === postsCategoryLink,
  );

  return (
    <PostsListSectionWrapper>
      <div className="container">
        <TitleBlock>{blockTitle}</TitleBlock>
        <SubtitleBlock>{blockSubtitle}</SubtitleBlock>
        <div className="text-center">
          <PostsList posts={items} categories={categories} />
          <AllPostsLink href={postsCategoryLink}>
            <AllPostsLinkButton>
              Перейти в {postsCategory.title}
            </AllPostsLinkButton>
          </AllPostsLink>
        </div>
      </div>
    </PostsListSectionWrapper>
  );
};

export default PostsListSection;
