import React, { useState } from 'react'

const TextMore=({children})=>{
    const text=children;
    const [isTextMore,setIsTextMore]=useState(true);

    const handleText=()=>{
        setIsTextMore(!isTextMore);
    }

    return(
        <p>
            {isTextMore ? text.slice(0,100):text}
            <span
                onClick={handleText}
                className='text'
                style={{color:"green"}}
            >
                {isTextMore ? "...Readmore" : "...Readless"}
            </span>
        </p>
    )
}



function Development() {
  return (
    <div>
        <TextMore>
            During your college days, you must’ve been bombarded with lots of projects and at that point, you will be clueless about why they are forcing us to do projects. But, in real, projects are a great way to hone your skills and shape your career path and they are especially useful if you are into full-stack development.Since web applications play a huge role in this digital era, it is important that your work stands out from the crowd and for that, you need to master frontend development as the first impression is always the best impression. And for that, projects are important and this is going to be all about that, project ideas for frontend development.
        </TextMore>
    </div>
  )
}

export default Development;
