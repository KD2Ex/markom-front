import $api from "../http";


export default class CartService {
	static async getCart() {
		const response = await $api.get('/carts/all');
		console.log(response.data)
		return response.data;
	}

	static async addToCart(productId: number, count: number) {
		return $api.post('/carts', {
			productId,
			count
		})
	}

	static async deleteFromCart(productId: number) {
		return $api.delete(`/carts/${productId}`);
	}

}