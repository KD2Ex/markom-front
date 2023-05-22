import {UnitType} from "./types/UnitType";
import {ICategory} from "./ICategory";
import {IMeasurement} from "./IMeasurement";


export interface IProduct {
	id: number,
	title: string,
	price: number,
	amount: number,
	discount?: number,
	description?: string;
	image: string,
	category: ICategory,
	measurement: IMeasurement,
	weight?: number,
	quantityInCar: number,
}