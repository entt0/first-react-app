import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import * as axios from "axios";
import {setUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {login, email, id} = response.data.data;
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