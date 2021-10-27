import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {authUser, logout} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authUser();
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {authUser, logout})(HeaderContainer);