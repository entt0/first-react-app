import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let MyPosts = () => {
    return (
        <div className={s.postsWrapper}>
            <div>My posts</div>
            <div className={s.addPostsWrapper}>
                <textarea rows='4' cols='100'> Write your message here</textarea>
                <button className={s.addPostButton}>Add Post</button>
            </div>
            <Post />
            <Post />
        </div>
    );
}

export default MyPosts;