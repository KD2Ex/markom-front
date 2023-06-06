import $api from "../http";
import {StatusType} from "../../models/types/StatusType";


export default class OrderService {
	static async getOrders() {
		const response = await $api.get('/orders')
		console.log(response.data)
		return response.data
	}

	static async createOrder(cash: boolean, information: string) {
		return $api.post('/orders/create', {
			cash,
			information
		});
	}

	static async changeStatus(id: number, status: StatusType) {
		console.log(status)
		return $api.post(`/orders/${id}/${status}`);
	}

	static async deleteOrder(id: number) {
		return $api.delete(`/orders/${id}`);
	}
}