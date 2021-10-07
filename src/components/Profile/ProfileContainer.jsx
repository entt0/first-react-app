import React from "react";
import {getProfile} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import Profile from "./Profile";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 19792;
        }
        this.props.getProfile(userId);
    }
    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let UrlDataContainer = withRouter(ProfileContainer);

export default WithAuthRedirect(connect(mapStateToProps, {getProfile})(UrlDataContainer));