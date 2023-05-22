import $api from "../http";


export default class UserService {
	static async reg(
		lastName: string,
		firstName: string,
		patronymic: string,
		login: string,
		password: string,
		phone: string,
	) {
		return $api.post('/users/reg', {
			lastName,
			firstName,
			patronymic,
			login,
			password,
			phone
		})
	}

	static async login(login: string, password: string) {
		return $api.post('/users/auth', {login, password})
	}
}