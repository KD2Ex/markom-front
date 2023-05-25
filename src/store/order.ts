import {makeAutoObservable} from "mobx";
import OrderService from "../api/services/OrderService";
import {IOrder} from "../models/IOrder";


class Order {

	orders: IOrder[] = [

	]

	constructor() {
		makeAutoObservable(this)
	}

	async fetchOrders() {
		this.orders = await OrderService.getOrders();
	}

	async createOrder() {
		await OrderService.createOrder();
	}

}

export default new Order()