import Link from "next/link";
import React from "react";
import style from "../styles/Footer.module.css";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.copy}>
        &copy; <Logo /> 2022
      </div>
      <div className={style.about}>
        <div>
          <strong>Våra tjänster och kundservice</strong>
          <ul className={style.ul}>
            <li><Link href={"/"}>Jämför omstartslån</Link></li>
            <li>Ordlista</li>
            <li>Villkor</li>
          </ul>
        </div>
        <div>
          <strong>Om oss</strong>
          <ul className={style.ul}>
            <li><Link href="/om-oss">Om oss</Link></li>
            <li><Link href={"/kontakt"}>Kontakta oss</Link></li>
            <li>Sidkarta</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
