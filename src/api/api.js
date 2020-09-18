import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "7e2cbe93-5d13-47f9-8e08-ad572dc60652"
    }
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    follow  (id)  {
        return instance.post(`follow/${id}`).then(response => response.data);
    },
    unfollow (id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },
    getProfile(userId){
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`).then(response => response.data);
    },
    getStatus(userId){
        return instance.get(`/profile/status/${userId}`).then(response => response.data);
    },
    updateStatus(status){
        return instance.put(`/profile/status/`, {status: status});
    },
    savePhoto(photoFile){
        let formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`/profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile){
        return instance.put('/profile/', profile);
    }
}

export const authAPI = {
    me(){
        return instance.get('auth/me').then(response => response.data);
    },
    login(email, password, rememberMe = false){
        return instance.post('auth/login', {email, password, rememberMe}).then(response => response.data);
    },
    logout(){
        return instance.delete('auth/login').then(response => response.data);
    }
}
