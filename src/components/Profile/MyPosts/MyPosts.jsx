import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let MyPosts = (props) => {

    let postsElements = props.postsData
        .map( p => (<Post message={p.message} likesCount={p.likes}/>)
    );

    return (
        <div className={s.postsWrapper}>
            <h4>My posts</h4>
            <div className={s.addPostsWrapper}>
                <textarea rows='4' cols='100'> Write your message here</textarea>
                <button className={s.addPostButton}>Add Post</button>
            </div>
            {postsElements}
        </div>
    );
}

export default MyPosts;