import React from 'react'
import style from "../styles/Sidebar.module.css";
import DarkModeBtn from './DarkModeBtn';

interface props{
    menuStatus: boolean;
    toggleMenu: () => void;
}

export default function Sidebar({menuStatus, toggleMenu} :props): JSX.Element {

  return (
    <div className={menuStatus ? `${style.menu} ${style.open}` : style.menu}>
        <nav>
            <ul>
                <li>a</li>
                <li>b</li>
            </ul>
        </nav>
        <DarkModeBtn />
    </div>
  )
}
