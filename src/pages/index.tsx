import MainPageLayout from 'components/layouts/MainPageLayout';
import FeaturedPostSection from 'components/sections/FeaturedPostSection';
import Hero from 'components/sections/HeroSection';
import PostsList from 'components/sections/PostsListSection';
import { indexPageQuery } from 'queries/indexPageQuery.gql';
import {
  IndexPageQuery_blogItems,
  IndexPageQuery_categories,
  IndexPageQuery_featured,
  IndexPageQuery_poetryItems,
} from 'queries/types/indexPageQuery';
import apolloClient from 'utils/api/apollo-client';

const mainPageData = {
  title: 'Добро пожаловать в мой персональный блог',
  subtitle: 'Здесь живут мои стихи, песни, путешествия, заметки и фотографий.',
  backgroundImage:
    'https://ik.imagekit.io/ckomop0x/ckomop0x-me/main-page/20180901-DSC_0568-Edit-3_qcFKvrDzNYg.jpg',
};

interface IIndexPage {
  blogItems: IndexPageQuery_blogItems[];
  featured: IndexPageQuery_featured[];
  poetryItems: IndexPageQuery_poetryItems[];
  categories: IndexPageQuery_categories[];
}

export default function IndexPage({
  blogItems,
  featured,
  poetryItems,
  categories,
}: IIndexPage): JSX.Element {
  const [featuredItem] = featured;

  return (
    <MainPageLayout>
      <Hero
        title={mainPageData.title}
        subtitle={mainPageData.subtitle}
        backgroundImage={mainPageData.backgroundImage}
      />
      {featuredItem?.published && (
        <FeaturedPostSection post={featuredItem} categories={categories} />
      )}
      {blogItems?.length && (
        <PostsList
          items={blogItems}
          categories={categories}
          blockTitle="Статьи и публикации"
          blockSubtitle="Каждый новый вкус, запах звук раскрывает нас всё больше и больше и больше! Только так ты сможешь лучше узнать мир и себя. Будь смелее в своих желаниях."
        />
      )}

      {poetryItems?.length && (
        <PostsList
          items={poetryItems}
          categories={categories}
          blockTitle="Стихи и песни"
          blockSubtitle="Пиши, играй, пой, делай то, что тебе нравится и чувствуй вдохновение!"
        />
      )}
    </MainPageLayout>
  );
}

export async function getStaticProps(): Promise<{
  props: IIndexPage;
}> {
  const { data } = await apolloClient.query({
    query: indexPageQuery,
  });
  const { featured, blogItems, poetryItems, categories } = data;

  return {
    props: {
      featured,
      blogItems,
      poetryItems,
      categories,
    },
  };
}
