import s from './DialogueItem.module.css';
import {NavLink} from "react-router-dom";

const DialogueItem = (props) => {
    let path = '/dialogues/' + props.id;
    return (
        <div className={s.dialoguesItems}>
            <NavLink to={path}>
                <div >
                    <img alt='avatar of Friend' src={props.avatar}/>
                    <div className={s.names}>{props.name}</div>
                </div>
            </NavLink>
        </div>
    )
}

export default DialogueItem;