import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    follow,
    setPage,
    setTotalUsersNumber,
    setUsers,
    toggleIsFetching, toggleIsFollowing,
    unfollow
} from "../../redux/usersReducer";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersNumber(data.totalCount);
        });
    }

    onPageChanged = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setPage(page);
        usersAPI.getUsers(this.props.pageSize, page).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);

        });
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
                   toggleIsFollowing={this.props.toggleIsFollowing}
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
    follow, unfollow, setUsers, setPage, setTotalUsersNumber, toggleIsFetching, toggleIsFollowing
})(UsersContainer);
