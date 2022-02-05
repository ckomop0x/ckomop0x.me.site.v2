import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { LinkStyled } from 'components/UI/Nav/styles';

interface MenuItemProps {
  linkSrc: string;
  title: string;
}

export default function MenuItem({
  linkSrc,
  title,
}: MenuItemProps): JSX.Element {
  return (
    <MenuItemWrapper>
      <Link href={linkSrc} passHref>
        <LinkStyled>{title}</LinkStyled>
      </Link>
    </MenuItemWrapper>
  );
}

export const MenuItemWrapper = styled.li`
  list-style: none;
`;