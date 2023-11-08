
import {v1} from "uuid";
import {actionsTypes, PostsType, ProfilePage} from "./reduxStore";

const initialState = {
    newPostText: '',
    posts: [
        {id: '1', message: 'Hi', likeCount: 0, edit: false},
        {id: '2', message: 'xaxax', likeCount: 3, edit: false},
        {id: '3', message: 'React!', likeCount: 13, edit: false},
        {id: '4', message: 'on', likeCount: 5, edit: false},
        {id: '5', message: 'On', likeCount: 3, edit: false},
    ],
    activePostId: ''
}

export const profileReducer = (state: ProfilePage = initialState, action: actionsTypes): ProfilePage => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [
                    {id: v1(), message: state.newPostText, likeCount: 0, edit: false},
                    ...state.posts
                ]
            }
        case "CHANGE-NEW-PROFILE-POST":
            return {
                ...state,
                newPostText: action.payload.text
            }
        case "ADD-LIKE":
            const newArr: PostsType = state.posts.map(t => t.id === action.payload.idPost ? {
                ...t,
                likeCount: t.likeCount + 1
            } : t)

            return {
                ...state,
                posts: newArr
            }
        case "CHANGE-PROFILE-POST-EDIT-STATUS":
            return {
                ...state,
                posts: state.posts.map(t => t.id === action.payload.idPost ? {
                    ...t,
                    edit: !t.edit
                } : t)
            }
        case "CHANGE-PROFILE-POST-TEXT":
            return {
                ...state,
                posts: state.posts.map(t => t.id === action.payload.idPost ? {
                    ...t,
                    message: action.payload.text
                } : t)
            }
        case "CLEAR-PROFILE-POST":
            return {
                ...state,
                posts: state.posts.map(t => t.id === action.payload.idPost ? {
                    ...t,
                    message: ''
                } : t)
            }
        case "REMOVE-PROFILE-POST":
            return {
                ...state,
                posts: state.posts.filter(f => f.id !== action.payload.idPost)
            }
        case "ACTIVE-PROFILE-POST":
            return {
                ...state,
                activePostId: action.payload.idPost
            }
        default:
            return state
    }
}

export type actionsProfileTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewProfilePostAC>
    | ReturnType<typeof addLikeAC>
    | ReturnType<typeof changeProfilePostEditStatusAC>
    | ReturnType<typeof changeProfilePostTextAC>
    | ReturnType<typeof removeProfilePostAC>
    | ReturnType<typeof clearProfilePostAC>
    | ReturnType<typeof activeProfilePostAC>


export const addPostAC = () => {
    return {type: "ADD-POST"} as const
}
export const changeNewProfilePostAC = (text: string) => {
    return {
        type: "CHANGE-NEW-PROFILE-POST",
        payload: {
            text
        }
    } as const
}
export const addLikeAC = (idPost: string) => {
    return {
        type: "ADD-LIKE",
        payload: {
            idPost
        }
    } as const
}
export const changeProfilePostEditStatusAC = (idPost: string) => {
    return {
        type: "CHANGE-PROFILE-POST-EDIT-STATUS",
        payload: {
            idPost
        }
    } as const
}
export const changeProfilePostTextAC = (idPost: string, text: string) => {
    return {
        type: "CHANGE-PROFILE-POST-TEXT",
        payload: {
            idPost,
            text
        }
    } as const
}
export const removeProfilePostAC = (idPost: string) => {
    return {
        type: "REMOVE-PROFILE-POST",
        payload: {
            idPost
        }
    } as const
}
export const clearProfilePostAC = (idPost: string) => {
    return {
        type: "CLEAR-PROFILE-POST",
        payload: {
            idPost
        }
    } as const
}
export const activeProfilePostAC = (idPost: string) => {
    return {
        type: "ACTIVE-PROFILE-POST",
        payload: {
            idPost
        }
    } as const
}