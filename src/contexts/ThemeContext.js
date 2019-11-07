import React, { createContext } from 'react';
import useToggleState from '../hooks/useToggleState';

export const ThemeContext = createContext();

export function ThemeProvider(props) {
    const [isDarkMode, toggleTheme] = useToggleState(false);
        // this.state = { isDarkMode: false };
        // this.toggleTheme = this.toggleTheme.bind(this);

    // toggleTheme() {
    //     this.setState({ isDarkMode: !this.state.isDarkMode });
    // }

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )

}