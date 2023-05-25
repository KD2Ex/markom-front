import {IProduct} from "../models/IProduct";
import {makeAutoObservable} from "mobx";
import CartService from "../api/services/CartService";
import {ICart} from "../models/ICart";


class Cart {

	totalPrice: number = 0;
	cartItems: ICart = {};

	constructor() {
		makeAutoObservable(this)
	}

	async fetchCart() {
		this.cartItems = await CartService.getCart();
		this.updatePrice();
	}

	updatePrice() {
		this.totalPrice = this.cartItems.items.reduce((prev, next) => (
			prev += next.product.price * next.count
		), 0)
	}

	async addCartItem(cartItem: IProduct) {
		console.log(await CartService.addToCart(cartItem.id, 1))
		this.cartItems.items.push({id: cartItem.id, product: cartItem, count: 1});
		this.updatePrice();
	}

	async deleteCartItem(cartItem: IProduct) {
		//const index = this.cartItems.items.indexOf(cartItem);
		//this.cartItems.splice(index, 1)
		await CartService.deleteFromCart(cartItem.id);
		await this.fetchCart();
		this.updatePrice();
	}

	async changeQuantity(cartItem: IProduct, number: number) {

		console.log(await CartService.addToCart(cartItem.id, number))
		await this.fetchCart();
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