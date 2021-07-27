import s from "./../Dialogues.module.css";

const Message = (props) => {
    return (
        <div className={s.messages}>{props.message}</div>
    )
}

export default Message;