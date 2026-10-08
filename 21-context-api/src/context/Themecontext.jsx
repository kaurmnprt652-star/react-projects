import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
export const ThemeDataContext =createContext();

const Themecontext = (props) => {
    
   const[theme,setTheme]=useState('light')
  return (
    <div>
     
       <ThemeDataContext.Provider value={[theme,set]}>
         {props.children}
       </ThemeDataContext.Provider>
    
    </div>
  )
}

export default Themecontext
