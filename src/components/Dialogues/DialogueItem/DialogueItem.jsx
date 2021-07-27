import s from "./../Dialogues.module.css";
import {NavLink} from "react-router-dom";

const DialogueItem = (props) => {
    let path = '/dialogues/' + props.id;
    return (
        <NavLink to={path}>
            <div className={s.dialogue}>
                <img alt='avatar of Friend' src={props.avatar}/>
                {props.name}
            </div>
        </NavLink>
    )
}

export default DialogueItem;