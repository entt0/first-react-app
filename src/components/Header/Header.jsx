import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img alt='logo of app'
                 src='https://avatars.mds.yandex.net/get-images-cbir/2029174/SlhCvlrm7Wl6qxC-sUF57A9659/ocr'/>
        </header>
    );
}

export default Header;