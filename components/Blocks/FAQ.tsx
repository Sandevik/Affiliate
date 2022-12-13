import React from 'react'
import Accordion from '../Accordion';
import style from "../../styles/smallComponents/Accordion.module.css"

/*
  Tar in värden så här:
  const titel = "exempel titel"

  const questionsAndAnswer = 
  [
    {
      question: "Fråga 1",
      answer: "svar 1"
    },
    {
      question: "Fråga 2",
      answer: "svar 2"
    },
  ]

  Viktigt! Detta ska ligga i prop där <FAQ /> taggen ligger, 
  titel kan tas bort och kommer då ersättas med "Vanligt ställda frågor"

  Exempel på implementation:
  <FAQ title={titel} questionsAnswers={questionsAndAnswer} />
*/

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
