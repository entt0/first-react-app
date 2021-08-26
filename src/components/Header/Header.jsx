import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img alt='logo of app'
                 src='https://sun9-26.userapi.com/impg/SdG9NSFTmr3hIhZjMmcQlkgzLiki3q4auMKi8w/QvNTEfEaygc.jpg?size=500x500&quality=96&sign=639305ba38bdec448ee959a41c09384a&type=album'/>
        </header>
    );
}

export default Header;