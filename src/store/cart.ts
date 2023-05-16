import {IProduct} from "../models/IProduct";
import {makeAutoObservable} from "mobx";


class Cart {

	totalPrice: number = 0;
	cartItems: IProduct[] = [

	];

	constructor() {
		makeAutoObservable(this)
	}

	updatePrice() {
		this.totalPrice = this.cartItems.reduce((prev, next) => (
			prev += next.price * next.quantityInCar
		), 0)
	}

	addCartItem(cartItem: IProduct) {
		//if (this.cartItems.find((item) => item === cartItem))
		cartItem.quantityInCar = 1;
		this.cartItems.push(cartItem);
		this.updatePrice();
		// this.totalPrice += cartItem.price * cartItem.quantityInCar;
	}

	deleteCartItem(cartItem: IProduct) {
		cartItem.quantityInCar = 0;
		console.log(cartItem)
		//const result = this.cartItems.filter((item) => item.id !== cartItem.id)
		const index = this.cartItems.indexOf(cartItem);
		this.cartItems.splice(index, 1)
		this.updatePrice();
		//this.totalPrice -= cartItem.price * cartItem.quantity
	}

	changeQuantity(cartItem: IProduct, number: number) {
		const item = this.cartItems.find((item) => item === cartItem)
		console.log(item)
		if (item.quantityInCar === 1 && number < 0) {
			this.deleteCartItem(cartItem)
		} else {
			item.quantityInCar += number;
		}
		//this.totalPrice += item.price * number
		//item.quantityInCar += number;
		this.updatePrice();
	}

}

export default new Cart()