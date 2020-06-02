import React, { createContext, useState, useCallback, useContext } from 'react';

interface ThemeContextData {
  theme: 'light' | 'dark';
  changeTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const chosedTheme = localStorage.getItem('@bergdaniel:theme');

    if (!chosedTheme) {
      localStorage.setItem('@bergdaniel:theme', 'dark');
      return 'dark';
    }

    return chosedTheme as 'light' | 'dark';
  });

  const changeTheme = useCallback(() => {
    // setTheme(theme === 'dark' ? 'light' : 'dark');
    if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('@bergdaniel:theme', 'light');
    } else {
      setTheme('dark');
      localStorage.setItem('@bergdaniel:theme', 'dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  return context;
}
