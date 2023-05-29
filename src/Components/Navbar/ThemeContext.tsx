import React, { ReactNode, createContext, useState } from "react";

export const ThemeContext = createContext<Theme>({} as Theme);

//type Theme = boolean;
//type ThemeContext = {theme:Theme, toggleTheme:()=>void};
//type ThemeProviderProps = {children: ReactNode;};

interface Theme{
    theme: boolean ;
    toggleTheme: () => void;
};
interface ThemeProviderProps {
    children:ReactNode;
};

export const ThemeProvider:React.FC<ThemeProviderProps> = ({children}) => {

    const [theme, setTheme] = useState<Theme['theme']>(false);
    const toggleTheme = () => {
        setTheme(!theme);
    };

    const color = theme === false ? '#333' : '#FFF';
    const background = theme === false ? '#dddaec' : '#373446';

    document.body.style.color = color;
    document.body.style.background = background;

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};