import s from './Dialogues.module.css';
import {NavLink} from "react-router-dom";

const DialogueItem = (props) => {
    let path = '/dialogues/' + props.id;
    return (
        <div className={s.dialogue}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogues = (props) => {

    let dialogues = [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Kris'},
        {id: 3, name: 'Vlad'},
        {id: 4, name: 'Tor'},
        {id: 5, name: 'Klim'},
        {id: 6, name: 'Dron'}
    ]

    let messages = [
        {id: 1, message: 'Hi,bro'},
        {id: 2, message: 'How is your exam?'},
        {id: 3, message: 'Kein Kommentar'}
    ]

    let dialoguesElements = dialogues
        .map(d => (<DialogueItem name={d.name} id={d.id}/>)
        );

    let messagesElements = messages
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