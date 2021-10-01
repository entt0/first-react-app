import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    changePage,
    follow, getUsersThunk,
    unfollow
} from "../../redux/usersReducer";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.pageSize, this.props.currentPage);
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
        users: state.usersPage.users,
        totalUsers: state.usersPage.totalUsersNumber,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        downloadingUsers: state.usersPage.downloadingUsers
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    getUsersThunk,
    changePage
})(UsersContainer);
