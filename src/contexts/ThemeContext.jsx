import { createContext, useMemo, useState } from 'react';

const initialValue = {};

export const ThemeContext = createContext(initialValue);

export function ThemeContextProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const value = useMemo(
    () => ({ isDarkTheme, setIsDarkTheme }),
    [isDarkTheme, setIsDarkTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
