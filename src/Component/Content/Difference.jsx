import { useState } from "react";


const ReadMore=({children})=>{
    const text=children;
    const [isReadmore,setIsReadMore]=useState(true);

    const handleText=()=>{
        setIsReadMore(!isReadmore);
    }
    return(
        <p>
            {isReadmore ? text.slice(0,100):text}
            <span
                className='text'
                onClick={handleText}
                style={{color:"green"}}
            >
                {isReadmore ? "...ReadMore" : "...ReadLess"}
            </span>
        </p>
    )
}

function Difference() {
  return (
    <div>
         <ReadMore>
         In today’s digital age, web development has become a crucial component of the IT industry. Aspiring developers often come across the terms “frontend” and “backend” while exploring the realm of web development.These two pillars play distinct roles in creating functional and visually appealing websites or applications.In this article, we will delve into the differences as 
        </ReadMore>
    </div>
  )
}

export default Difference;
