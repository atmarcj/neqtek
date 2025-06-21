import { useEffect } from 'react';
import { ThemeContext, type Theme } from '@/hooks/use-theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme: Theme = 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    document.body.style.backgroundColor = 'hsl(222, 84%, 4%)';
  }, []);

  const setTheme = () => {}; // No-op since we only support dark mode
  const toggleTheme = () => {}; // No-op

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
