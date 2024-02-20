import React, { useState } from 'react'

const ReadMore=({children})=>{
    const text=children;
    const [isReadMore,setIsReadMore]=useState(true);

    const Toggletext=()=>{
        setIsReadMore(!isReadMore)
    }
    return(
       
            <p>
                {isReadMore ? text.slice(0,100):text}
                <span
                    onClick={Toggletext}
                    className='text'
                    style={{color:"green"}}
                >
                    {isReadMore ? "...Readmore":"...Readless"}
                </span>
            </p>

    )
}
function Content() {
  return (
    <div>
        <ReadMore>
            In the swiftly evolving landscape of technology, backend development stands as an important foundation that powers the web and mobile applications we rely on daily. As we step into 2024, backend development continues to expand, embracing new technologies, frameworks, and methodologies that promise to redefine how digital services are delivered. 
        </ReadMore>
    </div>
  )
}

export default Content;
