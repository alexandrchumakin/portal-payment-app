const axios = require('axios');

export async function getAllMerchants() {
    const response = await axios.get('/merchants');
    return response.data;
}

export async function createMerchant(data) {
    const response = await axios.post(`/merchant`, data);
    return response.data;
}

export async function deleteMerchant(merchantId) {
    const response = await axios.delete(`/merchants/${merchantId}`);
    return response.status;
}
