import $api from "../http";


export default class GroupCategoriesService {
	static async getGroupCategories() {
		const response = await $api.get('/groups');
		console.log(response.data)
		return response.data;
	}
}