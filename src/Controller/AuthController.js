import { BASE_URL, USER, isUserLogged } from '../env_variables';

const axios = require('axios');

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers = { "Content-Type": "application/json" };

const loginUser = async (data) => {

	return await axios.post(USER, JSON.stringify(data))
		.then((res) => {
			console.log(res);
			return res.data;
		})
		.catch((error) => {
			if (error.response) {
				console.log(error.response.data.error);
				console.log(error.response.status);
				throw error.response;
			} else if (error.request) {
				console.log(error.request);
			} else {
				console.log('Error', error.message);
			}
		});
}

export { loginUser };