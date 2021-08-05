import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

let MyPosts = (props) => {

    let postsElements = props.posts
        .map(p => (<Post message={p.message} likesCount={p.likes}/>)
        );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);
    }

    return (
        <div className={s.postsWrapper}>
            <h4>My posts</h4>
            <div className={s.addPostsWrapper}>
                <textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement} rows='4' cols='80'/>
                <button onClick={addPost} className={s.addPostButton}>Add Post</button>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;