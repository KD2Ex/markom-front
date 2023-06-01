import category from "../store/category";
import catalog from "../store/catalog";
import measurement from "../store/measurement";
import cart from "../store/cart";
import groupCategories from "../store/groupCategories";
import {trackPromise} from "react-promise-tracker";


export const useFetchData = async () => {
	try {
		await trackPromise(category.fetchCategories())
		await catalog.fetchProducts();
		await measurement.fetchMeasures();
		await cart.fetchCart();
		await groupCategories.fetchGroupCategories();
		console.log(cart.cartItems)

	} catch (e) {

	}

}