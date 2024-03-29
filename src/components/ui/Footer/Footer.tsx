import styled from '@emotion/styled';
import { FC } from 'react';

import projectConfig from '../../../../package.json';

import { themePalette } from 'styles/colors';

interface FooterProps {
  projectTitle: string;
}

const Footer: FC<FooterProps> = ({ projectTitle = '' }) => {
  const currentYear = new Date().getFullYear();
  const footerText = `© ${currentYear} ${projectTitle} v${projectConfig.version}`;

  return (
    <FooterWrapper>
      <FooterCopyright>{footerText}</FooterCopyright>
    </FooterWrapper>
  );
};

export const FooterWrapper = styled.footer`
  margin: auto 0;
  background: hsla(38, 20%, 80%, 1);
  color: ${themePalette.primaryTitle};
  box-sizing: border-box;
  height: 70px;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterCopyright = styled.p`
  font-size: 16px;
  padding: 0;
  margin: 0;
  text-align: center;
`;

export default Footer;
