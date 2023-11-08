
import {v1} from "uuid";
import {actionsTypes, MessagesPageType} from "./reduxStore";

const initialState = {
    dialogs: [
        {id: '1', name: 'Vadimych'},
        {id: '2', name: 'Dimych'},
        {id: '3', name: 'Sveta'},
        {id: '4', name: 'Victor'},
        {id: '5', name: 'Andrey'},
        {id: '6', name: 'Valera'},
    ],
    newMessageText: '',
    messages: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Im fine'},
        {id: '4', message: 'Ok'},
        {id: '5', message: 'Ok'},
        {id: '6', message: 'Ok'},
    ],
}

export const dialogsReducer = (state: MessagesPageType = initialState, action: actionsTypes) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return {
                ...state,
                messages: [
                    {id: v1(), message: state.newMessageText},
                    ...state.messages
                ]
            }
        case "CHANGE-MEW-MESSAGE-PAGE":
            return {
                ...state,
                newMessageText: action.payload.text
            }
        default: return state
    }
}

export type actionsDialogTypes = ReturnType<typeof addMessageAC>
    | ReturnType<typeof changeNewMessagePageAC>

export const addMessageAC = () => {
    return {type: "ADD-MESSAGE"} as const
}
export const changeNewMessagePageAC = (text: string) => {
    return {
        type: "CHANGE-MEW-MESSAGE-PAGE",
        payload: {
            text
        }
    } as const
}