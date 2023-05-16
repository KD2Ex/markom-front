import React, {useEffect, useRef, useState} from 'react';
import {Box, Button, IconButton, InputAdornment, OutlinedInput, Popper, TextField, Typography} from "@mui/material";
import logo from '../../assets/markom_logo.svg';
import {DefaultButton} from "../styled/DefaultButton";
import {SearchTextField} from "../styled/SearchTextField";
import styles from '../MainPageBar/MainPageBar.module.css'
import {catalog} from "./data";
import banana from '../../assets/banana.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import cart from "../../store/cart";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';


const MainPageBar = observer(() => {

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearchChange = (event: React.FormEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	}

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
		console.log(event.currentTarget)
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popper' : undefined;

	const anchor = useRef(null);

	useEffect(() => {
		console.log(anchor.current)
	}, [])

	return (
		<Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 2}}>

			<Box sx={{position: 'absolute', top: '13%',}} ref={anchor}>
			</Box>

			<IconButton
				component={Link}
				to={'/'}
			>
				<img src={logo}/>
			</IconButton>

			<Box sx={{position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.4)', display: open ? 'flex': 'none'}}
				onClick={() => setAnchorEl(null)}
			>

			</Box>

			<DefaultButton
				aria-describedby={id}
				sx={{ width: 'fit-content' }}
				variant={'contained'}
				onClick={handleClick}

			>
				{anchorEl ? <CloseIcon sx={{ml: 2}}/> : <MenuIcon sx={{ml: 2}}/>}
				<Typography fontWeight='bold' sx={{px: 2}}>
					Каталог

				</Typography>

			</DefaultButton>

				<Popper id={id} open={open} anchorEl={anchor.current} placement={'bottom'} sx={{maxHeight: '70vh'}} >
					<Box sx={{ }} className={styles.popper}>
						{catalog.map((item, index) => (
							<Box className={styles.catalogItem}>
								<img style={{width: '100%', height: '60%'}} src={item.img} alt=""/>
								<Typography component={Link} to={'/catalog/f'}>
									{item.title}
								</Typography>
								{item.subCategories.map(item => (
									<a>{item.title}</a>
								))}
							</Box>
						))}
					</Box>
				</Popper>

			<SearchTextField
				fullWidth
				sx={{}}
				placeholder={'Поиск'}
				value={searchQuery}
				onChange={handleSearchChange}
				InputProps={{endAdornment: <InputAdornment position={"end"}>
						<DefaultButton sx={{m: 0, p: 0}} component={Link} to={`/search/${searchQuery}`}>
							<SearchIcon sx={{width: '100%', height: '100%', p: 1}}/>
						</DefaultButton>
					</InputAdornment>
				}}>

			</SearchTextField>

			<IconButton
				sx={{color: 'black'}}
				component={Link}
				to={'/profile'}
			>
				<PermIdentityIcon/>
			</IconButton>

			<IconButton
				sx={{color: 'black'}}
				component={Link}
				to={'/cart'}
			>
				<ShoppingCartIcon/>
			</IconButton>

			<Typography
				fontWeight={700}
				fontSize={18}
				sx={{
					color: theme => theme.palette.primary.secondary
				}}
			>
				{cart.totalPrice}р.
			</Typography>

		</Box>
	);
});

export default MainPageBar;