import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { ThemeContextProvider } from "../context/ThemeContext";
import Footer from "../components/Footer";


export default function App({ Component, pageProps }: AppProps) {
  const [menuStatus, setMenuStatus] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };
  const setMenuFalse = () => {
    setMenuStatus(false);
  }
  
  const headerLinks = [
    { title: "Omstartslånet", href: "/" },
    { title: "Guider", href: "/guider"},
    { title: "Kontakt", href: "/kontakt" },
  ];

  const dropDownLinks = [
    { title: "Kronofogden", href: "/kronofogden"},
    { title: "Utan säkerhet", href: "/utan-sakerhet"},
    { title: "Utan medsökande", href: "/utan-medsokande"},
    { title: "Med många förfrågningar", href: "/med-manga-forfragningar"},
    { title: "Med dålig kreditvärdighet", href: "/med-dalig-kreditvardighet"},
    { title: "Med skuldsaldo", href: "/med-skuldsaldo"},
  ]

  return (
    <ThemeContextProvider>
      <Header links={headerLinks} dropDownLinks={dropDownLinks} menuStatus={menuStatus} toggleMenu={toggleMenu} setMenuFalse={setMenuFalse}/>
      <Sidebar dropDownLinks={dropDownLinks} menuStatus={menuStatus} toggleMenu={toggleMenu} />
      <Component {...pageProps}/>
      <Footer />
    </ThemeContextProvider>
  );
}
