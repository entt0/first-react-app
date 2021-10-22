import s from './NewMessageForm.module.css'
import React from "react";
import {Field} from "redux-form";

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={s.newMessageTextarea}
                component={'textarea'}
                   name={'newMessageText'}
                   placeholder=' Write Your Answer Here :)'
                   rows={3}
                   cols={55}/>
            <button className={s.newMessageButton}>Send</button>
        </form>
    )
}

export default NewMessageForm;