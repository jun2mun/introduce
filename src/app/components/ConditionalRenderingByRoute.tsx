'use client'
import { useEffect, useState } from "react"
import { ContentLayout } from "./ContentLayout"

interface ConditionalRenderingByRouteprops {
    props : string
}

export const ConditionalRenderingByRoute = ({props} :ConditionalRenderingByRouteprops) =>{
    const [nav,setnav] = useState(props)

    // 이거 왜 들어가야하는지 헷갈림
    useEffect(()=>{
        setnav(props)
    },[props])
    console.log(nav)
    
    return (
        <>
            {nav !== undefined ? 
               <>
                    {nav === 'landing' && 
                        <>
                            <p>8월 31일 목요일</p>
                            <p>8:39</p>
                            <p> hi 안녕하세요!</p>
                            <hr></hr>
                        </>
                    }
                    {nav === 'home' &&
                        <>
                            <ContentLayout/>
                        </>
                    }
               </>
            : null}

        </>
    )
}