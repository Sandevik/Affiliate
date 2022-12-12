import Link from "next/link";
import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext";
import style from "../styles/Sidebar.module.css";
import DarkModeBtn from "./DarkModeBtn";
import type { link } from "./Header";

interface props {
  menuStatus: boolean;
  toggleMenu: () => void;
  dropDownLinks: link[];
  bankLinks: link[];
}

export default function Sidebar({menuStatus, toggleMenu, dropDownLinks, bankLinks}: props): JSX.Element {
  const { darkMode } = useTheme();
  const [subMenu, setSubMenu] = useState<boolean>(false);
  const toggleSubMenu = () => {
    setSubMenu(!subMenu);
  }

  return (
    <div className={menuStatus && darkMode ? `${style.menu} ${style.open} ${style.darkMode}` : menuStatus && !darkMode ? `${style.menu} ${style.open}` : style.menu}>
      <nav className={style.nav}>
        <ul className={style.ul}>
          <li className={`${style.li} ${style.dropDown}`} onClick={toggleSubMenu}>
              <div>Omstartslån <BsChevronDown className={style.chevron} /></div>
              <ul className={subMenu ? `${style.dropDownLinks} ${style.active}` : style.dropDownLinks}>
                {dropDownLinks?.map((link) => (
                  <li key={link.title+"2"} className={style.innerLink} onClick={toggleMenu}>
                    <Link href={link.href}>{link.title}</Link>
                    <BsChevronDown className={style.chevronInner} />
                  </li>
                ))}
              </ul>
          </li>
          <li className={`${style.li} ${style.dropDown}`} onClick={toggleSubMenu}>
              <div>Långivare <BsChevronDown className={style.chevron} /></div>
              <ul className={subMenu ? `${style.dropDownLinks} ${style.active}` : style.dropDownLinks}>
                {bankLinks?.map((link) => (
                  <li key={link.title+"2"} className={style.innerLink} onClick={toggleMenu}>
                    <Link href={link.href}>{link.title}</Link>
                    <BsChevronDown className={style.chevronInner} />
                  </li>
                ))}
              </ul>
          </li>
          <li className={style.li} onClick={toggleMenu}>
            <Link href="/guider">Guider</Link>
          </li>
          <li className={style.li} onClick={toggleMenu}>
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
      <DarkModeBtn />
    </div>
  );
}
