/** @jsxImportSource @emotion/react */
'use client'
import {css} from '@emotion/react';
import { Children, ReactNode, useState } from 'react';
import global_css from '../page.module.css'
import Image from 'next/image';

export interface IconButtonType {
    props:{
        width : string,
        height : string,
        border_radius : string,
        backgroundcolor : string,
        iconurl? : string,
        cursor? : string
    },
    children? : JSX.Element
}


export const IconButton = ({props,children} : IconButtonType) =>{
    const [styles,setstyle] = useState(props)
    const [sibling,setsibling] = useState(children)
    //126px 정사각형
    //border-radius : 
    //색깔 #74726b -> #ffffff
    // 변수 : icon, 색깔, 크기
    window.addEventListener('click',()=>{
        console.log('clicked')
    })
    return (
        <div css={css({
            display : 'flex',
            flexDirection : 'row',
            justifyContent :'center',
            alignItems : 'center',
            width : styles.width,
            height : styles.height,
            margin : '0px 10px 0px 10px',
            borderRadius : styles.border_radius,
            backgroundColor : styles.backgroundcolor,
            cursor : styles.cursor
        })} className={global_css.icon_img}>
            {sibling !== undefined ? <>{sibling}</> :null}
            {styles.iconurl !== undefined ?
                <Image
                    sizes = "20vw"
                    width = {50}
                    height = {50}
                    src = {styles.iconurl}
                    alt = 'github'
                    //placeholder='blur' blurimage 있어야됨
                ></Image>
            : null}    
        </div>
    )
}