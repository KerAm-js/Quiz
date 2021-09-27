import axios from 'axios';
import { AUTH_SUCCESS, AUTH_LOGOUT } from './actionsTypes';

export default function auth(email, password, isLogin) {
    return async dispatch => {

        const apiKey = 'AIzaSyA6nJFe_boANAFY1gFjZTqZeBewLqeaVaA';

        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
        if (isLogin) {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
        };

        try {
            const authData = {
                email,
                password,
                returnSecureToken: true,
            };
            const response = await axios.post(url, authData);
            const data = response.data
            console.log(data);

            localStorage.setItem('token', data.idToken);
            localStorage.setItem('localId', data.localId);
            localStorage.setItem('expirationDate', new Date(new Date().getTime() + data.expiresIn * 1000));

            dispatch(authSuccess(data.idToken));
            dispatch(autoLogout(data.expiresIn * 1000));

        } catch (e) {
            alert('Неверный логин или пароль');
            console.log(e);
        };
    };
};

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token,
    };
};

export function autoLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout);
        }, time);
    };
};

export function logout() {
    return {
        type: AUTH_LOGOUT,
    };
};

export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(autoLogout((expirationDate.getTime() - new Date().getTime())));
            };
        };
    };
};

