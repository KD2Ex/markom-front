import groupCategories from "../store/groupCategories";
import category from "../store/category";


export function getUrlName(url: string) {
	const params = url.split('_');
	const groupCatName = groupCategories.groupCategories.find(item => item.id === +params[0])?.name
	if (params.length === 1) {
		return [groupCatName]
	} else {
		return [
			category.categories.find(item => item.id === +params[1])?.name
		]
	}
}