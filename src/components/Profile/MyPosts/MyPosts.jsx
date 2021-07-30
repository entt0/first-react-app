import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

let MyPosts = (props) => {

    let postsElements = props.posts
        .map(p => (<Post message={p.message} likesCount={p.likes}/>)
        );

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={s.postsWrapper}>
            <h4>My posts</h4>
            <div className={s.addPostsWrapper}>
                <textarea ref={newPostElement} rows='4' cols='80'> Write your message here</textarea>
                <button onClick={addPost} className={s.addPostButton}>Add Post</button>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;