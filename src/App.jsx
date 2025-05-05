import React, { useEffect } from "react"

const tg = window.Telegram.WebApp

function  App(){

    useEffect(()=>{

        tg.ready()
    }, [])

    const onClose = () =>{
        tg.close()
    }

    return(<>
        <div>gfjggd</div>
        <button onClick={onClose} > Закрить</button>
        </>
    )
}
export default App
