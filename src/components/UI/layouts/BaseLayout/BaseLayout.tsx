import { ReactNode } from 'react';
import styled from 'styled-components';

import Footer from 'components/UI/Footer';
import SEO from 'components/UI/SEO';
import { ISEOProps } from 'components/UI/SEO/SEO';
import { GlobalStyle } from 'styles/GlobalStyle';

export interface IBaseLayoutProps extends ISEOProps {
  children?: ReactNode | ReactNode[];
  className?: string;
}

export default function BaseLayout({
  /* Primary meta settings */
  author,
  articleAuthor,
  headTitle,

  /* Facebook Open Graph */
  fbAppId,
  ogImage,
  ogType,
  ogTitle,
  ogUrl,
  ogImageWidth,
  ogImageHeight,
  ogDescription,
  ogLocale,
  ogSiteName,

  /* Twitter Open Graph */
  twitterCard,
  twitterSite,
  twitterCreator,
  twitterTitle,

  /* Layout specific */
  children,
}: IBaseLayoutProps) {
  return (
    <BaseLayoutWrapper>
      <GlobalStyle />
      <SEO
        /* Primary meta settings */
        author={author}
        articleAuthor={articleAuthor}
        headTitle={headTitle}
        /* Facebook Open Graph */
        fbAppId={fbAppId}
        ogImage={ogImage}
        ogType={ogType}
        ogTitle={ogTitle}
        ogUrl={ogUrl}
        ogImageWidth={ogImageWidth}
        ogImageHeight={ogImageHeight}
        ogDescription={ogDescription}
        ogLocale={ogLocale}
        ogSiteName={ogSiteName}
        /* Twitter Open Graph */
        twitterCard={twitterCard}
        twitterSite={twitterSite}
        twitterCreator={twitterCreator}
        twitterTitle={twitterTitle}
      />
      {children}
      <Footer />
    </BaseLayoutWrapper>
  );
}

export const BaseLayoutWrapper = styled.div`
  min-height: 100vh;
`;