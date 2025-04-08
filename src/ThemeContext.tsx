import { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'blue' | 'green';

interface ThemeContextType {
  theme: Theme;
  switchTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  
  const switchTheme = () => {
    setTheme((prevTheme) => {
      switch (prevTheme) {
        case 'light':
          return 'dark';
        case 'dark':
          return 'blue';
        case 'blue':
          return 'green';
        case 'green':
          return 'light';
        default:
          return 'light';
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};