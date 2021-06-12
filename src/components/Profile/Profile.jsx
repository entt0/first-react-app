import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.backgroundImg}>
                <img alt='background img' src='https://www.hd-freewallpapers.com/latest-wallpapers/desktop-funny-images-of-dogs-and-puppies-download.jpg' />
            </div>
            <div className={s.avatarAndDescription}>
                <img alt='avatar of User' src='https://sun9-26.userapi.com/impg/SdG9NSFTmr3hIhZjMmcQlkgzLiki3q4auMKi8w/QvNTEfEaygc.jpg?size=500x500&quality=96&sign=639305ba38bdec448ee959a41c09384a&type=album' />
                <div>
                Name: Kerb
                </div>
                <p />
                <div>
                Age: 23
                </div>
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;