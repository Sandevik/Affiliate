import React from 'react'
import { useAnimation } from '../../hooks/useAnimation';
import style from "../../styles/AnimationComponent.module.css";

/* 
Om du undrar hur animationen fungerar så kolla på den här länken:
https://github.com/Sandevik/Animation-Plugin
Där har jag förklarat vad man behöver göra för att få den att fungera
*/

type AnimationType = "slideFromLeft" | "slideFromRight" | "fadeIn";
export type BoxHeight = number | undefined;
interface AnimationProps {
  children: React.ReactNode;
  animationType: AnimationType;
  boxHeight?: BoxHeight;
  delay?: number;
  duration?: number;
}

export default function Animation({children, animationType, boxHeight, delay, duration}: AnimationProps) {
    const {inView, randId} = useAnimation({boxHeight, delay, duration});

  return (
    <div className={style.wrapper}>
      <div
      data-animate={randId}
      data-animation={animationType}
      className={ inView ? `${style.animationBox} ${style.inView}` : style.animationBox}
      >
      {children}
    </div>
    </div>
  )
}
