import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { ThemeContextProvider } from "../context/ThemeContext";


export default function App({ Component, pageProps }: AppProps) {
  const [menuStatus, setMenuStatus] = useState<boolean>(false);
  const toggleMenu = () => {
    setMenuStatus(!menuStatus);
  };
  

  const headerLinks = [
    { title: "Omstartslånet", href: "/" },
    { title: "Omstartslån", href: "/omstartslan" },
    { title: "Kontakt", href: "/kontakt" },
  ];

  return (
    <ThemeContextProvider>
      <Header links={headerLinks} menuStatus={menuStatus} toggleMenu={toggleMenu} />
      <Sidebar menuStatus={menuStatus} toggleMenu={toggleMenu} />
      <Component {...pageProps}/>
    </ThemeContextProvider>
  );
}