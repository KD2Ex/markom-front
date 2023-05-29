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
		localStorage.setItem('token', response.data.token);
		this.isAuth = true;
	}

	checkAuth() {
		const token = localStorage.getItem('token');

		if (localStorage.getItem('token')) {
			this.isAuth = true
		}
	}

	async logout() {
		localStorage.clear();
		this.isAuth = false;
	}

}

export default new User()