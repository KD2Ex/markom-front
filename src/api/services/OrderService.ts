import $api from "../http";
import {StatusType} from "../../models/types/StatusType";


export default class OrderService {
	static async getOrders() {
		const response = await $api.get('/orders')
		console.log(response.data)
		return response.data
	}

	static async createOrder() {
		return $api.post('/orders/create');
	}

	static async changeStatus(id: number, status: StatusType) {
		console.log(status)
		return $api.post(`/orders/${id}/${status}`);
	}

	static async deleteOrder(id: number) {
		return $api.delete(`/orders/${id}`);
	}
}