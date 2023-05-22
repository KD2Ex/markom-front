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
		cartItem.quantityInCar = 1;
		this.cartItems.push(cartItem);
		this.updatePrice();
	}

	deleteCartItem(cartItem: IProduct) {
		cartItem.quantityInCar = 0;
		console.log(cartItem)
		const index = this.cartItems.indexOf(cartItem);
		this.cartItems.splice(index, 1)
		this.updatePrice();
	}

	changeQuantity(cartItem: IProduct, number: number) {
		const item = this.cartItems.find((item) => item === cartItem)
		console.log(item)
		if (item.quantityInCar === 1 && number < 0) {
			this.deleteCartItem(cartItem)
		} else {
			item.quantityInCar += number;
		}
		this.updatePrice();
	}

	clear() {
		this.cartItems.forEach((item) => {
			item.quantityInCar = 0
		})

		this.updatePrice();
	}

}

export default new Cart()