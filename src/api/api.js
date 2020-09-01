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

    getFollow  (id)  {
        return instance.post(`follow/${id}`).then(response => response.data);
    },

    getUnfollow (id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    }
}