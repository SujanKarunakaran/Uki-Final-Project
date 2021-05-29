import axios from 'axios';

const USER_API_BASE_URL_1 = 'https://gold-covering.herokuapp.com/jewellry';
const USER_API_BASE_URL_2 = 'https://gold-covering.herokuapp.com/users';
const USER_API_BASE_URL_3 = 'https://gold-covering.herokuapp.com/orders';

class ApiService {

    fetchJewellries() {
        return axios.get(USER_API_BASE_URL_1);
    }

    fetchJewellryById(jewellryId) {
        return axios.get(USER_API_BASE_URL_1 + '/' + jewellryId);
    }

    deleteJewellry(jewellryId) {
        return axios.delete(USER_API_BASE_URL_1 + '/' + jewellryId);
    }

    addJewellry(jewellry) {
        return axios.post(USER_API_BASE_URL_1, jewellry);
    }

    editJewellry(jewellry) {
        return axios.put(USER_API_BASE_URL_1 + '/' + jewellry.id, jewellry);
    }



    fetchUsers() {
        return axios.get(USER_API_BASE_URL_2);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL_2 + '?id=' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL_2 + '/' + userId);
    }

    addUser(user) {
        return axios.post(USER_API_BASE_URL_2, user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL_2 + '/' + user.id, user);
    }


    fetchOrders() {
        return axios.get(USER_API_BASE_URL_3);
    }

    fetchOrderById(orderId) {
        return axios.get(USER_API_BASE_URL_3 + '/' + orderId);
    }

    deleteOrder(orderId) {
        return axios.delete(USER_API_BASE_URL_3 + '/' + orderId);
    }

}

export default new ApiService();
