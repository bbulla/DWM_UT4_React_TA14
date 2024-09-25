import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import './ThemedComponent.css';

const ThemedComponent = () => {
    const { theme } = useThemeContext();

    return (
        <div className={theme === 'light' ? 'themed light' : 'themed dark'}>
            <h1>{theme === 'light' ? 'Tema Claro' : 'Tema Oscuro'}</h1>
            <p>
                Este componente cambia su estilo según el tema seleccionado.
            </p>
        </div>
    );
};

export default ThemedComponent;
