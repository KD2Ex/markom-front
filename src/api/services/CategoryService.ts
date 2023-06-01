import $api from "../http";


export default class CategoryService {
	static async fetchCategories() {
		console.log('catFetch')
		const response = await $api.get('/categories');
		console.log(response.data)
		return response.data
	}
}