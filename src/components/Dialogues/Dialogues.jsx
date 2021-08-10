import s from './Dialogues.module.css';
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import React from "react";
import {sendMessageCreator, updateMessageTextCreator} from "../../redux/dialoguesReducer";

const Dialogues = (props) => {

    let dialoguesElements = props.dialoguesPage.dialogues
        .map(d => (<DialogueItem name={d.name} id={d.id} avatar={d.avatar}/>)
        );

    let messagesElements = props.dialoguesPage.messages
        .map(m => (<Message message={m.message} id={m.id}/>)
        );

    let sendMessage = () => {
        props.dispatch(sendMessageCreator());
    };

    let updateMessageText = (e) => {
        let text = e.target.value;
        let action = updateMessageTextCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={s.dialogues}>
            <div>
                {dialoguesElements}
            </div>
            <div>
                {messagesElements}
            </div>
            <div className={s.newMessage}>
                <textarea value={props.dialoguesPage.newMessageText} placeholder='Write Your Answer Here :)'
                          onChange={updateMessageText} rows={3}
                          cols={55}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogues;