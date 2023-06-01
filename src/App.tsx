import React, {useEffect, useState} from 'react'
import {ThemeProvider, CssBaseline, Typography} from "@mui/material";
import MainPage from "./pages/MainPage/MainPage";
import user from "./store/user";
import {useFetchData} from "./hooks/useFetch";


export const loader = async () => {
	await useFetchData()
	return null
}

function App() {


	useEffect(() => {

		user.checkAuth();

		if (user.isAuth) {
			(async () => {
			})()
		}

	}, [])

	return (
			<>
				<CssBaseline/>
				<MainPage/>
			</>

	)
}

export default App
