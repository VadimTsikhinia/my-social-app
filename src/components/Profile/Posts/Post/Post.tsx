import style from "./Post.module.css";
import React, {ChangeEvent} from "react";
import {PostType} from "../../../../redux/reduxStore";


type postPropsType = {
    post: PostType
    activePostId: string

    onClickLikePostHandler: () => void
    onClickEditPostHandler:() => void
    onClickActivePost:()=>void
    onClickClearHandler:()=>void
    onClickRemoveHandler:()=>void
    onChangeTextHandler:(value: string) => void
}

export const Post = (props: postPropsType) => {

    const onClickLikeHandler = () => {
        props.onClickLikePostHandler()
    }
    const onClickEditHandler = () => {
        props.onClickEditPostHandler()
    }
    const onClickRemoveHandler = () => {
        props.onClickRemoveHandler()
    }
    const onClickClearHandler = () => {
        props.onClickClearHandler()
    }
    const onChangeTextHandler = (i: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeTextHandler(i.currentTarget.value)
    }
    const onClickActivePost = () => {
        props.onClickActivePost()
    }

    const buttonBox = <div>
        {props.post.edit
            ?
            <div>
                <button onClick={onClickEditHandler}>OK</button>
                <button onClick={onClickClearHandler}>Clear</button>
            </div>
            :
            <div>
                <button onClick={onClickEditHandler}>Edit</button>
                <button onClick={onClickRemoveHandler}>Remove</button>
            </div>
        }
    </div>

    return (
        <div
            className={`${style.item} ${props.post.edit && style.editActive} ${props.activePostId === props.post.id && style.active}`}
            onClick={onClickActivePost}
        >

            <img src={'https://www.w3schools.com/howto/img_avatar.png'} alt={"avatar"}/>
            {props.post.edit ?
                <textarea value={props.post.message} onChange={(i) => onChangeTextHandler(i)}/> : props.post.message}
            <div>
                <span onClick={onClickLikeHandler}>like: {props.post.likeCount}</span>
                {props.activePostId === props.post.id || props.post.edit ? buttonBox : ''}
            </div>
        </div>
    )
}