import axios from 'axios';

const authProvider = {
    login: ({ username, password }) =>  {
        return axios.post(`http://boost.ma/api/authenticate`, { 'email' : username, 'password' :password })
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.data[0];
            }).then(({token}) => {
                console.log(token);
                localStorage.setItem('token', token);
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
    getPermissions: params => Promise.resolve(),
}

export default authProvider;