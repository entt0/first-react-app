import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '124a82dc-5ca5-4236-a5c2-61c8d456d8dc'}
})

export const usersAPI = {
    getUsers(pageSize = 10, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    },
    deleteFriend(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    addFriend(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    setProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`)
            .then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
            .then(response => response.data)
    },
    changeAvatar(photos) {
        const formData = new FormData();
        formData.append('image', photos);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    }
}

export const authAPI = {
    checkAuthorization() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    sendLoginFormData(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data);
    },
    logoutUser() {
        return instance.delete(`auth/login`)
            .then(response => response.data);
    }
}
