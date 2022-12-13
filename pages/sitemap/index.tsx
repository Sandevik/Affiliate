import Head from "next/head";
import Link from "next/link";
import React from "react";
import StandardContentBlock from "../../components/Blocks/StandardContentBlock";
import SubHero from "../../components/SubHero";
import { useTheme } from "../../context/ThemeContext";
import style from "../../styles/Page.module.css";

import { bankLinks, dropDownLinks, headerLinks } from "../_app";

export default function Index() {
  const { darkMode } = useTheme();
  return (
    <>
      <Head>
        <title>Sidkarta | Omstartslånet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={
          darkMode ? `${style.container} ${style.darkmode}` : style.container
        }
      >
        <SubHero>
          <h1>Sidkarta</h1>
        </SubHero>

        <section>
          <ul className={style.sitemap}>
            {headerLinks.map((link) => (
              <li key={link.title + "3"}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
            <li>
              <Link href={"/om-oss"}>Om oss</Link>
            </li>
            <li>
              <Link href={"/pontus-wiss"}>Pontus Wiss</Link>
            </li>
          </ul>
        </section>

        <section>
          <ul className={style.sitemap}>
            {dropDownLinks.map((link) => (
              <li key={link.title + "3"}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Lånegivare</h2>
          <ul className={style.sitemap}>
            {bankLinks.map((link) => (
              <li key={link.title + "3"}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
