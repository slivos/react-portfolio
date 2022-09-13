import React from 'react';
import { NavPanel, Logo, ThemeModeWrapper } from './Header.styled';
import Toggle from '../Toggle/Toggle';

const Header = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <>
      <header>
        <NavPanel lightTheme={isLight}>
          <Logo lightTheme={isLight}>Samuel Slivoš</Logo>
          <ThemeModeWrapper>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </ThemeModeWrapper>
        </NavPanel>
      </header>
    </>
  );
};

export default Header;
