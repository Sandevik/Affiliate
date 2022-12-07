import React from 'react'
import style from "../../styles/PictureText.module.css"

interface Props{
    children: React.ReactNode;
    pictureNode: 1 | 2;
    imgUrl: string;
    imgAlt?: string;
    flipImage?: boolean;
    height: number;
    padding?: number;
    background?: string;
}

export default function PictureAndTextBlock({children, pictureNode, imgUrl, imgAlt, padding, background, height, flipImage}:Props) {
  const flip = flipImage ? `scaleX(-1)` : "none";
  return (
    <div className={style.wrapper} style={{backgroundColor: background, paddingBlock: padding}}>
        {pictureNode === 1 ? <><img className={style.img} style={{transform: flip}} height={height} src={imgUrl} alt={imgAlt}/> <div>{children}</div></>: <><div>{children}</div><img className={style.img} style={{transform: flip}} height={height} src={imgUrl} alt={imgAlt}/></>}
    </div>
  )
}
