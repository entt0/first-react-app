import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {setUserData} from "../../redux/authReducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.checkAuthorization()
            .then(data => {
                if (data.resultCode === 0) {
                    let {login, email, id} = data.data;
                    this.props.setUserData(login, email, id);
                }
            });
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

export default connect(mapStateToProps, {setUserData})(HeaderContainer);