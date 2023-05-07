import {ICartItem} from "../models/ICartItem";
import {makeAutoObservable} from "mobx";


class Cart {

	cartItems: ICartItem[] = [
	];

	constructor() {
		makeAutoObservable(this)
	}

	getCartItems() {

	}

	addCartItem(cartItem: ICartItem) {
		this.cartItems.push(cartItem);
	}

	deleteCartItem(cartItem: ICartItem) {
		console.log(cartItem)
		//const result = this.cartItems.filter((item) => item.id !== cartItem.id)
		const index = this.cartItems.indexOf(cartItem);
		this.cartItems.splice(index, 1)
	}
}

export default new Cart()