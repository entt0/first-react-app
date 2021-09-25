import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '124a82dc-5ca5-4236-a5c2-61c8d456d8dc'}
})

export const usersAPI = {
    getUsers(pageSize = 8, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    deleteFriend(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    addFriend(id) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {})
            .then(response => response.data)
    }
}

export const profileAPI = {
    setProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    checkAuthorization(){
        return instance.get(`auth/me`)
            .then (response => response.data)
    }
}






