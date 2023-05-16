import {makeAutoObservable} from "mobx";


class User {

	isAuth = false;

	constructor() {
		makeAutoObservable(this)
	}

	login() {
		this.isAuth = true;
	}

}

export default new User()