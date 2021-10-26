import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import PostForm from "./PostForm/PostForm";
import {reduxForm} from "redux-form";

let MyPosts = (props) => {

    const PostReduxForm = reduxForm({form: 'createPost'})(PostForm)

    const onSubmit = (formData) => {
        props.addPost(formData.newPostText);
    }

    let postsElements = props.profilePage.posts
        .map(p => (<Post key={p.id} message={p.message} likesCount={p.likes}/>)
        );


    return (
        <div className={s.PostsWrapper}>
            <div className={s.postsHeader}>
                <h4>ALL POSTS</h4>
            </div>
            <div className={s.addPostsWrapper}>
                <PostReduxForm onSubmit={onSubmit}/>
            </div>
            <div className={s.postsElements}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;