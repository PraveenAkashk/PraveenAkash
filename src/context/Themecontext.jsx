import { createContext, useState, useEffect } from "react";

export const Themecontext = createContext();

export const ThemeProvider=({children})=>{
    const [theme, settheme]=useState("light")

    const toggletheme=()=>{
        settheme((prev)=>(prev==="light" ? "dark" : "light"))
    }

    useEffect(() => {
        // Update body class when theme changes
        document.body.className = theme;
    }, [theme]);

    return(

        <Themecontext.Provider value={{theme, toggletheme}}>
            {children}
        </Themecontext.Provider>
    )
}