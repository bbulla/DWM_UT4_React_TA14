import React from 'react';
import { useThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { toggleTheme } = useThemeContext();

    return (
        <button onClick={toggleTheme}>
            Cambiar Tema
        </button>
    );
};

export default ThemeToggle;
