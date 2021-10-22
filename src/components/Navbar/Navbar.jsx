import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {

    return (
        <nav className={s.nav}>
            <div>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogues' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div>
                <NavLink to='/users' activeClassName={s.activeLink}>All Users</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;