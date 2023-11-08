import React from 'react';
import {Posts} from "./Posts";
import {ProfilePage} from "../../../redux/reduxStore";
import {addPostAC, changeNewProfilePostAC} from "../../../redux/profileReducer";

type PostsContainer = {
    store: any
}

export const PostsContainer = (props: PostsContainer) => {
    const state:ProfilePage = props.store.getState().profilePage
    const dispatch = props.store.dispatch

    const onChangeTextareaHandler= (value: string) => {
        dispatch(changeNewProfilePostAC(value))
    }

    const addNewPost = () => {
        dispatch(addPostAC())
        dispatch(changeNewProfilePostAC(''))
    }

    return (
        <Posts
            posts={state.posts}
            newPostValue={state.newPostText}
            activePostId={state.activePostId}

            onChangeTextareaHandler={onChangeTextareaHandler}
            addNewPost={addNewPost}
            store={props.store}
        />
    );
};

export default PostsContainer;