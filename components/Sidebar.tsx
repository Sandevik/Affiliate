import Link from 'next/link';
import React from 'react'
import { useTheme } from '../context/ThemeContext';
import style from "../styles/Sidebar.module.css";
import DarkModeBtn from './DarkModeBtn';

interface props{
    menuStatus: boolean;
    toggleMenu: () => void;
}

export default function Sidebar({menuStatus, toggleMenu} :props): JSX.Element {
  const {darkMode} = useTheme();

  return (
    <div className={menuStatus && darkMode ?  `${style.menu} ${style.open} ${style.darkMode}` :menuStatus && !darkMode ? `${style.menu} ${style.open}` :  style.menu}>
        <nav className={style.nav}>
            <ul className={style.ul}>
                <li className={style.li} onClick={toggleMenu}><Link href="/omstartslan">Omstartslån</Link></li>
                <li className={style.li} onClick={toggleMenu}><Link href="/kontakt">Kontakt</Link></li>
            </ul>
        </nav>
        <DarkModeBtn />
    </div>
  )
}
