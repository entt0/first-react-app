import s from './Settings.module.css';
import ProfileSettings from "./ProfileSettings/ProfileSettings";

const Settings = (props) => {
    return (
        <div className={s.main}>
            <ProfileSettings />
        </div>
    );
}

export default Settings;