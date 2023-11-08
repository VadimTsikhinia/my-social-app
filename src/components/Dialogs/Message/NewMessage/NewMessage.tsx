import React, {ChangeEvent} from 'react';
import style from './NewMessage.module.css'


type newMessagePropsType = {
    messageValue: string
    onChangeNewMessageHandler: (valuse: string) => void
    onClickHandler:()=>void
}


export const NewMessage = (props:newMessagePropsType) => {

    const onChangeHandler = (i: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeNewMessageHandler(i.currentTarget.value)
    }
    const onClickHandler = () => {
        props.onClickHandler()
    }

    return (
        <div className={style.newMessage}>
            <div>
                <textarea
                    value={props.messageValue}
                    onChange={(i)=> onChangeHandler(i)}
                    placeholder={'Enter new message'}
                />

            </div>
            <div>
                <button onClick={onClickHandler}>Send</button>
            </div>
        </div>
    );
};

