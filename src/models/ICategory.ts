import {IGroupCategory} from "./IGroupCategory";


export interface ICategory {
	id: number,
	name: string,
	group: IGroupCategory
}