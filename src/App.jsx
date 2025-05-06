import React, { useEffect } from "react"
import Header from "./components/Heager/Header"
import { useTelegram } from "./components/hooks/useTelegram"

function  App(){

    const {onTodleButton, tg} = useTelegram()
    

    useEffect(()=>{

        tg.ready()
    }, [])


    return(<>
        <Header/>
        <button onClick={onTodleButton} > togle</button>
        </>
    )
}
export default App
