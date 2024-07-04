import React, { useEffect, useState } from 'react'

function Stopwatch() {

    const [time, setTime] = useState(0)
    const [toggle, setToggle] = useState(false)

    useEffect(() =>{
        let intervalId ;

        if(toggle){
            intervalId = setInterval(() => {
                setTime(prev => prev+1)
            }, 1000);
        }else{
            clearInterval(intervalId)
        }

        return () => clearInterval(intervalId)
    },[toggle])

    const startStop = () =>{
        setToggle((prev) => !prev)
    }

    const reset = () =>{
        setTime(0)
        setToggle(false)
    }

    const format = (time) =>{
        const minute = Math.floor(time /60);
        const second = time %60;
        return `${minute}:${second<10 ? "0" : ""}${second}`

    }

  return (
    <div>
        <h1>Stopwatch</h1>
        <p>Time: {format(time)}</p>
        <button onClick={startStop}>{!toggle ? "Start" : "Stop"}</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Stopwatch