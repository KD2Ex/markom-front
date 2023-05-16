import {UnitType} from "./types/UnitType";
import {ICategory} from "./ICategory";


export interface IProduct {
	id: number,
	title: string,
	quantity: number,
	unit: UnitType,
	weight?: number,
	price: number,
	img: string,
	discountPrice?: number | null,
	category: ICategory,
	quantityInCar: number,
}