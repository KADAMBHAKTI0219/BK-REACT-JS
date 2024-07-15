// cpc:- create,providing,consume

import { createContext, useState } from "react";

//create
export const themechange=createContext()
//provide
export const ThemeChangeProvider=({children})=>{
  // logical
    const [theme,setTheme]=useState('light')
    const themeUpdaterFunction = ()=>{
      return  setTheme(theme=='light'?'dark':'light')
    }
    return(
        <themechange.Provider value={{theme,themeUpdaterFunction}}>{children}</themechange.Provider>
        )
}