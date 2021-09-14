import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setPageAC, setTotalUsersAC, setUserAC, unfollowAC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsers: state.usersPage.totalUsersNumber,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
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
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
