import React from 'react'
import style from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {MessagesPageType} from "../../redux/reduxStore";
import {NewMessageContainer} from "./Message/NewMessage/NewMessageContainer";


type DialogsPropsType = {
    store: any
}

export const Dialogs = (props: DialogsPropsType) => {

    const state: MessagesPageType = props.store.getState().messagesPage

    const dialogItems = state.dialogs && state.dialogs.map(t => <DialogItem
            key={t.id}
            id={t.id}
            name={t.name}
        />
    )

    const messages = state.messages && state.messages.map(t => <Message
            key={t.id}
            id={t.id}
            message={t.message}
        />
    )


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogItems}
            </div>

            <div className={style.messages}>
                <div>
                    {messages}
                </div>
                <NewMessageContainer
                    store={props.store}
                />

            </div>
        </div>
    )
}