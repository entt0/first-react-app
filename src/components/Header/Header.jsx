import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img alt='logo of app'
                 src='https://psv4.userapi.com/c505536/u72075069/docs/d4/36a22c7420a7/maias.png?extra=wF3pbz3u5s4nP1VMLogrVgT15ezjgpdnzT4anMPqeILpsPx-L0wlTl2BU940Cu_0ZE2exiTAYN3n35bnRyrU6kb35vdLbD8Ls1g0iBDfmEssEihzLdm3YO2ItTpB2gFVWRDrh8LF_1FkC0Fjki_Z_-Y'/>
        </header>
    );
}

export default Header;