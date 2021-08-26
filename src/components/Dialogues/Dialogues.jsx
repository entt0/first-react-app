import s from './Dialogues.module.css';
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import React from "react";


const Dialogues = (props) => {

    let dialoguesElements = props.dialoguesPage.dialogues
        .map(d => (<DialogueItem key={d.id} name={d.name} id={d.id} avatar={d.avatar}/>)
        );

    let messagesElements = props.dialoguesPage.messages
        .map(m => (<Message message={m.message} id={m.id}/>)
        );

    let onSendMessage = () => {
        props.sendMessage();
    };

    let onUpdateMessageText = (e) => {
        let text = e.target.value;
        props.updateMessageText(text);
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
                          onChange={onUpdateMessageText} rows={3}
                          cols={55}/>
                <button onClick={onSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogues;