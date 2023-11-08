import {combineReducers, createStore} from "redux";
import {actionsProfileTypes, profileReducer} from "./profileReducer";
import {actionsDialogTypes, dialogsReducer} from "./dialogsReducer";
import {navBarReducer} from "./navBarReducer";


export type DialogItemType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}
export type PostType = {
    id: string,
    message: string
    likeCount: number
    edit: boolean
}
export type NavLinkType = {
    url: string
    title: string
}
export type FriendType = {
    id: string
    name: string
    avatar: string
}


export type DialogsType = Array<DialogItemType>
export type MessagesType = Array<MessageType>
export type PostsType = Array<PostType>
export type NavLinksType = Array<NavLinkType>
export type FriendsType = Array<FriendType>


export type NavBarType = {
    navLinks: NavLinksType
    friends: FriendsType
}
export type MessagesPageType = {
    dialogs: DialogsType
    messages: MessagesType
    newMessageText: string
}
export type ProfilePage = {
    newPostText: string
    posts: PostsType
    activePostId: string
}

export type StateType = {
    messagesPage: MessagesPageType
    profilePage: ProfilePage
    navBar: NavBarType
}


export type actionsTypes = actionsProfileTypes | actionsDialogTypes



export const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    navBar: navBarReducer
})

export const store = createStore(reducers)