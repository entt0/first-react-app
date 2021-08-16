import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

let MyPosts = (props) => {

    let postsElements = props.profilePage.posts
        .map(p => (<Post message={p.message} likesCount={p.likes}/>)
        );

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.changePost(text);
    }

    return (
        <div className={s.postsWrapper}>
            <h4>My posts</h4>
            <div className={s.addPostsWrapper}>
                <textarea value={props.profilePage.newPostText} placeholder='Write Your Message Here :)' onChange={onPostChange}
                          rows='4' cols='80'/>
                <button onClick={onAddPost} className={s.addPostButton}>Add Post</button>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;