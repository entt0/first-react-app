import s from "../MyPosts.module.css";
import React from "react";
import {Field} from "redux-form";

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newPostText'}
                   component={'textarea'}
                   placeholder=' Write Your Message Here :)'
                   rows='4' cols='55'/>
            <button className={s.addPostButton}>Add Post</button>
        </form>
    )
}

export default PostForm;