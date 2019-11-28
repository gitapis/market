import axios from 'axios';

import {isNilOrEmpty} from "../helpers";

const RemoveTokenWithException = (message) => {
    localStorage.removeItem('token');
    throw new Error(message);
};

const authProvider = {
    login: ({ username, password }) =>  {
        return axios.post(`http://boost.ma/api/authenticate`, { 'email' : username, 'password' :password })
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
                    localStorage.setItem('token', token);
                }
            });
    },
    logout: () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    checkAuth: () => localStorage.getItem('token')
        ? Promise.resolve()
        : Promise.reject(),
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