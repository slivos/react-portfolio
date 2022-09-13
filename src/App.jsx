import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme';
import { GlobalStyles } from './theme/globalStyles';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainCard from './components/MainCard/MainCard';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <div className="App">
        <GlobalStyles />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <MainCard />
        <Footer theme={theme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
