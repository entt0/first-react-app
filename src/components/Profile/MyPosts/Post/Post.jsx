import s from "./Post.module.css";
import userPhoto from './../../../../assets/Images/user.svg'

let Post = (props) => {
    return (
        <div className={s.block}>
            <img alt='avatar from Sender' className={s.ava} src={userPhoto} />
            <div className={s.item}>
                {props.message}
            </div>
            <button className={s.like}>Like It</button> {props.likesCount} likes
        </div>
    );
}

export default Post;