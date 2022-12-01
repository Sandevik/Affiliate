import React, { useEffect, useState } from "react";
import { useAnimation } from "../hooks/useAnimation";
import style from "../styles/AnimationComponent.module.css";

type AnimationType = "slideFromLeft" | "slideFromRight" | "fadeIn";

interface AnimationProps {
  children: React.ReactNode;
  animationType: AnimationType;
  boxHeight?: number;
}

export default function Animation({ children, animationType, boxHeight }: AnimationProps) {
  
  const {randId, isInViewPort} = useAnimation(boxHeight)

  return (
    <div
      data-animate={randId}
      data-animation={animationType}
      className={ isInViewPort ? `${style.animationBox} ${style.inView}` : style.animationBox}
      >
      {children}
    </div>
  );
}
