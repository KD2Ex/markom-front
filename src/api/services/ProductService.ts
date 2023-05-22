import $api from "../http";
import {IProduct} from "../../models/IProduct";


export default class ProductService {
	static async fetchProducts() {
		const response = await $api.get('/products');
		console.log(response.data)
		return response.data
	}

	static async addNewProduct(product: IProduct) {

		const {id, title, price, amount, discount, description, image} = product;
		const categoryId = product.categoryId;
		const measurementId = product.measurementId;
		console.log(id, title, price, amount, discount, description, image, categoryId, measurementId)

		return $api.post('/products/', {
			id,
			title,
			price,
			amount,
			discount,
			description,
			image,
			categoryId,
			measurementId
		})

	}

	static async updateProduct(product: IProduct) {

		const {id, title, price, amount, discount, description, image} = product;
		const categoryId = product.categoryId;
		const measurementId = product.measurementId;
		console.log(id, title, price, amount, discount, description, image, categoryId, measurementId)
		return $api.put('/products/', {
			id,
			title,
			price,
			amount,
			discount,
			description,
			image,
			categoryId,
			measurementId
		})
	}

	static async deleteProduct(id: number) {
		return $api.delete(`/products/${id}`);
	}


}