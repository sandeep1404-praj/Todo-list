import { useEffect, useState } from 'react'
export const DateTime = () =>{
    const [dateTime,setDateTime]= useState("");
    //date and time
    useEffect(()=>{
        const timeInterval = setInterval(()=>{
            const now = new Date()
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString()
            setDateTime(`${date} - ${time}`)
        },1000)
        return () =>clearInterval(timeInterval)
    },[])
    return(<>
     <h2>{dateTime}</h2>
    </>)
}