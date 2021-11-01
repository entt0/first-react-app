import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import user from './../../../assets/Images/user.svg';
import UserStatusWithHooks from "./UserStatus/UserStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.avatarAndDescription}>
                {!props.profile.photos.large ? <img className={s.userAva} alt='avatar of User' src={user}/>
                    : <img className={s.userAva} alt='avatar of User' src={props.profile.photos.large}/>}
                <div>
                    {props.profile.fullName}
                </div>
                <UserStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                <div>
                    {props.profile.contacts.vk}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;