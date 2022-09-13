import React from 'react';
import { ReactComponent as SunIcon } from '../../../public/icons/sun.svg';
import { ReactComponent as MoonIcon } from '../../../public/icons/moon.svg';
import { ToggleContainer } from './Toggle.styled';

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      {isLight ? <MoonIcon /> : <SunIcon />}
    </ToggleContainer>
  );
};

export default Toggle;
