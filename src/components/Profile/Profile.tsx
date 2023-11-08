import React from "react";
import {ProfileInfo} from "./Posts/ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";


type ProfilePropsType = {
    store: any
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <PostsContainer
                store={props.store}
            />
        </div>
    )
}