import s from './Dialogues.module.css';
import {NavLink} from "react-router-dom";

const Dialogues = (props) => {
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                <div className={s.dialogue}>
                    <NavLink to='/dialogues/1'> Nikita</NavLink></div>
                <div className={s.dialogue + ' ' + s.active}>
                    <NavLink to='/dialogues/2'>Kris</NavLink>
                </div>
                <div className={s.dialogue}>
                    <NavLink to='/dialogues/3'>Vlad</NavLink>
                </div>
                <div className={s.dialogue}>
                    <NavLink to='/dialogues/4'>Tor</NavLink>
                </div>
                <div className={s.dialogue}>
                    <NavLink to='/dialogues/5'>Klim</NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi,bro</div>
                <div className={s.message}>How is your exam?</div>
                <div className={s.message}>Kein Kommentar</div>
            </div>
        </div>
    );
}

export default Dialogues;