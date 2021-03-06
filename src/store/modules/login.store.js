import axios from '@/api/config';
// axios.defaults.headers.common.Authorization = `Bearer ${window.localStorage.getItem('refreshToken')}`;

const state = {
	user: {
		data: null,
		loggedIn: false
	},
	token: null
};

const actions = {
	checkLogin: ({ commit }, userData) => {
		return axios
			.post(`/users/login`, {
				email: userData.email,
				password: userData.password,
				user_type: userData.userType
			})
			.then(response => {
				commit('SET_LOGIN', response);
				return response.data.data;
			})
			.catch(error => {
				throw error.response ? error.response.data.error : error;
			});
	}
};
const mutations = {
	SET_LOGIN: (state, userData) => {
		state.token = userData.headers.token;
		window.localStorage.setItem('refreshToken', state.token);
		state.user.data = userData.data.data;
		state.user.loggedIn = true;
	}
};

const getters = {
	isLoggedIn: state => {
		return state.user.loggedIn;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};
