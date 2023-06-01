import $api from "../http";


export default class UserService {
	static async reg(
		fullName: string,
		login: string,
		password: string,
		phone: string,
		address: string
	) {

		return $api.post('/users/reg', {
			fullName,
			login,
			password,
			phone,
			address
		})
	}

	static async login(login: string, password: string) {
		return $api.post('/users/auth', {login, password})
	}

	static async getProfile() {
		const response = await $api.get('/users/profile');
		console.log(response.data)
		return response.data
	}

	static async admin() {
		const response = await $api.get('/users/admin');
		console.log(response.data)
		return response.data
	}

	static async updateProfile(
		fullName: string,
		login: string,
		phone: string,
		address: string
	) {
		return $api.post('/users/profile', {
			fullName,
			login,
			phone,
			address
		})
	}

}