'use client'
import { useState, useEffect } from 'react';
import { ConditionalRenderingByRoute } from './ConditionalRenderingByRoute';

export interface ConditionalRenderingWhenKeyeventprops {
    props : boolean
}
export const ConditionalRenderingWhenKeyevent = ({props} : ConditionalRenderingWhenKeyeventprops) =>{
    const [keydown,setkeydown] = useState(props)
    const [category,setCategory] = useState('home')
    useEffect(() => {
      window.addEventListener('keydown', handlekeyDown);
      return () => {
        window.removeEventListener('keydown', handlekeyDown); //clean up
      };
    }, []);
  
  const handlekeyDown = (e : KeyboardEvent ) => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
      if (e.key === 'ArrowDown' || e.key === 'PageDown'){
        console.log(e.key)
        setkeydown(true)
      }
      else {
        
      }
    };
  return (

    <>
        {keydown !== false ?
            <>
              <ConditionalRenderingByRoute props='home'/>
            </>
        :
          <>
            <ConditionalRenderingByRoute props='landing'/>
          </>
        }
    </>
  )
}
