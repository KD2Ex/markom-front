import {IProduct} from "../models/IProduct";
import {makeAutoObservable} from "mobx";


class Cart {

	totalPrice: number = 0;
	cartItems: IProduct[] = [

	];

	constructor() {
		makeAutoObservable(this)
	}

	getCartItems() {

	}

	addCartItem(cartItem: IProduct) {
		this.cartItems.push(cartItem);
		this.totalPrice += cartItem.price * cartItem.quantity;
	}

	deleteCartItem(cartItem: IProduct) {
		console.log(cartItem)
		//const result = this.cartItems.filter((item) => item.id !== cartItem.id)
		const index = this.cartItems.indexOf(cartItem);
		this.cartItems.splice(index, 1)
		this.totalPrice -= cartItem.price * cartItem.quantity
	}


}

export default new Cart()