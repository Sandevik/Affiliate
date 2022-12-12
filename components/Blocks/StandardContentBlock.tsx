import React, {useState, useEffect} from 'react'
import { useTheme } from '../../context/ThemeContext';
import style from "../../styles/StandardContentBlock.module.css"
interface Props{
    headingText?: string;
    headingElement?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    children: React.ReactNode;
}

export default function StandardContentBlock({headingText, headingElement, children}:Props) {
    const[element, setElement] = useState<JSX.Element | string>("");
    const{darkMode} = useTheme();

    useEffect(() => {
        switch(headingElement) {
            case "h1":
                 setElement(<h1>{headingText}</h1>)
                break;
            case "h2":
                setElement(<h2>{headingText}</h2>)
                break;
            case "h3":
                setElement(<h3>{headingText}</h3>)
                break;
            case "h4":
                setElement(<h4>{headingText}</h4>)
                break;
            case "h5":
                setElement(<h5>{headingText}</h5>)
                break;
            case "h6":
                setElement(<h6>{headingText}</h6>)
                break;
            default:
                setElement("");
                break;
        }
    }, [])
    
  return (
    <section className={darkMode ? `${style.container} ${style.darkMode}` : style.container}>
       {element}
       <p>{children}</p>
    </section>
  )
}
