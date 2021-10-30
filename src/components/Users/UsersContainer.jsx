import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    changePage,
    follow, requestUsers,
    unfollow
} from "../../redux/usersReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getDownloadingUsers,
    getIsFetching,
    getPageSize,
    getTotalUsersNumber,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.pageSize, this.props.currentPage);
    }

    onPageChanged = (page) => {
        this.props.changePage(this.props.pageSize, page);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   users={this.props.users}
                   totalUsers={this.props.totalUsers}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   downloadingUsers={this.props.downloadingUsers}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsers: getTotalUsersNumber(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        downloadingUsers: getDownloadingUsers(state)
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, requestUsers, changePage}),
    withAuthRedirect
)(UsersContainer)