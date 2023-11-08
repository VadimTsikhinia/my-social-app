import React, {ChangeEvent} from "react";
import style from "./Posts.module.css";
import {PostsType} from "../../../redux/reduxStore";
import {PostContainer} from "./Post/PostContainer";


type PostsPropsType = {
    posts: PostsType
    newPostValue: string
    activePostId: string

    onChangeTextareaHandler:(value:string)=>void
    addNewPost:()=>void
    store:any
}

export const Posts = (props: PostsPropsType) => {

    const onChangeHandler = (i: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeTextareaHandler(i.currentTarget.value)
    }
    const addNewPost = () => {
        props.addNewPost()
    }

    const posts = props.posts && props.posts.map(t => <PostContainer
            key={t.id}
            post={t}
            activePostId={props.activePostId}

            store={props.store}
        />
    )


    return (
        <div className={style.postsBlock}>
            <h2>my post</h2>
            <div>
                <div>
                    <textarea
                        value={props.newPostValue}
                        onChange={(i) => onChangeHandler(i)}
                        placeholder={'Enter new post'}
                    />
                </div>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {posts}
            </div>
        </div>
    )
}