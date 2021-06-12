import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img alt='logo of app' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Free_logo.svg/440px-Free_logo.svg.png' />
        </header>
    );
}

export default Header;