import axios from "axios";
import {URL} from "./constants.js";

export const getUsers = (page) => {
    return axios({
        url: `${URL}/users?page=${page}`,
        method: 'GET',
    })
}
//////////////////////////
// Регистрация пользователя


export const register = (data) => {
    return axios({
        url: `${URL}/register/`,
        method: 'POST',
        data: {
            email: data.email,
            password: data.password,
        }
    })
}


// Авторизация пользователя

export const login = (data) => {
    return axios({
        url: `${URL}/login/`,
        method: 'POST',
        data: {
            email: data.email,
            password: data.password,
        }
    })
}