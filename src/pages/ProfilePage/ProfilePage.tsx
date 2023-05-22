import React from 'react';
import {Grid} from "@mui/material";
import {Link, useNavigate, Outlet} from "react-router-dom";
import user from '../../store/user';
import {observer} from "mobx-react-lite";

const ProfilePage = observer(() => {

	const navigate = useNavigate();

	if (!user.isAuth) {
		navigate('/login')
	}

	return (
		<Grid container>
			<Grid item xs={1.5} sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 1,
				'*': {
					color: 'green',
					textDecoration: 'underline'
				}
			}}>
				<Link to={'/profile/orders'}>История заказов</Link>
				<Link to={'/profile/adress'}>Адресс доставки</Link>
				<Link to={'/profile/data'}>Контактные данные</Link>
				<Link to={'/admin'}>Админ панель</Link>
			</Grid>
			<Grid item xs>
				<Outlet/>
			</Grid>
		</Grid>
	);
});

export default ProfilePage;