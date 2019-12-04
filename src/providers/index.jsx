import axios from 'axios';

import {isNilOrEmpty} from "../helpers";

const RemoveTokenWithException = (message) => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    throw new Error(message);
};

const authProvider = {
    login: ({ email, password }) =>  {
        return axios.post(`http://boost.ma/api/user`, { 'email' : email, 'password' :password })
            .then(response => {

                if(!isNilOrEmpty(response)){
                    if (response.status < 200 || response.status >= 300) {
                        RemoveTokenWithException(response.statusText);
                    }

                    if (isNilOrEmpty(response.data)) {
                        RemoveTokenWithException("Empty data retrieved");
                    }
                    return response.data[0];
                }
                else {
                    RemoveTokenWithException("No valid response");
                }
            }).then(({token}) => {
                if(isNilOrEmpty(token) || token === 'undefined'){
                    RemoveTokenWithException("No token retrieved");
                }
                else {
                    localStorage.setItem('email', email);
                    localStorage.setItem('token', token);
                }
            });
    },
    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        return Promise.resolve();
    },
    checkAuth: () => {
        axios.post(`http://boost.ma/api/user`, { 'email' : localStorage.getItem('email'), 'token' :localStorage.getItem('token') })
            .then(response => {
                if(!isNilOrEmpty(response)){
                    if (response.status < 200 || response.status >= 300) {
                        RemoveTokenWithException(response.statusText);
                    }
                    if (isNilOrEmpty(response.data)) {
                        RemoveTokenWithException("Empty data retrieved");
                    }

                    return response.data[0];
                }
                else {
                    RemoveTokenWithException("No valid response");
                }
            }).then(({isValidUser}) => {
                if(isNilOrEmpty(isValidUser) || isValidUser === 'undefined'){
                    RemoveTokenWithException("Invalid properties");
                }
                else {
                    return true
                }
            });

        return false
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    getPermissions: () => Promise.resolve(),
};

export default authProvider;