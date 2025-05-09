import React from "react";
import Button from "../Buttons/Buttons";
import { useTelegram } from "../hooks/useTelegram";

const Header = (props) =>{

    const { user, onClose} = useTelegram()


    return (
       
        <div className={'header'} >
            <Button  onClick={onClose}> Закрить</Button>
            <span className={'username'}>
            {user?.username}
            </span>
        </div>
        
    )
}



export default Header