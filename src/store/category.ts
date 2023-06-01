import {makeAutoObservable} from "mobx";
import {ICategory} from "../models/ICategory";
import CategoryService from "../api/services/CategoryService";

class Category {

	categories: ICategory[] = [
		{
			id: 1,
			title: 'Фрукты и ягоды',
			value: 'fruits-and-berries',
		},
		{
			id: 2,
			title: 'Овощи',
			value: 'vegetables',
		},
		{
			id: 3,
			title: 'Зелень',
			value: 'green',
		},
		{
			id: 4,
			title: 'Рыба, икра',
			value: 'fish',
		},
		{
			id: 5,
			title: 'Птица',
			value: 'bird',
		},
		{
			id: 6,
			title: 'Говядина',
			value: 'beef',
		},
		{
			id: 7,
			title: 'Свинина',
			value: 'pork',
		},
		{
			id: 8,
			title: 'Молоко, сыр, яйца',
			value: 'milkish',
		},

	];

	constructor() {
		makeAutoObservable(this)
	}


	async fetchCategories() {

		this.categories = await CategoryService.fetchCategories();
	}

}

export default new Category();