const axios = require('axios');

export async function getAllPayments() {
    const response = await axios.get('/payments');
    return response.data;
}

export async function makePayment(data) {
    const response = await axios.post(`/pay`, data);
    return response.data;
}

export async function deletePayment(paymentId) {
    const response = await axios.delete(`/payments/${paymentId}`);
    return response.status;
}
