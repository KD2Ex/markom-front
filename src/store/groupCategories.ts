import {makeAutoObservable} from "mobx";
import {IGroupCategory} from "../models/IGroupCategory";
import category from "./category";


class GroupCategories {

	groupCategories: IGroupCategory[] = [
		{
			id: 1,
			title: 'Овощи, фрукты, ягоды',
			categories: [
				category.categories[0],
				category.categories[1],
				category.categories[2],
			],
			value: ''
		},
		{
			id: 2,
			title: 'Птица, мясо',
			categories: [
				category.categories[4],
				category.categories[5],
				category.categories[6],
			],
			value: 'bird-meat'
		},
	]

	constructor() {
		makeAutoObservable(this)
		this.groupCategories.map(item => {
			return item.value = item.categories.map(item => item.value).join('_');
		})
	}
}

export default new GroupCategories()