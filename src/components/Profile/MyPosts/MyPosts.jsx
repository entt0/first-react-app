import s from "./MyPosts.module.css";
import Post from "./Post/Post";

let postsData = [
    {id: 1, message: 'My first post: "Hallo, World"', likes: 2},
    {id: 2, message: 'I want to be a programmer', likes: 5}
]

let MyPosts = () => {
    return (
        <div className={s.postsWrapper}>
            <h4>My posts</h4>
            <div className={s.addPostsWrapper}>
                <textarea rows='4' cols='100'> Write your message here</textarea>
                <button className={s.addPostButton}>Add Post</button>
            </div>
            <Post message={postsData[0].message} likesCount={postsData[0].likes}/>
            <Post message={postsData[1].message} likesCount={postsData[1].likes}/>
        </div>
    );
}

export default MyPosts;