import $api from "../http";


export default class MeasurementService {
	static async fetchMeasures() {
		const response = await $api.get('/measurements');
		console.log(response.data)
		return response.data;
	}
}