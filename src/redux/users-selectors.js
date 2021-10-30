export const getUsers = (state) => {
    return state.usersPage.users
}

export const getTotalUsersNumber = (state) => {
    return state.usersPage.totalUsersNumber
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getDownloadingUsers = (state) => {
    return state.usersPage.downloadingUsers
}
