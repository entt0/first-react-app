import React from "react";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 19792;
        }
        profileAPI.setProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            });
    }

    render() {
        return (<Profile {...this.props}/>)
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let UrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(UrlDataContainer);