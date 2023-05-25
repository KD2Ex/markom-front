import {IProduct} from "./IProduct";
import {IStatus} from "./IStatus";


export interface IOrder {
	id: number,
	cost: number,
	items: IProduct[],
	orderDate: string,
	status: IStatus
}