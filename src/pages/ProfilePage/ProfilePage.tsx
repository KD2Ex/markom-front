import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import {Link, useNavigate, Outlet, Navigate} from "react-router-dom";
import user from '../../store/user';
import {observer} from "mobx-react-lite";
import UserService from "../../api/services/UserService";

const ProfilePage = observer(() => {

	const navigate = useNavigate();

	if (!user.isAuth) {
		//navigate('/login')
		return <Navigate to={'/login'}/>
	}

	const handleLogout = () => {
		user.logout();
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
				<Link to={'/profile/data'}>Контактные данные</Link>
				{user.isAdmin && <Link to={'/admin'}>Админ панель</Link>}
				<Link to={'/login'} onClick={handleLogout}>Выход</Link>
			</Grid>
			<Grid item xs>
				<Outlet/>
			</Grid>
		</Grid>
	);
});

export default ProfilePage;