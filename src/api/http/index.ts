import axios from "axios";

export const API_URL = 'http://91.223.199.62:8097/api'

const $api = axios.create({
	baseURL: API_URL,
	timeout: 5000
})

$api.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	return config;
})

export default $api;