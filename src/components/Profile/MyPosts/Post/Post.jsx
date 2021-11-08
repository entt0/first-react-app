import s from "./Post.module.css";
import userPhoto from './../../../../assets/Images/user.svg'
import {useState} from "react";

let Post = (props) => {

    let [count, setCount] = useState(0);

    return (
        <div className={s.postBlock}>
            <img alt='avatar from Sender' className={s.userAva} src={userPhoto} />
            <div className={s.postMessage}>
                {props.message}
            </div>
            <button  onClick={() => {setCount(count+1)}} className={s.likeButton}>Like It</button>
            <span className={s.likesSpan}>{count} likes</span>
        </div>
    );
}

export default Post;