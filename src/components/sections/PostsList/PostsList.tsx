import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import React from 'react';

import { INDEX_PAGE_QUERY_categories } from '../../../queries/types/INDEX_PAGE_QUERY';

import Post from './Post';
import { PostsListStyled, AllPostsLink } from './styles';

import { TitleBlock, SubtitleBlock } from 'styles/Typography';

interface IPostsListProps {
  blockTitle: string;
  blockSubtitle: string;
  items: any[];
  categories: INDEX_PAGE_QUERY_categories[];
}

const PostsList: React.FC<IPostsListProps> = ({
  blockTitle,
  blockSubtitle,
  items,
  categories,
}): JSX.Element => {
  const postsCategoryLink = items[0].category ?? '';
  const [postsCategory] = categories.filter(
    (category: any) => category.slug === postsCategoryLink,
  );

  return (
    <section style={{ padding: '0 0 80px' }}>
      <div className="container">
        <TitleBlock>{blockTitle}</TitleBlock>
        <SubtitleBlock>{blockSubtitle}</SubtitleBlock>
        <div className="text-center">
          <PostsListStyled className="row">
            {items.map(
              ({
                id,
                title,
                excerpt,
                published,
                createdAt,
                slug,
                category,
                image_url,
              }: any) => {
                const publicationDate = format(
                  new Date(createdAt),
                  'dd MMMM yyyy',
                  {
                    locale: ruLocale,
                  },
                );
                const [categoryData] = categories.filter(
                  (categoryItem: any) => categoryItem.slug === category,
                );

                return (
                  published && (
                    <Post
                      key={id}
                      id={id}
                      excerpt={excerpt}
                      publicationDate={publicationDate}
                      title={title || ''}
                      slug={slug}
                      category={categoryData}
                      image={image_url || ''}
                    />
                  )
                );
              },
            )}
          </PostsListStyled>
          <AllPostsLink href={postsCategoryLink}>
            <a>Перейти в {postsCategory.name}</a>
          </AllPostsLink>
        </div>
      </div>
    </section>
  );
};

export default PostsList;
