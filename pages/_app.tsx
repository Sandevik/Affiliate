import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { ThemeContextProvider } from "../context/ThemeContext";
import Footer from "../components/Footer";

export const headerLinks = [
  { title: "Omstartslånet", href: "/" },
  { title: "Guider", href: "/guider"},
  { title: "Kontakt", href: "/kontakt" },
];

export const dropDownLinks = [
  { title: "Kronofogden", href: "/kronofogden"},
  { title: "Omstartslån utan säkerhet", href: "/utan-sakerhet"},
  { title: "Omstartslån utan medsökande", href: "/utan-medsokande"},
  { title: "Omstartslån med många förfrågningar", href: "/med-manga-forfragningar"},
  { title: "Omstartslån med dålig kreditvärdighet", href: "/med-dalig-kreditvardighet"},
  { title: "Omstartslån med skuldsaldo", href: "/med-skuldsaldo"},
  { title: "Omstarslån med anmärkning", href: "/med-anmarkning"} 
]

export const bankLinks = [
  { title: "Likvidum", href: "/likvidum"},
  { title: "Marginalen Bank", href: "/marginalen-bank"},
  { title: "Nstart", href: "/nstart"},
  { title: "Svea Bank", href: "/svea-bank"}
]

export default function App({ Component, pageProps }: AppProps) {
  const [menuStatus, setMenuStatus] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };
  const setMenuFalse = () => {
    setMenuStatus(false);
  }

  return (
    <ThemeContextProvider>
      <Header links={headerLinks} bankLinks={bankLinks} dropDownLinks={dropDownLinks} menuStatus={menuStatus} toggleMenu={toggleMenu} setMenuFalse={setMenuFalse}/>
      <Sidebar bankLinks={bankLinks} dropDownLinks={dropDownLinks} menuStatus={menuStatus} toggleMenu={toggleMenu} />
      <Component {...pageProps}/>
      <Footer />
    </ThemeContextProvider>
  );
}
