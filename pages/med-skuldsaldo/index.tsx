import Head from 'next/head'
import React from 'react'
import StandardContentBlock from '../../components/Blocks/StandardContentBlock'
import SubHero from '../../components/SubHero'
import { useTheme } from '../../context/ThemeContext'
import style from "../../styles/Page.module.css"

export default function Index() {
  const {darkMode} = useTheme()
  return (
    <>
    <Head>
        <title>Omstartslån utan säkerhet | Omstartslånet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={darkMode ? `${style.container} ${style.darkmode}` : style.container}>
      <SubHero>
        <h1>Omstartslån med skuldsaldo</h1>
        <p>Här är allt du behöver veta </p>
      </SubHero>

      
    </div>
    </>
  )
}