import { useEffect, useState } from "react"
import styles from "../page.module.css"
import { IconButton } from "./IconButton"
interface ContentLayoutType {
    props? : string
}

export const ContentLayout = ({props} : ContentLayoutType) =>{
    const [nav,setnav] = useState(props)
    
    // 이거 왜 들어가야하는지 헷갈림
    useEffect(()=>{
        setnav(props)
    },[props])
    console.log(nav)

    const [icon,seticon] = useState(["/github.png","/linkdin.png",
    "/tistory.png",undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined])
    useEffect(() => {
      seticon(icon)
      console.log(icon)
    },[icon])

    const [category,setcategory] = useState(['about','project'])

    // any 타입 바꾸기
    const data :any= {
        'about' : '/introduce.png',
        'project' : '/project.png'
    }
    return (
        <>
            <div className={styles.layout}>
                <div className={styles.gridlayout}>
                    <div className={styles.griditem}>
                        Front-End <br/> Developer
                    </div>
                    <div className={styles.griditem}>
                        {/* 부제목  */}
                    </div>

                    {/* 콘텐츠  */}
                    <div className={styles.griditem}>
                        <div style={{display:'flex'}}>
                            {category !== undefined ? category.map((element :string,index :number)=>{
                                return (
                                    <>
                                        <div style={{display :'flex',flexDirection:'column',alignItems:'center'}}>
                                            <IconButton props = {{
                                                width : '10vw',
                                                height : '20vh',
                                                border_radius : '30px',
                                                backgroundcolor : 'rgba(116, 114, 107, 0.23)',
                                            }}>
                                                <IconButton props = {{
                                                    width : '8vw',
                                                    height : '16vh',
                                                    border_radius : '30px',
                                                    backgroundcolor : 'rgba(255, 255, 255, 1)',
                                                    iconurl : data[element],
                                                    cursor : 'pointer'
                                                }}/>

                                            </IconButton>
                                            <div> {element} </div>
                                        </div>
                                        
                                    </>
                                )
                            }) : null}
                        </div>
                        

                        
                    </div>
                </div>

                <div className={styles.footerlayout}>
                    <IconButton props = {{
                            width : '90vw',
                            height : '15vh',
                            border_radius : '30px',
                            backgroundcolor : 'rgba(116, 114, 107, 0.23)',
                        }}>
                            <>
                            {icon !== undefined ? icon.map((element :string | undefined,index :number)=>{
                                return (
                                    <>
                                        {element !== undefined &&
                                                <>
                                                    <div key={index}> {/* 여기 div 문제있을 수 있다고 생각 */}
                                                        <IconButton props = {{
                                                        width : '6vw',
                                                        height : '12vh',
                                                        border_radius : '30px',
                                                        backgroundcolor : 'rgba(255, 255, 255, 1)',
                                                        iconurl : element,
                                                        cursor : 'pointer'
                                                        }}/>
                                                    </div>
                                                </>
                                        }
                                        {element === undefined &&
                                            <>
                                            <div key={index}> {/* 여기 div 문제있을 수 있다고 생각 */}
                                                <IconButton props = {{
                                                width : '6vw',
                                                height : '12vh',
                                                border_radius : '30px',
                                                backgroundcolor : '#74726b',
                                                }}/>
                                            </div>
                                            </>
                                        }
                                    </>
                                )
                                
                            }) : null}

                            </>

                    </IconButton>
                </div>
            </div>


        </>
    )
}