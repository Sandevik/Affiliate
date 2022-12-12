import React from 'react'
import {RiRestartLine} from "react-icons/ri"
import style from "../styles/smallComponents/Logo.module.css"


export default function Logo() {
  return (
    <div className={style.logo}><RiRestartLine className={style.icon}/><div className={style.text}>mstartslånet</div></div>
  )
}
