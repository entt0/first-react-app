import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.backgroundImg}>
                <img alt='background img'
                     src='https://www.hd-freewallpapers.com/latest-wallpapers/desktop-funny-images-of-dogs-and-puppies-download.jpg'/>
            </div>
            <div className={s.avatarAndDescription}>
                <img alt='avatar of User'
                     src={props.profile.photos.large}/>
                <div>
                    {props.profile.fullName}
                </div>
                <div>
                    {props.profile.contacts.vk}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;