import groupCategories from "../store/groupCategories";
import category from "../store/category";
import catalog from "../store/catalog";


export function getUrlName(url: string) {

	if (!url.includes('_')) {
		return catalog.products.find((item) => item.id === +url)?.title
	}

	const params = url.split('_');
	console.log(params)
	const groupCatName = groupCategories.groupCategories.find(item => item.id === +params[0])?.name
	if (params.length === 1) {
		return [groupCatName]
	} else {
		return [
			category.categories.find(item => item.id === +params[1])?.name
		]
	}
}