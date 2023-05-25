import {IProduct} from "./IProduct";


export interface IOrderItem {
	count: number,
	discount: number,
	id: number,
	price: number,
	product: IProduct,
}