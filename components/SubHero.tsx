import React from 'react'
import { useTheme } from '../context/ThemeContext';
import style from "../styles/SubHero.module.css"

interface IProps{
    children: React.ReactNode;
}

export default function SubHero({children}: IProps) {
    const {darkMode} = useTheme();

  return (
    <div className={ darkMode ? `${style.darkMode} ${style.container}`:style.container}>
        {children}
    </div>
  )
}
