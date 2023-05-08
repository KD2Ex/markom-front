import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";
import {ICategory} from "../../../../../models/ICategory";
import {Link} from "react-router-dom";

interface CategoryCardProps {
	category: ICategory,
	img: string
}

const CategoryCard: FC<CategoryCardProps> = ({category, img}) => {
	return (
		<Box component={Link} to={`/catalog/${category.value}`} sx={{padding: 0}}>
			<img style={{width: '100%'}} src={img} alt=""/>
			<Typography fontSize={18}>
				{category.title}
			</Typography>
		</Box>
	);
};

export default CategoryCard;