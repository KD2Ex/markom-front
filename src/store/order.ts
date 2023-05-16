import {makeAutoObservable} from "mobx";


class Order {

	orders = [
		{
			id: 1,
			date: new Date(),
			status: "Принят",
			isPayed: 'Оплачен',
			cost: 1129,
		},
		{
			id: 2,
			date: new Date(),
			status: "Принят",
			isPayed: 'Оплачен',
			cost: 1129,
		},
		{
			id: 3,
			date: new Date(),
			status: "Принят",
			isPayed: 'Оплачен',
			cost: 1129,
		},
	]

	constructor() {
		makeAutoObservable(this)
	}



}

export default new Order()