import s from './Dialogues.module.css';
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";

const Dialogues = (props) => {

    let dialoguesElements = props.state.dialogues
        .map(d => (<DialogueItem name={d.name} id={d.id}/>)
        );

    let messagesElements = props.state.messages
        .map (m => (<Message message={m.message} id={m.id}/>)
        );

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogues;