import React from "react";
import style from "../styles/Header.module.css";
import Link from "next/link";
import {CgMenuRightAlt} from "react-icons/cg"
import Logo from "./Logo";
import DarkModeBtn from "./DarkModeBtn";
import { useTheme } from "../context/ThemeContext";

interface link{
  title: string;
  href: string;
}

interface props {
  menuStatus: boolean;
  links: link[];
  toggleMenu: () => void;
}

export default function Header({ menuStatus, toggleMenu, links }: props): JSX.Element {
  const {darkMode} = useTheme()
  return (
    <div className={darkMode ? `${style.wrapper} ${style.darkMode}` : style.wrapper}>
      <nav className={style.header}>
        <Link className={style.logo} href={links[0].href}><Logo/></Link>
        <ul className={style.linkWrapper}>
      
          
          {links.map((link, index) => {
            if (index != 0){
              return (<li key={link.title}>
                <Link href={link.href}>{link.title}</Link>
              </li>)
            }
          })}
          <li><DarkModeBtn /></li>
        </ul>
        <button className={style.menuBtn} onClick={toggleMenu}>
          <CgMenuRightAlt />
        </button>
      </nav>
    </div>
  );
}
