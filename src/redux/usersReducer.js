import {usersAPI} from "../api/api";
import {updateObjectArray} from "../utils/object-helpers";

const FOLLOW = 'usersReducer/FOLLOW';
const UNFOLLOW = 'usersReducer/UNFOLLOW';
const SET_USERS = 'usersReducer/SET_USERS';
const SET_PAGE_NUMBER = 'usersReducer/SET_PAGE_NUMBER';
const SET_TOTAL_USERS = 'usersReducer/SET_TOTAL_USERS';
const TOGGLE_IS_FETCHING = 'usersReducer/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'usersReducer/TOGGLE_IS_FOLLOWING';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersNumber: 0,
    currentPage: 1,
    isFetching: false,
    downloadingUsers: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_PAGE_NUMBER:
            return {
                ...state,
                currentPage: action.pageNumber
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsersNumber: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                downloadingUsers: action.isFollowing
                    ? [...state.downloadingUsers, action.userId]
                    : state.downloadingUsers.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setPage = (pageNumber) => ({type: SET_PAGE_NUMBER, pageNumber});
export const setTotalUsersNumber = (totalCount) => ({type: SET_TOTAL_USERS, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowing = (isFollowing, userId) => ({type: TOGGLE_IS_FOLLOWING, isFollowing, userId});

export const requestUsers = (pageSize, currentPage) => async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let data = await usersAPI.getUsers(pageSize, currentPage);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersNumber(data.totalCount));
};

export const changePage = (pageSize, page) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setPage(page));

    let data = await usersAPI.getUsers(pageSize, page);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));


};

export const follow = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowing(true, userId));
    let data = await usersAPI.addFriend(userId)

    if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
    }
    dispatch(toggleIsFollowing(false, userId));


};

export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowing(true, userId));

    let data = await usersAPI.deleteFriend(userId);

    if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleIsFollowing(false, userId));


};

export default usersReducer;

