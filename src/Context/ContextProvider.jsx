import { createContext, useContext, useState, useEffect } from 'react';

// 1. Create the Context object
const AppContext = createContext(null);

// 2. Create the Provider Component
export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState('light');
    const [loading, setLoading] = useState(false);

    // Optional: Fetch initial data or check authentication status on mount
    useEffect(() => {
        setLoading(true);
        // Simulate an API call or check localStorage
        const savedTheme = localStorage.getItem('app-theme') || 'light';
        setTheme(savedTheme);
        setLoading(false);
    }, []);

    // State management operations
    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
        localStorage.setItem('app-theme', nextTheme);
    };

    // Define the shared state bundle
    const value = {
        user,
        theme,
        loading,
        login,
        logout,
        toggleTheme
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

// 3. Create a custom hook for clean, error-guarded consumption
export const useApp = () => {
    const context = useContext(AppContext);
    
    // Throw an error if a developer tries to use this hook outside of the Provider wrapper
    if (context === undefined) {
        throw new Error('useApp must be used within an AppProvider');
    }
    
    return context;
};