import s from './Friend.module.css';

let Friend = (props) => {
    return (
        <div className={s.friends}>
            <img alt="Friend's ava" src={props.avatar} />
        </div>
    )
}

export default Friend;