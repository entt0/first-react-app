import s from './Header.module.css';
import main from '../../assets/Images/main.png';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img alt='logo of app' src={main}/>
            <h1 className={s.webName}>Users' Universe</h1>
            {props.isAuth === true
                ? <div className={s.loginBlock}>
                    <div>{props.login}</div>
                    <button onClick={props.logout} className={s.logoutButton}>Log Out</button>
                </div>
                : <NavLink to={'/login'} className={s.loginBlock}>Log In</NavLink>}
        </header>
    );
}

export default Header;