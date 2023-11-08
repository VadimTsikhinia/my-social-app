import {actionsDialogTypes, dialogsReducer} from "./dialogsReducer";
import {actionsProfileTypes, profileReducer} from "./profileReducer";

//
// export type DialogItemType = {
//     id: string
//     name: string
// }
// export type MessageType = {
//     id: string
//     message: string
// }
// export type PostType = {
//     id: string,
//     message: string
//     likeCount: number
//     edit: boolean
// }
// export type NavLinkType = {
//     url: string
//     title: string
// }
// export type FriendType = {
//     id: string
//     name: string
//     avatar: string
// }
//
//
// export type DialogsType = Array<DialogItemType>
// export type MessagesType = Array<MessageType>
// export type PostsType = Array<PostType>
// export type NavLinksType = Array<NavLinkType>
// export type FriendsType = Array<FriendType>
//
//
// export type NavBarType = {
//     navLinks: NavLinksType
//     friends: FriendsType
// }
// export type MessagesPageType = {
//     dialogs: DialogsType
//     messages: MessagesType
//     newMessageText: string
// }
// export type ProfilePage = {
//     newPostText: string
//     posts: PostsType
//     activePostId: string
// }
//
// export type StateType = {
//     messagesPage: MessagesPageType
//     profilePage: ProfilePage
//     navBar: NavBarType
// }
//
// export type StoreType = {
//     _state: StateType
//     _callSubscriber: (state: StateType) => void,
//     subscribe: (observer: (state: StateType) => void) => void
//     getState: () => StateType
//     dispatch: (action: any) => void
// }
//
// export type actionsTypes = actionsProfileTypes | actionsDialogTypes
//
// export const store: StoreType = {
//     _state: {
//         messagesPage: {
//             dialogs: [
//                 {id: '1', name: 'Vadimych'},
//                 {id: '2', name: 'Dimych'},
//                 {id: '3', name: 'Sveta'},
//                 {id: '4', name: 'Victor'},
//                 {id: '5', name: 'Andrey'},
//                 {id: '6', name: 'Valera'},
//             ],
//             newMessageText: '',
//             messages: [
//                 {id: '1', message: 'Hi'},
//                 {id: '2', message: 'How are you?'},
//                 {id: '3', message: 'Im fine'},
//                 {id: '4', message: 'Ok'},
//                 {id: '5', message: 'Ok'},
//                 {id: '6', message: 'Ok'},
//             ],
//         },
//         profilePage: {
//             newPostText: '',
//             posts: [
//                 {id: '1', message: 'Hi', likeCount: 0, edit: false},
//                 {id: '2', message: 'xaxax', likeCount: 3, edit: false},
//                 {id: '3', message: 'FUCK!', likeCount: 13, edit: false},
//                 {id: '4', message: 'off', likeCount: 5, edit: false},
//                 {id: '5', message: 'OFF', likeCount: 3, edit: false},
//             ],
//             activePostId: ''
//         },
//         navBar: {
//             navLinks: [
//                 {
//                     url: "/profile",
//                     title: "Profile",
//                 },
//                 {
//                     url: '/dialogs',
//                     title: "Messages",
//                 },
//                 {
//                     url: '/news',
//                     title: "News",
//                 },
//                 {
//                     url: '/music',
//                     title: "Music",
//                 },
//                 {
//                     url: '/settings',
//                     title: "Settings",
//                 },
//             ],
//             friends: [
//                 {
//                     id: "901",
//                     name: "Sveta",
//                     avatar: "https://www.groupeadinfo.com/wp-content/uploads/avatar36.png",
//                 },
//                 {
//                     id: "902",
//                     name: "Pavel",
//                     avatar: "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
//                 },
//                 {
//                     id: "903",
//                     name: "Andrey",
//                     avatar: "https://cours-informatique-gratuit.fr/wp-content/uploads/2017/10/avatar.png",
//                 },
//                 {
//                     id: "904",
//                     name: "Dimych",
//                     avatar: "https://www.groupeadinfo.com/wp-content/uploads/ADINFO_avatar20.png",
//                 },
//                 {
//                     id: "905",
//                     name: "Makar",
//                     avatar: "https://www.groupeadinfo.com/wp-content/uploads/avatar35.png",
//                 },
//                 {
//                     id: "906",
//                     name: "Oksana",
//                     avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-bkkR_cjSimFzzUHFwHi1a2yfVfd4IWVic00mBuJctqV1CB8TJMh8dyCoQiYLU-e5F4&usqp=CAU",
//                 },
//             ],
//         }
//     },
//     _callSubscriber() {
//         console.log('State changed')
//     },
//     subscribe(observer: (state: StateType) => void) {
//         this._callSubscriber = observer
//     },
//     getState() {
//         return this._state
//     },
//     dispatch(action:actionsTypes) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
//         this._callSubscriber(this._state)
//     }
// }


