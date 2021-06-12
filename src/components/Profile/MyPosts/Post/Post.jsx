import s from "./Post.module.css";

let Post = () => {
    return (
        <div className={s.block}>
            <img alt='avatar from Sender' className={s.ava} src='https://sun9-43.userapi.com/impg/IVw0Qv9C6ppB6rtMuOt6-rf0PUWUU0MSdFiJlg/2Hp3E30riJQ.jpg?size=850x850&quality=96&sign=9abc79847d39550810a0c89c9d8bea88&type=album' />
            <div className={s.item}>
                Message
            </div>
            <button className={s.like}>Like It</button>
        </div>
    );
}

export default Post;