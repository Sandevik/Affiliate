import React from 'react'
import style from "../styles/Hero.module.css"
import {RiRestartLine} from "react-icons/ri"
import { useTheme } from '../context/ThemeContext'

export default function Hero() {
  const {darkMode} = useTheme()
  return (
    <div className={darkMode? `${style.darkMode} ${style.container}`:style.container}>
        <div className={style.h1}>
          <h1>Jämför omstartslån</h1>
          <p className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum atque distinctio libero sapiente placeat ad consequatur. Libero fuga, minus distinctio similique dolore provident ad aliquid numquam ullam, quae asperiores illum.</p>
          <h3>Punktlista</h3>
          <ul className={style.list}>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
          </ul>
          <button className={style.cta}><a href="https://likvidum.se" target="_blank">Jämför nu</a></button>
        </div>
        <RiRestartLine className={darkMode? `${style.darkMode} ${style.icon}`:style.icon}/>
    </div>
  )
}
