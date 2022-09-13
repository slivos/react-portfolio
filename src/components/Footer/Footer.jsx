import React from 'react';
import { FooterElement } from './Footer.styled';

const Footer = ({ theme }) => {
  const isLight = theme === 'light';

  return (
    <FooterElement lightTheme={isLight}>
      <small>
        Designed and created by{' '}
        <a
          href="http://github.com/slivos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Samuel Slivoš</span>
        </a>
        , 2022
      </small>
    </FooterElement>
  );
};

export default Footer;
