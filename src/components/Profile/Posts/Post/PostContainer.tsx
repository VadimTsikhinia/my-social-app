import React from 'react';
import {Post} from "./Post";
import {PostType} from "../../../../redux/reduxStore";
import {
    activeProfilePostAC,
    addLikeAC,
    changeProfilePostEditStatusAC,
    changeProfilePostTextAC, clearProfilePostAC, removeProfilePostAC
} from "../../../../redux/profileReducer";

type PostContainerType = {
    post: PostType
    activePostId: string
    store: any
}

export const PostContainer = (props: PostContainerType) => {
    const dispatch = props.store.dispatch

    const onClickLikePostHandler = () => {
        dispatch(addLikeAC(props.post.id))
    }
    const onClickEditPostHandler = () => {
        dispatch(changeProfilePostEditStatusAC(props.post.id))
    }
    const onClickActivePost = () => {
        dispatch(activeProfilePostAC(props.post.id))
    }
    const onChangeTextHandler = (value: string) => {
        dispatch(changeProfilePostTextAC(props.post.id, value))
    }
    const onClickClearHandler = () => {
        dispatch(clearProfilePostAC(props.post.id))
    }
    const onClickRemoveHandler = () => {
        dispatch(removeProfilePostAC(props.post.id))
    }

    return (
        <Post
            post={props.post}
            activePostId={props.activePostId}

            onClickLikePostHandler={onClickLikePostHandler}
            onClickEditPostHandler={onClickEditPostHandler}
            onClickActivePost={onClickActivePost}
            onChangeTextHandler={onChangeTextHandler}
            onClickClearHandler={onClickClearHandler}
            onClickRemoveHandler={onClickRemoveHandler}
        />
    )
}
