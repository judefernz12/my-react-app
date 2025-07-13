import React, { useState, useEffect } from 'react';

function Time() {
    const [time, setTime] = useState([new Date()]);

    useEffect(()=>{
        const intervalId=setInterval(()=>setTime(new Date()),1000);


        return () => {
            clearInterval(intervalId);
        };
    },[]);

     function formatTime(){
        //const hours = time.getHours().toString().padStart(2, '0');
        const hours = time.getHours()!==0 ? (time.getHours()%12).toString().padStart(2, '0') : "12";
        const minutes = time.getMinutes().toString().padStart(2, '0');
        const seconds = time.getSeconds().toString().padStart(2, '0');
        const ampm = time.getHours() >= 12 ? 'PM' : 'AM';
        return `${hours}:${minutes}:${seconds} ${ampm}`;
     }
   
    return (
       <div className="to-do-list">
        <h1>{formatTime()}</h1>
            
       </div>
    );
}

export default Time;