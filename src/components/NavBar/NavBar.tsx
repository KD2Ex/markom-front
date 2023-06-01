import React from 'react';
import {AppBar, Box, Button, styled, Toolbar, Typography} from "@mui/material";
import {AppBarProps} from "@mui/material/AppBar/AppBar";
import NavButton from "../styled/NavButton/NavButton";
import {Link} from "react-router-dom";


const AppBarStyled = styled(AppBar)<AppBarProps>(({ theme }) => ({
	backgroundColor: '#f7f7f7',
	boxShadow: 'none',
	justifyContent: 'center',
}))


const NavBar = () => {



	return (
		<Box sx={{width: '100%', bgcolor: '#f7f7f7'}}>

				<Box sx={{maxWidth: '1503px', margin: 'auto'}}>
					<Toolbar variant={'dense'} sx={{display: 'flex', justifyContent: 'space-between'}}>
						<Box sx={{flexGrow: 1}}>
							<NavButton disableRipple component={Link} to={'/catalog'}>
								Каталог
							</NavButton>
							<NavButton disableRipple component={Link} to={'/about'}>
								О компании
							</NavButton>
							<NavButton disableRipple component={Link} to={'/contacts'}>
								Контакты
							</NavButton>

						</Box>

						<Box sx={{flexDirection: 'row', display: 'flex', gap: 1}}>
							<Typography>
								Доставка с 8:00 до 23:00
							</Typography>
							<Typography>
								+7(800) 800-80-80
							</Typography>

						</Box>

					</Toolbar>
				</Box>

		</Box>
	);
};

export default NavBar;