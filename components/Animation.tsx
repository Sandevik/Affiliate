import React, { useEffect, useState } from "react";
import style from "../styles/AnimationComponent.module.css";

type AnimationType = "slideFromLeft" | "slideFromRight" | "fadeIn";

interface AnimationProps {
  children: React.ReactNode;
  animationType: AnimationType;
  boxHeight?: number;
}

export default function Animation({ children, animationType, boxHeight }: AnimationProps) {
  const [isInViewPort, setIsInViewPort] = useState<boolean>(false);
  const [randId, setRandId] = useState<number>(0);

  function isElementInViewport(el: Element | null) {
    let rect = el
      ? el.getBoundingClientRect()
      : { bottom: 0, left: 0, right: 0, top: 0 };

    return (
      rect.bottom > 0 &&
      rect.top < (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  const generateRandomId = (): void =>{
    setRandId((Math.random()*10000)) 
  }

  useEffect(() => {
    generateRandomId();
    const animate = document.querySelector(`[data-animate="${randId}"]`) as HTMLElement | null;
    animate?.style.setProperty("--Height", `${boxHeight ? boxHeight : "200"}px`);
    console.log(animate);
    const scrollHandler = () => {
      if (isElementInViewport(animate)) setIsInViewPort(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [boxHeight, isInViewPort]);

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
