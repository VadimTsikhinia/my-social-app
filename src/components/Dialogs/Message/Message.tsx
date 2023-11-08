import React from 'react';
import style from "./Message.module.css";
import {MessageType} from "../../../redux/reduxStore";

type messagePropsType = MessageType

export const Message = (props: messagePropsType) => {
    return (
        <div className={style.message}>[{props.id}]: {props.message}</div>
    )
}

