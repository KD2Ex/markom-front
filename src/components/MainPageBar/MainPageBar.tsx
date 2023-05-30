import React, {useEffect, useRef, useState} from 'react';
import {Box, Button, IconButton, InputAdornment, OutlinedInput, Popper, TextField, Typography} from "@mui/material";
import logo from '../../assets/unnamed.png';
import {DefaultButton} from "../styled/DefaultButton";
import {SearchTextField} from "../styled/SearchTextField";
import styles from '../MainPageBar/MainPageBar.module.css'
import banana from '../../assets/banana.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import cart from "../../store/cart";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import category from "../../store/category";
import groupCategories from "../../store/groupCategories";
import catalog from "../../store/catalog";
import user from "../../store/user";
import LoginWarningDialog from "../LoginWarningDialog/LoginWarningDialog";


const MainPageBar = observer(() => {

	const navigate = useNavigate();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [searchQuery, setSearchQuery] = useState('');
	const [isDialogWarningOpen, setIsDialogWarningOpen] = useState(false);

	const handleSearchChange = (event: React.FormEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	}

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	}

	const handleCartClick = () => {
		if (user.isAuth) {
			navigate('/cart')
		} else {
			setIsDialogWarningOpen(true);
		}
	}

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popper' : undefined;

	const anchor = useRef(null);


	useEffect(() => {

	}, [])

	return (
		<Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 2}}>

			<Box sx={{position: 'absolute', top: '13%',}} ref={anchor}>
			</Box>

			<IconButton
				component={Link}
				to={'/'}
				sx={{
					height: '120px'
				}}
			>
				<img src={logo} style={{
					height: '100%'
				}}/>
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

				<Popper id={id} open={open} anchorEl={anchor.current} placement={'bottom'}  >
					<Box sx={{ }} className={styles.popper}>
						{groupCategories.groupCategories.map(group => (
							<Box className={styles.catalogItem} onClick={handleClose}>
								<Link to={`/catalog/${group.id}`} style={{width: '100%',}}>
									<img style={{width: '100%', maxHeight: '250px'}} src={
										catalog.products.filter(product => product.category.group?.id === group.id)?.find(item =>
											item?.image
										)?.image
									} alt=""/>

								</Link>
								<Typography component={Link} to={`/catalog/${group.id}`}  sx={{
									fontWeight: 'bold'
								}}>
									{group.name}
								</Typography>
								{category.categories.filter(cat => cat.group?.id === group.id).map(item => (
									<Link to={`/catalog/${group.id}_${item.id}`}>
										{item.name}
									</Link>
								))}
							</Box>
						))}
						{category.categories.filter(item => item.group === null).map((item, index) => (
							<Box className={styles.catalogItem} onClick={handleClose}>
								<Link to={`/catalog/0_${item.id}`} style={{width: '100%',}}>
									<img style={{width: '100%',  maxHeight: '250px'}} src={catalog.products.find(product => product.category.id === item.id)?.image} alt=""/>

								</Link>
								<Typography component={Link} to={`/catalog/0_${item.id}`} sx={{
									fontWeight: 'bold'
								}}>
									{item.name}
								</Typography>
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
				/*component={Link}
				to={'/cart'}*/
				onClick={handleCartClick}
			>
				<ShoppingCartIcon/>
			</IconButton>

			<LoginWarningDialog open={isDialogWarningOpen} setOpen={setIsDialogWarningOpen}/>

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