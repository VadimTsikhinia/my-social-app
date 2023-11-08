import {actionsTypes, NavBarType} from "./reduxStore";


const initialState = {
    navLinks: [
        {
            url: "/profile",
            title: "Profile",
        },
        {
            url: '/dialogs',
            title: "Messages",
        },
        {
            url: '/news',
            title: "News",
        },
        {
            url: '/music',
            title: "Music",
        },
        {
            url: '/settings',
            title: "Settings",
        },
    ],
    friends: [
        {
            id: "901",
            name: "Sveta",
            avatar: "https://www.groupeadinfo.com/wp-content/uploads/avatar36.png",
        },
        {
            id: "902",
            name: "Pavel",
            avatar: "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        },
        {
            id: "903",
            name: "Andrey",
            avatar: "https://cours-informatique-gratuit.fr/wp-content/uploads/2017/10/avatar.png",
        },
        {
            id: "904",
            name: "Dimych",
            avatar: "https://www.groupeadinfo.com/wp-content/uploads/ADINFO_avatar20.png",
        },
        {
            id: "905",
            name: "Makar",
            avatar: "https://www.groupeadinfo.com/wp-content/uploads/avatar35.png",
        },
        {
            id: "906",
            name: "Oksana",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-bkkR_cjSimFzzUHFwHi1a2yfVfd4IWVic00mBuJctqV1CB8TJMh8dyCoQiYLU-e5F4&usqp=CAU",
        },
    ],
}

export const navBarReducer = (state:NavBarType = initialState, action:actionsTypes):NavBarType => {

return state
}

