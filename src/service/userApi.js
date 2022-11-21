/* eslint-disable prettier/prettier */
const { default: axiosClient } = require("./axiosClient");

const userApi = {
    login(data) {
    const url = '/login'
    return axiosClient.post(url, data )
},
    register(data) {
    const url = '/login'
    return axiosClient.post(url, data )
    }
}

export default userApi