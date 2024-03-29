import styled from '@emotion/styled';
import { ForwardedRef } from 'react';

export const ButtonWrapper = styled.button<{
  ref?: ForwardedRef<unknown>;
}>`
  transition: box-shadow 0.3s ease;
  box-shadow: 0 2px 3px #0000001c;
  border: 0;
  padding: 10px 20px;
  background: #80312c;
  color: white;
`;
