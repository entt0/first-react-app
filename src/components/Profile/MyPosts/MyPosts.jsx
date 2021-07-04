import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let MyPosts = () => {
    return (
        <div className={s.postsWrapper}>
            <h4>My posts</h4>
            <div className={s.addPostsWrapper}>
                <textarea rows='4' cols='100'> Write your message here</textarea>
                <button className={s.addPostButton}>Add Post</button>
            </div>
            <Post message='My first post: "Hallo, World"' likesCount='2'/>
            <Post message='I want to be a programmer' likesCount='5'/>
        </div>
    );
}

export default MyPosts;