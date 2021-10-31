import s from "../MyPosts.module.css";
import React from "react";
import {Field} from "redux-form";
import {maxLength} from "../../../../utils/validators/validators";
import {Element} from "../../../common/FormsControls/FormsControls";

const Textarea = Element('textarea');
const maxLength150 = maxLength(150);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newPostText'}
                   component={Textarea}
                   placeholder=' Write Your Message Here :)'
                   rows='4' cols='55'
                   validate={[maxLength150]}
            />
            <button className={s.addPostButton}>Add Post</button>
        </form>
    )
}

export default PostForm;