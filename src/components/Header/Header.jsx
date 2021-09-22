import s from './Header.module.css';
import main from '../../assets/Images/main.png';


const Header = (props) => {
    return (
        <header className={s.header}>
            <img alt='logo of app' src={main}/>
            <div className={s.webName}>Users' Universe</div>
            {props.isAuth === true ? <div className={s.loginBlock}>{props.login}</div>
                : <div className={s.loginBlock}>Login</div>}
        </header>
    );
}

export default Header;