import Head from "next/head";
import Image from "next/image";
import Animation from "../components/Animation";
import DarkModeBtn from "../components/DarkModeBtn";
import { useTheme } from "../context/ThemeContext";
import style from "../styles/Page.module.css";

export default function Home() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div
      className={
        darkMode ? `${style.container} ${style.darkmode}` : style.container
      }
    >
      <Head>
        <title>Affiliate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Home</div>
      <DarkModeBtn />

      
      <Animation animationType={"slideFromLeft"} boxHeight={500}>
        <div className={style.slideIn}>from Left</div>
      </Animation>

        {/* TODO: generera random id för varje animation så att båda inte körs samtidigt */}
        {/* TODO: skapa en prop för background-color som tar in string i hex format (Regex) // GÅR INTE */}
        {/* TODO: skapa en prop för height */}

      <Animation animationType={"slideFromRight"}>
        <div className={style.slideIn}>from Right</div>
      </Animation>

      <Animation animationType={"fadeIn"}>
        <div className={style.slideIn}>fade</div>
      </Animation>
      
    </div>
  );
}