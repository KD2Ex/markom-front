import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";
import {ICategory} from "../../../../../models/ICategory";
import {Link} from "react-router-dom";
import {IGroupCategory} from "../../../../../models/IGroupCategory";

interface CategoryCardProps {
	category: ICategory,
	img: string
}

const CategoryCard: FC<CategoryCardProps> = ({category, img}) => {
	return (
		<Box component={Link} to={`/catalog/${category.group.id}_${category.id}`} sx={{padding: 0}}>
			<img style={{width: '100%'}} src={img} alt=""/>
			<Typography fontSize={18}>
				{category.name}
			</Typography>
		</Box>
	);
};

export default CategoryCard;