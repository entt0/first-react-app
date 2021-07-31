import s from './Dialogues.module.css';
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import Answer from "./Answer/Answer";
import React from "react";

const Dialogues = (props) => {

    let dialoguesElements = props.state.dialogues
        .map(d => (<DialogueItem name={d.name} id={d.id} avatar={d.avatar}/>)
        );

    let messagesElements = props.state.messages
        .map(m => (<Message message={m.message} id={m.id}/>)
        );

    let answersElements = props.state.answers
        .map(a => (<Answer answer={a.answer}/>)
        );

    let newMessageText = React.createRef();

    let sendMessage = () => {
        let text = newMessageText.current.value;
        props.addAnswer(text);
        newMessageText.current.value = '';
    };

    return (
        <div className={s.dialogues}>
            <div>
                {dialoguesElements}
            </div>
            <div>
                {messagesElements}
            </div>
            <div>
                {answersElements}
            </div>
            <div className={s.newMessage}>
                <textarea ref={newMessageText} rows={3} cols={55}></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogues;