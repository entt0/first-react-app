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
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                <DialogueItem name='Nikita' id='1'/>
                <DialogueItem name='Kris' id='2'/>
                <DialogueItem name='Vlad' id='3'/>
                <DialogueItem name='Tor' id='4'/>
                <DialogueItem name='Klim' id='5'/>
                <DialogueItem name='Dron' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi,bro'/>
                <Message message='How is your exam?'/>
                <Message message='Kein Kommentar'/>
            </div>
        </div>
    );
}

export default Dialogues;