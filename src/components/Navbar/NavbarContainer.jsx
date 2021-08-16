import Navbar from "./Navbar";

const NavbarContainer = (props) => {
    let state = props.store.getState().sidebar;

    return (
        <Navbar sidebar={state}/>
    );
}

export default NavbarContainer;