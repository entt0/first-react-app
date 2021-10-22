import s from './Dialogues.module.css';
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import React from "react";
import {Redirect} from "react-router-dom";
import NewMessageForm from "./Message/NewMessageForm/NewMessageForm";
import {reduxForm} from "redux-form";


const Dialogues = (props) => {

    const NewMessageReduxForm = reduxForm({form: 'newMessageForm'})(NewMessageForm)

    let dialoguesElements = props.dialoguesPage.dialogues
        .map(d => (<DialogueItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>)
        );

    let messagesElements = props.dialoguesPage.messages
        .map(m => (<Message message={m.message} id={m.id}/>)
        );

    const onSubmit = (formData) => {
        props.sendMessage(formData.newMessageText);
    };

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogues}>
            <div>
                {dialoguesElements}
            </div>
            <div>
                {messagesElements}
            </div>
            <div className={s.newMessage}>
                <NewMessageReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
}


export default Dialogues;