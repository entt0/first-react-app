import React from "react";
import {addPost, changePost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, changePost})(MyPosts);

export default MyPostsContainer;