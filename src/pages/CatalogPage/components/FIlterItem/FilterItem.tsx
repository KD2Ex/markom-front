import React, {FC, useState} from 'react';
import {Box, Collapse, ListItemButton, ListItemText, Typography} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

interface FilterItemProps {
	title: string,
	filterElements: any[]
}

const FilterItem: FC<FilterItemProps> = ({title, filterElements}) => {

	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	}

	return (
		<>
			<ListItemButton onClick={handleClick}>



				<Typography fontSize={18} sx={{flexGrow:1}}>
					{title}
				</Typography>
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse
				in={open}
				unmountOnExit
			>
				<Box sx={{py: 2}}>

					{filterElements.map((elem) => (
						elem
					))}
				</Box>

			</Collapse>
		</>

	);
};

export default FilterItem;