import s from './Header.module.css';
import main from '../../assets/Images/main.png';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img alt='logo of app' src={main}/>
            <h1 className={s.webName}>Users' Universe</h1>
            {props.isAuth === true ?
                <div className={s.loginBlock}>
                    <span>logged in as:</span>
                    <div>{props.login}</div>
                </div>
                : <NavLink to={'/login'} className={s.loginBlock}>Login</NavLink>}
        </header>
    );
}

export default Header;