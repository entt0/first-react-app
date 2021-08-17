import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToPost = (state) => {
    return {
        profilePage: state.profilePage,
    }
}
let mapDispatchToPost = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator());
        },
        changePost: (text) => {
            let action = updateNewPostTextCreator(text);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToPost, mapDispatchToPost)(MyPosts);

export default MyPostsContainer;