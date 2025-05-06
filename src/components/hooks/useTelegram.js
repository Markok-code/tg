const tg = window.Telegram.WebApp


export function useTelegram(){


    const tg = window.Telegram.WebApp


    const onClose = () =>{
        tg.close()
    }


    const onTodleButton = () =>{
        if(tg.MainButton.isVisible){
            tg.MainButton.hide()
        }else{
            tg.MainButton.show()
        }
    }


    return{
        onTodleButton,
        tg,
        user: tg?.initDataUnsafe?.user,
        onClose,
    }
}