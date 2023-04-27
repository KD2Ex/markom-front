import React from 'react';
import {AppBar, Box, Button, styled, Toolbar, Typography} from "@mui/material";
import {AppBarProps} from "@mui/material/AppBar/AppBar";
import NavButton from "../styled/NavButton/NavButton";


const AppBarStyled = styled(AppBar)<AppBarProps>(({ theme }) => ({
	backgroundColor: '#f7f7f7',
	boxShadow: 'none',
	justifyContent: 'center',
}))


const NavBar = () => {



	return (
		<Box>
			<AppBarStyled position='static' sx={{flexGrow: 1}}>
				<Toolbar variant={'dense'} sx={{}}>


					<Box sx={{flexGrow: 1}}>
						<NavButton disableRipple>
							Каталог
						</NavButton>
						<NavButton disableRipple>
							О компании
						</NavButton>
						<NavButton disableRipple>
							Контакты
						</NavButton>
						<NavButton disableRipple>
							Доставка
						</NavButton>
						<NavButton disableRipple>
							Оплата
						</NavButton>
						<NavButton disableRipple>
							Личный кабинет
						</NavButton>
						<NavButton disableRipple>
							Блог
						</NavButton>
					</Box>

					<Box sx={{flexDirection: 'row', display: 'flex'}}>
						<Typography>
							Доставка с 8:00 до 23:00
						</Typography>
						<Typography>
							+7(800) 800-80-80
						</Typography>

					</Box>

				</Toolbar>
			</AppBarStyled>

		</Box>
	);
};

export default NavBar;