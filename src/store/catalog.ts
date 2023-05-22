import {makeAutoObservable} from "mobx";
import {IProduct} from "../models/IProduct";
import banana from '../assets/banana.png';
import category from "./category";
import ProductService from "../api/services/ProductService";

class Catalog {

	products: IProduct[] = [
		{
			id: 1,
			image: banana,
			discountPrice: null,
			price: 300,
			amount: 1,
			discount: 0,
			title: 'Авакадо',
			category: category.categories[0],
			unit: 'шт',
			weight: 2,
			quantityInCar: 0,
			description: 'Сладкий пирожок с яблочным повидлом внутри'
		},
		{
			id: 2,
			img: banana,
			discountPrice: null,
			price: 300,
			quantity: 1,
			title: 'Ананас',
			category: category.categories[0],
			unit: 'шт',
			weight: 2,
			quantityInCar: 0
		},{
			id: 3,
			img: banana,
			discountPrice: null,
			price: 300,
			quantity: 1,
			title: 'Гранат',
			category: category.categories[0],
			unit: 'шт',
			weight: 2,
			quantityInCar: 0
		},{
			id: 4,
			img: banana,
			discountPrice: null,
			price: 300,
			quantity: 1,
			title: 'Грейпфрут',
			category: category.categories[1],
			unit: 'шт',
			weight: 2,
			quantityInCar: 0
		},
		{
			id: 5,
			img: banana,
			discountPrice: null,
			price: 300,
			quantity: 1,
			title: 'Груша дюшес',
			category: category.categories[1],
			unit: 'шт',
			weight: 2,
			quantityInCar: 0
		},
		{
			id: 6,
			img: banana,
			discountPrice: null,
			price: 300,
			quantity: 1,
			title: 'Персик',
			category: category.categories[2],
			unit: 'шт',
			weight: 2,
			quantityInCar: 0
		},
		{
			id: 7,
			img: banana,
			discountPrice: null,
			price: 300,
			quantity: 1,
			title: 'Персик',
			category: category.categories[2],
			unit: 'шт',
			weight: 2,
			quantityInCar: 0
		},

	]

	constructor() {
		makeAutoObservable(this)
	}

	async fetchProducts() {
		this.products = await ProductService.fetchProducts();
	}

}

export default new Catalog()