import {IProduct} from "./IProduct";


export interface ICart {
	items: [{
		id: number,
		product: IProduct,
		count: number,
	}],
	totalPrice: number,
}