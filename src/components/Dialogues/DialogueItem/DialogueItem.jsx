import s from "./../Dialogues.module.css";
import {NavLink} from "react-router-dom";

const DialogueItem = (props) => {
    let path = '/dialogues/' + props.id;
    return (
        <div className={s.dialogue}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogueItem;