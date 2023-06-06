import {makeAutoObservable} from "mobx";
import UserService from "../api/services/UserService";
import cart from "./cart";

class User {

	isAuth = false;
	isAdmin = false;


	constructor() {
		makeAutoObservable(this)
	}

	async login(login: string, password: string,) {
		const response = await UserService.login(login, password);

		console.log(response)
		localStorage.setItem('token', response.data.token);
		this.isAuth = true;
		await cart.fetchCart();
	}

	async checkAuth() {
		const token = localStorage.getItem('token');

		if (localStorage.getItem('token')) {
			this.isAuth = true
			await this.getAdmin();
		}
	}

	async logout() {
		localStorage.clear();
		this.isAuth = false;
		cart.cartItems = {items: [], totalPrice: 0}
		cart.totalPrice = 0
	}

	async getAdmin() {
		const adminResponse = await UserService.admin();
		this.isAdmin = !!adminResponse.success;
	}

}

export default new User()