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
		this.orders = this.orders.map(item => {
			const date = item.orderDate.split('T')
			date[1] = date[1].split('.')[0];
			console.log(date.join(' '))
			return {...item, orderDate: date.join(' ')}
		})
	}

	async createOrder() {
		await OrderService.createOrder();
	}

}

export default new Order()