import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
};

const MainContent: React.FC = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={switchTheme}>
        Change theme (Now: {theme})
      </button>
      <h1>A good title</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
        kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
    </div>
  );
};

export default App;