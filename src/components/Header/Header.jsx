import s from './Header.module.css';
import main from '../../assets/Images/main.png';


const Header = () => {
    return (
        <header className={s.header}>
            <img alt='logo of app' src={main}/>
            <div className={s.webName}>Users' Universe</div>
        </header>
    );
}

export default Header;