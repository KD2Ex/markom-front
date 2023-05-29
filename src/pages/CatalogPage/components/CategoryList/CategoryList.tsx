import React, {memo} from 'react';
import groupCategories from "../../../../store/groupCategories";
import Category from "../Category/Category";
import category from "../../../../store/category";
import {List} from "@mui/material";
import {ICategory} from "../../../../models/ICategory";
import {resolveBaseUrl} from "vite";

const CategoryList = memo(() => {
	const compareFunc = (a: ICategory, b: ICategory) => {
		if (a.name < b.name) {
			return -1
		}
		if (a.name > b.name) {
			return 1
		}
		return 0;
	}

	return (
		<List
			sx={{
				width: '100%',

			}}
		>
			{groupCategories.groupCategories.map(item => (
				<Category
					title={item.name}
					subCategories={category.categories.filter(cat => cat.group?.id === item.id)}
					value={item.id}
				/>
			))}

			{category.categories.sort((a, b) => compareFunc(a, b)).filter((item) => item.group === null).map(item => (
				<Category
					title={item.name}
					value={'0_'+item.id}
				/>
			))}

		</List>
	);
});

export default CategoryList;