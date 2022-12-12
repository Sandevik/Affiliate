import React from 'react'
import StandardContentBlock from '../../components/Blocks/StandardContentBlock'
import SubHero from '../../components/SubHero'
import { useTheme } from '../../context/ThemeContext'
import style from "../../styles/Page.module.css"

export default function Index() {
  const {darkMode} = useTheme()
  return (
    <div className={darkMode ? `${style.container} ${style.darkmode}` : style.container}>
      <SubHero>
        <h1>Om oss</h1>
        <p>Här är allt du behöver veta </p>
      </SubHero>

      
    </div>
  )
}