import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.$SM}px) {
    flex-direction: row;
  }
`;

export const ItemImage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ${({ background }: { background?: string }) =>
    background
      ? css`
          .item-image--blurred {
            filter: blur(10px);
            position: absolute;
            z-index: 1;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            opacity: 1;
            background-size: cover;
            background-position: center;
            background-image: url(${background}?tr=w-480);
          }
        `
      : ''}
`;

export const ItemContent = styled.div`
  position: relative;
  padding: 0;
  margin: 16px 0;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: space-between;
`;

export const ItemTitle = styled.h3`
  font-size: 28px;
  text-align: left;
  padding: 16px 0 0;
  margin-bottom: 1rem;
  font-weight: 500;
  line-height: 1;
  margin-top: 0;
`;

export const TextStyled = styled.div`
  text-align: left;
  line-height: 1.3;
  padding: 0 20px;
  font-family: Roboto, sans-serif;
  font-weight: 400;

  p {
    color: #747474;
    font-size: 14px;
  }
`;

export const ItemWrapper = styled.article`
  padding: 0;

  a:hover {
    text-decoration: none;
  }

  .post-content {
    margin: 32px;
    background-color: #f5f5f5c2;
    border-radius: 30px;
    width: 100%;
    box-shadow: 0 2px 3px #0000001c;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 4px 6px #0000001c;
    }
  }

  .item__image {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 2px 3px #00000022;
  }

  .item__date {
    color: #747474;
    text-align: center;
    font-size: 13px;
    padding: 8px 20px;
    background: #fff;
    width: 60%;
    margin: -27px auto 0;
    border-radius: 32px;
  }

  .item__title {
    font-size: 26px;
    text-align: left;
    padding: 10px 20px;
    margin-bottom: 1rem;
    font-weight: 500;
    line-height: 1;
    margin-top: 0;
  }

  .item__content {
    text-align: left;
    line-height: 1.3;
    padding: 0 20px;
    font-family: Roboto, sans-serif;
    font-weight: 400;

    p {
      color: #747474;
      font-size: 14px;
    }

    .link {
      text-align: center;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const PostTitle = styled.h3`
  font-size: 26px;
  text-align: center;
  padding: 20px;
  margin-bottom: 1rem;
  font-weight: 500;
  line-height: 1;
  margin-top: 0;
  border-bottom: 1px solid #88808030;
  width: calc(100% - 40px);
  margin-left: 20px;
`;

export const PostContent = styled.div`
  text-align: left;
  line-height: 1.3;
  padding: 0 20px;
  font-family: sans-serif, sans-serif;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    color: #747474;
    font-size: 13px;
    padding: 20px 0;
  }

  .link {
    text-align: center;
  }
`;
