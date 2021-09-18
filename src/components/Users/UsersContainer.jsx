import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setPageAC,
    setTotalUsersAC,
    setUserAC,
    toggleIsFetchingAC,
    unfollowAC
} from "../../redux/usersReducer";
import React from "react";
import * as axios from "axios";

import Preloader from "../common/Preloader/Preloader";

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersNumber(response.data.totalCount);

        });
    }

    onPageChanged = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);

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
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUserAC(users));
        },
        setPage: (pageNumber) => {
            dispatch(setPageAC(pageNumber));
        },
        setTotalUsersNumber: (totalCount) => {
            dispatch(setTotalUsersAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;
