import Link from 'next/link';
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

export const ItemWrapper = styled.article`
  padding: 0;

  a:hover {
    text-decoration: none;
  }

  .post-content {
    position: relative;
    margin: 32px;
    background-color: #f5f5f5c2;
    border-radius: 30px;
    width: 100%;
    box-shadow: 0 2px 3px #0000001c;
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 8px 10px #0000001c;
    }
  }

  .item__image {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 2px 3px #00000022;
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10;
  font-size: 23px;
  text-align: center;
  min-height: 80px;
  width: 100%;
  padding: 0 100px 0 20px;
  color: #513b34;
  font-weight: 500;
  line-height: 1;
  border-radius: 0 0 20px 20px;
  margin: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.87);
`;

export const PostDate = styled.div`
  position: absolute;
  box-sizing: border-box;
  z-index: 20;
  right: 0;
  bottom: 0;
  color: #747474;
  text-align: center;
  font-size: 13px;
  height: 80px;
  background: #fff;
  width: 80px;
  border-radius: 0 0 20px 0;

  span {
    display: block;
    padding: 0;
    margin: 0;
  }
  span:first-child {
    display: block;
    font-size: 22px;
    padding: 4px 0 0 0;
    color: #513b34;
  }
`;