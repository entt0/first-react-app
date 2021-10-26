import s from "./Post.module.css";
import userPhoto from './../../../../assets/Images/user.svg'

let Post = (props) => {
    return (
        <div className={s.postBlock}>
            <img alt='avatar from Sender' className={s.userAva} src={userPhoto} />
            <div className={s.postMessage}>
                {props.message}
            </div>
            <button className={s.likeButton}>Like It</button>
            <span className={s.likesSpan}>{props.likesCount} likes</span>
        </div>
    );
}

export default Post;