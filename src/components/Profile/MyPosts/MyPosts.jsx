import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/state";

let MyPosts = (props) => {

    let postsElements = props.posts
        .map(p => (<Post message={p.message} likesCount={p.likes}/>)
        );

    let addPost = () => {
        props.dispatch(addPostCreator());
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        let action = updateNewPostTextCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.postsWrapper}>
            <h4>My posts</h4>
            <div className={s.addPostsWrapper}>
                <textarea value={props.newPostText} placeholder='Write Your Message Here :)' onChange={onPostChange}
                          rows='4' cols='80'/>
                <button onClick={addPost} className={s.addPostButton}>Add Post</button>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;