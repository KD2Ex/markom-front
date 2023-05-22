import category from "../store/category";
import catalog from "../store/catalog";
import measurement from "../store/measurement";


export const useFetchData = async () => {
	await category.fetchCategories();
	await catalog.fetchProducts();
	await measurement.fetchMeasures();
}