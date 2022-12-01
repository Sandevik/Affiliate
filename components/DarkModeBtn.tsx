import React, {useContext} from 'react'
import {MdDarkMode, MdOutlineDarkMode} from "react-icons/md"
import { useTheme } from '../context/ThemeContext';
import style from "../styles/DarkmodeBtn.module.css";



export default function DarkModeBtn() {
  const {darkMode, toggleDarkMode} = useTheme();
  return (
    <button onClick={toggleDarkMode} className={darkMode ? `${style.btn} ${style.active}` :style.btn }>{darkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}</button>
  )
}
