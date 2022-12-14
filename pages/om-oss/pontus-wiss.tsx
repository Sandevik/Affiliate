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
        <title>Pontus Wiss | Omstartslånet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: 
        `
        {
          "@context": "http://www.schema.org",
          "@type": "person",
          "name": "Pontus Wiss",
          "description": "Pontus har jobbat i finansbranschen sedan 2015, både på en långivare och ett av Sveriges största affiliatenätverk.",
          "knowsAbout": "personal finance",
          "worksFor": "Likvidum AB",
          "affiliation": "Likvidum AB",
          "memberOf": "Likvidum AB",
          "brand": "Likvidum AB",
          "jobTitle": "Head of online sales",
          "gender": "male",
          "url": "https://omstartslanet.se/om-oss/pontus-wiss/",
          "sameAs": [
            "https://www.linkedin.com/in/pontus-wiss-13991469/",
            "https://likvidum.se/om-oss/pontus-wiss/"
          ],
          "image": "https://secure.gravatar.com/avatar/cb30048ac84377123a4e22e9cbe304ac?s=96&d=mm&r=g",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Arenavägen 27",
            "addressLocality": "Johanneshov",
            "postalCode": "121 77",
            "addressCountry": "Sweden"
          },
          "workLocation": "Johanneshov",
          "email": "pontus.wiss@likvidum.se",
          "birthDate": "1986-05-09",
          "nationality": "Sweden",
          "telephone": "08-121 314 71"
      }
        `
        }}/>


    </Head>
    <div className={darkMode ? `${style.container} ${style.darkmode}` : style.container}>
      <SubHero>
        <h1>Om Pontus Wiss</h1>
        <p>Här är allt du behöver veta </p>
      </SubHero>

      
    </div>
    </>
  )
}