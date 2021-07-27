import s from './Navbar.module.css';
import Friend from './Friend/Friend';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
    debugger;
    let friendElements = props.state.friends
        .map(f => (<Friend avatar={f.avatar}/>)
        );

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
            <p></p>
            <div>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <p></p>
            <div>
                <NavLink to='/friends' activeClassName={s.activeLink}>Friends</NavLink>
                {friendElements}
            </div>
        </nav>
    );
}

export default Navbar;