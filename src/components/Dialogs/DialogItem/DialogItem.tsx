import React from 'react';
import style from "./DialogItm.module.css";
import {NavLink} from "react-router-dom";
import {DialogItemType} from "../../../redux/reduxStore";


type dialogItemPropsType = DialogItemType

export const DialogItem = (props: dialogItemPropsType) => {

    const path = `${'/dialogs/'} ${props.id}`

    return (
        <div className={`${style.dialog} ${style.active}`}>
            <NavLink to={`${path}`}>{props.name}</NavLink>
        </div>
    )
}
