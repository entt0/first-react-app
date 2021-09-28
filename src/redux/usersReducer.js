const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

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
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
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

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setPage = (pageNumber) => ({type: SET_PAGE_NUMBER, pageNumber});
export const setTotalUsersNumber = (totalCount) => ({type: SET_TOTAL_USERS, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowing = (isFollowing, userId) => ({type: TOGGLE_IS_FOLLOWING, isFollowing, userId});

export default usersReducer;

