import s from './NewMessageForm.module.css'
import React from "react";
import {Field} from "redux-form";
import {Element} from "../../../common/FormsControls/FormsControls";
import {maxLength} from "../../../../utils/validators/validators";

const Textarea = Element('textarea')
const maxLength150 = maxLength(150);

const NewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={s.newMessageTextarea}
                component={Textarea}
                   name={'newMessageText'}
                   placeholder=' Write Your Answer Here :)'
                   rows={3}
                   cols={55}
            validate={[maxLength150]}/>
            <button className={s.newMessageButton}>Send</button>
        </form>
    )
}

export default NewMessageForm;