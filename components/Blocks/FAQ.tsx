import React from 'react'
import Accordion from '../Accordion';
import style from "../../styles/smallComponents/Accordion.module.css"


export interface QuestionsAnswer{
  question: string;
  answer: string;
}

interface IProps{
  title?: string;
  questionsAnswers: QuestionsAnswer[];
}

export default function FAQ({title, questionsAnswers}: IProps) {
  return (
    <div>
      <h2 className={style.h2}>{title ? title : "Vanligt ställda frågor"}</h2>
      {
        questionsAnswers.map(qA => (<Accordion key={qA.question} questionAnswer={qA}/>))
      }
    </div>
  )
}
