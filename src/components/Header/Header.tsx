import React from "react";
import style from "./Header.module.css"

export const Header = () => {
    return (
        <header className={style.header}>
            <img src={'https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png'} alt={'header-jpg'}/>
        </header>
    )
}