import React, { useState, useEffect, useRef } from 'react';

function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            startTimeRef.current = Date.now() - elapsedTime;
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        } else {
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = null;
        }

        return () => {
            clearInterval(intervalIdRef.current);
        };
    },[isRunning]);

    function start(){
        if (!isRunning) {
            setIsRunning(true);
            startTimeRef.current = Date.now() - elapsedTime;
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 1000);
        }
    }

    function stop(){
        if (isRunning) {
            setIsRunning(false);
            clearInterval(intervalIdRef.current);
            intervalIdRef.current = null;
        }
    }
    
    function reset(){
        setIsRunning(false);
        setElapsedTime(0);
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
        
        startTimeRef.current = 0;
    }

    function formatTime() {
        // const totalSeconds = Math.floor(elapsedTime / 1000);
        // const hours = Math.floor(totalSeconds / 3600);
        // const minutes = Math.floor((totalSeconds % 3600) / 60);
        // const seconds = totalSeconds % 60;
        // const milliseconds = Math.floor((elapsedTime % 1000) / 10);
        let hours = Math.floor(elapsedTime / 3600000);
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60000);
        let seconds = Math.floor((elapsedTime / 1000 % 60));
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
    }
   
    return (
       <div className="controls">
        <h1>{formatTime()}</h1>
        <div className="controlsbutton">
            <button onClick={start} className="start-button" disabled={isRunning}>Start</button>
            <button onClick={stop} className="stop-button" disabled={!isRunning}>Stop</button>
            <button onClick={reset} className="reset-button">Reset</button>
            
        </div>   
       </div>
    );
}

export default Stopwatch;