import React, { useEffect } from "react"
import Header from "./components/Heager/Header"
const tg = window.Telegram.WebApp

function  App(){

    useEffect(()=>{

        tg.ready()
    }, [])


    return(<>
        <Header/>
        </>
    )
}
export default App
