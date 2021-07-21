import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let MyPosts = () => {

    let posts = [
        {id: 1, message: 'My first post: "Hallo, World"', likes: 2},
        {id: 2, message: 'I want to be a programmer', likes: 5},
        {id: 2, message: 'YO', likes: 4},
    ]

    let postsElements = posts
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