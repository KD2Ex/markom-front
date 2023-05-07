import {UnitType} from "./types/UnitType";


export interface ICartItem {
	id: number,
	title: string,
	quantity: number,
	unit: UnitType,
	weight: string,
	price: number,
	img: string,
}