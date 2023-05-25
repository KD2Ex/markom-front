import React, {FC, useState} from 'react';
import {Box, Collapse, ListItemButton, Typography} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {ICategory} from "../../../../models/ICategory";

interface CategoryProps {
	title: string,
	subCategories?: ICategory[],
	value: string,
}

const Category: FC<CategoryProps> = ({title, subCategories = [], value}) => {

	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	}

	return (
		<>
			<ListItemButton onClick={handleClick} >

				<Typography fontSize={18} sx={{flexGrow:1}} component={Link} to={`${value}`}>
					{title}
				</Typography>
				{subCategories?.length !== 0 &&( open ? <ExpandLess /> : <ExpandMore />)}
			</ListItemButton>
			{subCategories?.length !== 0
				&& <Collapse
					in={open}
					unmountOnExit
				>
					<Box sx={{p: 2}}>
						{subCategories?.map((elem) => (
							<ListItemButton component={Link} to={`${value}_${elem.id}`}>
								<Typography fontSize={16} sx={{flexGrow:1}}>
									{elem.name}
								</Typography>
							</ListItemButton>
						))}
					</Box>

				</Collapse>

			}

		</>
	);
};

export default Category;