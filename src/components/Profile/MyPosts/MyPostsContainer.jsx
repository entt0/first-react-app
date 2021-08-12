import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

let MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;

    let addPost = () => {
        props.store.dispatch(addPostCreator());
    }

    let changePost = (text) => {
        let action = updateNewPostTextCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts state={state} changePost={changePost} addPost={addPost}/>
    );
}

export default MyPostsContainer;