import  { createContext, useContext, useState, useEffect } from 'react';

// Create the Context
const ThemeContext = createContext();

// Custom hook for consuming theme states easily across components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
// Provider Component
export function ThemeProvider({ children }) {
  // Initialize theme from localStorage or default to system preference/light
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      
      // Optional: Fallback to user's system OS dark mode choice
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'light';
  });