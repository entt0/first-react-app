import s from './Header.module.css';
import main from '../../assets/Images/main.png';


const Header = () => {
    return (
        <header className={s.header}>
            <img alt='logo of app' src={main}/>
        </header>
    );
}

export default Header;