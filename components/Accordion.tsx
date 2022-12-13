import React, {useState} from 'react'
import type { QuestionsAnswer } from './Blocks/FAQ'
import style from "../styles/smallComponents/Accordion.module.css"
import {BsChevronDown} from "react-icons/bs";

interface qA{
    questionAnswer: QuestionsAnswer;
}

export default function Accordion({questionAnswer}: qA) {
    const [open, setOpen] = useState<boolean>(false);
    const {question, answer} = questionAnswer;
    const toggleOpen = () => {
        setOpen(!open);
    }

  return (
    <div className={style.wrapper}>
        <h3 className={style.question} onClick={toggleOpen}>{question} <BsChevronDown className={open ? `${style.chevron} ${style.open}` : style.chevron}/></h3>
        <p className={!open ? `${style.answer} ${style.open}` : style.answer}>{answer}</p>
    </div>
  )
}
