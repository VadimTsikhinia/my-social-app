import React from 'react';
import {NewMessage} from "./NewMessage";
import {addMessageAC, changeNewMessagePageAC} from "../../../../redux/dialogsReducer";

type NewMessageContainer = {
    store:any
}

export const NewMessageContainer = (props: NewMessageContainer) => {
    const state = props.store.getState().messagesPage.newMessageText
    const dispatch = props.store.dispatch

    const onChangeNewMessageHandler = (value: string) => {
        dispatch(changeNewMessagePageAC(value))
    }

    const onClickHandler = () => {
        dispatch(addMessageAC())
        dispatch(changeNewMessagePageAC(''))
    }

    return (
        <NewMessage
            messageValue={state}

            onChangeNewMessageHandler={onChangeNewMessageHandler}
            onClickHandler={onClickHandler}
        />
    );
};

