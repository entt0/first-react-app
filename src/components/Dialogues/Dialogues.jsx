import s from './Dialogues.module.css';
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import Answer from "./Answer/Answer";
import React from "react";
import {addAnswerActionCreator, updateAnswerTextActionCreator} from "../../redux/state";

const Dialogues = (props) => {

    let dialoguesElements = props.dialoguesPage.dialogues
        .map(d => (<DialogueItem name={d.name} id={d.id} avatar={d.avatar}/>)
        );

    let messagesElements = props.dialoguesPage.messages
        .map(m => (<Message message={m.message} id={m.id}/>)
        );

    let answersElements = props.dialoguesPage.answers
        .map(a => (<Answer answer={a.answer}/>)
        );

    let newMessageText = React.createRef();

    let sendMessage = () => {
        props.dispatch(addAnswerActionCreator());
    };

    let updateAnswer = () => {
        let text = newMessageText.current.value;
        let action = updateAnswerTextActionCreator(text);
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
            <div>
                {answersElements}
            </div>
            <div className={s.newMessage}>
                <textarea value={props.dialoguesPage.newAnswer} placeholder='Write Your Answer Here :)'
                          onChange={updateAnswer} ref={newMessageText} rows={3}
                          cols={55}/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogues;