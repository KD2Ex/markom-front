import {ICategory} from "./ICategory";


export interface IGroupCategory {
	id: number,
	title: string,
	categories: ICategory[],
	value: string,
}