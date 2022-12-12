import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import Animation from "./Animation";
import style from "../../styles/TextTextBlock.module.css";
import Link from "next/link";

interface Props {
  firstHeading: string;
  firstHeadingElement: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  firstContentText: string;
  firstLink?: string;
  firstLinkText?: string;

  secondHeading: string;
  secondHeadingElement: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  secondContentText: string;
  secondLink?: string;
  secondLinkText?: string;
  animate: boolean;
}

export default function TextTextBlock(props: Props) {
  const [firstElement, setFirstElement] = useState<JSX.Element | string>("");
  const [secondElement, setSecondElement] = useState<JSX.Element | string>("");
  const { darkMode } = useTheme();

  useEffect(() => {
    switch (props.firstHeadingElement) {
      case "h1":
        setFirstElement(<h1>{props.firstHeading}</h1>);
        break;
      case "h2":
        setFirstElement(<h2>{props.firstHeading}</h2>);
        break;
      case "h3":
        setFirstElement(<h3>{props.firstHeading}</h3>);
        break;
      case "h4":
        setFirstElement(<h4>{props.firstHeading}</h4>);
        break;
      case "h5":
        setFirstElement(<h5>{props.firstHeading}</h5>);
        break;
      case "h6":
        setFirstElement(<h6>{props.firstHeading}</h6>);
        break;
      default:
        setFirstElement("");
        break;
    }
    switch (props.secondHeadingElement) {
      case "h1":
        setSecondElement(<h1>{props.secondHeading}</h1>);
        break;
      case "h2":
        setSecondElement(<h2>{props.secondHeading}</h2>);
        break;
      case "h3":
        setSecondElement(<h3>{props.secondHeading}</h3>);
        break;
      case "h4":
        setSecondElement(<h4>{props.secondHeading}</h4>);
        break;
      case "h5":
        setSecondElement(<h5>{props.secondHeading}</h5>);
        break;
      case "h6":
        setSecondElement(<h6>{props.secondHeading}</h6>);
        break;
      default:
        setSecondElement("");
        break;
    }
  }, []);
  return (
    <section>
      {props.animate ? (
        <div className={style.wrapper}>
          <Animation animationType="slideFromLeft">
          {firstElement}
            <p>{props.firstContentText} <br /><br />{props.firstLink ? <Link className={style.link} href={props.firstLink}>{props.firstLinkText}</Link> : ""}</p>

          </Animation>
          <Animation animationType="slideFromRight">
          {secondElement}
            <p>{props.secondContentText} <br /><br /> {props.secondLink ? <Link className={style.link} href={props.secondLink}>{props.secondLinkText}</Link> : ""}</p>
          </Animation>
        </div>
      ) : (
        <div className={style.wrapper}>
          <div>
          {firstElement}
            <p>{props.firstContentText} {props.firstLink ? <Link className={style.link} href={props.firstLink}>{props.firstLinkText}</Link> : ""}</p>
          </div>
          <div>
          {secondElement}
            <p>{props.secondContentText} {props.secondLink ? <Link className={style.link} href={props.secondLink}>{props.secondLinkText}</Link> : ""}</p>
            </div>
        </div>
      )}
    </section>
  );
}
