import React from 'react'
import { useContext } from 'react';
import { ThemeDataContext } from '../context/Themecontext';

const Button = () => {

   const{theme}= useContext(ThemeDataContext)

    const changeTheme=() =>{
      setTheme('dark')
    }
  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Button
