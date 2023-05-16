import React from 'react';
import {InputAdornment} from "@mui/material";
import {DefaultButton} from "../styled/DefaultButton";
import {Link} from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import {SearchTextField} from "../styled/SearchTextField";

const SearchBar = ({value, onChange, ...rest}) => {


	return (
		<SearchTextField
			{...rest}
			fullWidth
			placeholder={'Поиск'}
			value={value}
			onChange={onChange}
			InputProps={{endAdornment: <InputAdornment position={"end"}>
					<DefaultButton sx={{m: 0, p: 0, maxWidth: '50px'}} component={Link} to={`/search/${value}`}>
						<SearchIcon sx={{width: '100%', height: '100%', p: 1}}/>
					</DefaultButton>
				</InputAdornment>
			}}>

		</SearchTextField>
	);
};

export default SearchBar;