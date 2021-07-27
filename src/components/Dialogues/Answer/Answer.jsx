import s from "./../Dialogues.module.css";

const Answer = (props) => {
    return (
        <div className={s.answers}>{props.answer}</div>
    )
}

export default Answer;