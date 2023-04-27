import React from 'react';
import {Box, Button, IconButton, InputAdornment, OutlinedInput, TextField} from "@mui/material";
import logo from '../../assets/markom_logo.svg';
import {DefaultButton} from "../styled/DefaultButton";
import {SearchTextField} from "../styled/SearchTextField";

const styles = {
	"&.MuiInputBase-input-MuiOutlinedInput-input": {
		height: '48px',
	}
}

/*const useOutlinedInputStyles=  makeStyles({
	root: {
		"& .Mui-focused .MuiOutlinedInput-notchedOutline": {
			borderColor: "black",
		}
	}
})*/

const MainPageBar = () => {


	return (
		<Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 2}}>
			<IconButton>
				<img src={logo}/>
			</IconButton>
			<DefaultButton sx={{height: '48px'}} variant={'contained'} >
				Каталог
			</DefaultButton>
			<SearchTextField
				fullWidth
				sx={{p: 0, m: 0}}
				InputProps={{endAdornment: <InputAdornment position={"end"}>
						<DefaultButton sx={{m: 0, p: 0}}>
							1
						</DefaultButton>
					</InputAdornment>
				}}>

			</SearchTextField>

			<IconButton>

			</IconButton>
			<IconButton>

			</IconButton>
			<IconButton>

			</IconButton>



		</Box>
	);
};

export default MainPageBar;