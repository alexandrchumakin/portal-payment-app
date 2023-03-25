const axios = require('axios');

export async function getAllUsers() {

    const response = await axios.get('/users');
    return response.data;
}

export async function createUser(data) {
    const response = await axios.post(`/user`, data);
    return response.data;
}
