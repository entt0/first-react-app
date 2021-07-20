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

let dialoguesData = [
    {id:1, name: 'Nikita'},
    {id:2, name: 'Kris'},
    {id:3, name: 'Vlad'},
    {id:4, name: 'Tor'},
    {id:5, name: 'Klim'},
    {id:6, name: 'Dron'}
]

let messagesData = [
    {id:1, message: 'Hi,bro'},
    {id:2, message: 'How is your exam?'},
    {id:3, message: 'Kein Kommentar'}
]

const Dialogues = (props) => {
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                <DialogueItem name={dialoguesData[0].name} id={dialoguesData[0].id}/>
                <DialogueItem name={dialoguesData[1].name} id={dialoguesData[1].id}/>
                <DialogueItem name={dialoguesData[2].name} id={dialoguesData[2].id}/>
                <DialogueItem name={dialoguesData[3].name} id={dialoguesData[3].id}/>
                <DialogueItem name={dialoguesData[4].name} id={dialoguesData[4].id}/>
                <DialogueItem name={dialoguesData[5].name} id={dialoguesData[5].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
            </div>
        </div>
    );
}

export default Dialogues;