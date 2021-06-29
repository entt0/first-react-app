import s from './Dialogues.module.css';

const Dialogues = (props) => {
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                <div className={s.dialogue}>Nikita</div>
                <div className={s.dialogue + ' ' + s.active}>Kris</div>
                <div className={s.dialogue}>Vlad</div>
                <div className={s.dialogue}>Tor</div>
                <div className={s.dialogue}>Klim</div>
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