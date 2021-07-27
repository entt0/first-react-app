import s from './Dialogues.module.css';
import DialogueItem from "./DialogueItem/DialogueItem";
import Message from "./Message/Message";
import Answer from "./Answer/Answer";

const Dialogues = (props) => {

    let dialoguesElements = props.state.dialogues
        .map(d => (<DialogueItem name={d.name} id={d.id} avatar={d.avatar}/>)
        );

    let messagesElements = props.state.messages
        .map(m => (<Message message={m.message} id={m.id}/>)
        );

    let answersElements = props.state.answers
        .map(a => (<Answer answer={a.answer} />)
    );

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.answers}>
                {answersElements}
            </div>
        </div>
    );
}

export default Dialogues;