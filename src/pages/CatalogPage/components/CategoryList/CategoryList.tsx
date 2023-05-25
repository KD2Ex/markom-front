import React, {memo} from 'react';
import groupCategories from "../../../../store/groupCategories";
import Category from "../Category/Category";
import category from "../../../../store/category";
import {List} from "@mui/material";

const CategoryList = memo(() => {
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

			{category.categories.filter((item) => item.group === null).map(item => (
				<Category
					title={item.name}
					value={'0_'+item.id}
				/>
			))}

		</List>
	);
});

export default CategoryList;