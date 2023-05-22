import {makeAutoObservable} from "mobx";
import UserService from "../api/services/UserService";


class User {

	isAuth = false;

	constructor() {
		makeAutoObservable(this)
	}

	async login(login: string, password: string,) {
		const response = await UserService.login(login, password);
		console.log(response)
		localStorage.setItem('token', response.data.accessToken);
		this.isAuth = true;
	}

	async checkAuth() {
		if (localStorage.getItem('token')) {
			this.isAuth = true
		}
	}

}

export default new User()