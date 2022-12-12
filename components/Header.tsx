import React from "react";
import style from "../styles/Header.module.css";
import Link from "next/link";
import {CgMenuRightAlt} from "react-icons/cg"
import {AiOutlineClose} from "react-icons/ai"
import Logo from "./Logo";
import DarkModeBtn from "./DarkModeBtn";
import { useTheme } from "../context/ThemeContext";
import {BsChevronDown} from "react-icons/bs";

export interface link{
  title: string;
  href: string;
}

interface props {
  menuStatus: boolean;
  links: link[];
  dropDownLinks: link[];
  toggleMenu: () => void;
  setMenuFalse: () => void;
}

export default function Header({ menuStatus, toggleMenu, links, setMenuFalse, dropDownLinks }: props): JSX.Element {
  const {darkMode} = useTheme()
  return (
    <div className={menuStatus && darkMode ?  `${style.wrapper} ${style.sticky} ${style.darkMode}` :menuStatus && !darkMode ? `${style.wrapper} ${style.sticky}` : !menuStatus && darkMode ?  `${style.wrapper} ${style.darkMode}` : style.wrapper}>
      <nav className={style.header}>
        <Link className={style.logo} href={links[0].href} onClick={setMenuFalse}><Logo/></Link>
        <ul className={style.linkWrapper}>
          <li className={style.dropDownLink}>
            Omstartslån <BsChevronDown className={style.chevron}/>
            <ul className={style.dropDown}>
              {dropDownLinks.map(link => <li key={link.title+"1"} className={style.innerLink}><Link href={link.href}>{link.title}</Link> <BsChevronDown className={style.chevronInner}/></li>)}
            </ul>
          </li>
          {links.map((link, index) => {
            if (index != 0){
              return (
              <li className={style.mainLink} key={link.title}>
                <Link href={link.href}>{link.title}</Link>
              </li>
              )
            }
          })}
          <li><DarkModeBtn /></li>
        </ul>
        <button className={style.menuBtn} onClick={toggleMenu}>
          {menuStatus ? <AiOutlineClose/> : <CgMenuRightAlt />}
        </button>
      </nav>
    </div>
  );
}
