import React, { createContext, useContext, useState, useEffect } from 'react';

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