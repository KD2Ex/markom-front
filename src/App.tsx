import React, {useEffect, useState} from 'react'
import {defaultTheme} from "./themes";
import {ThemeProvider, CssBaseline, Typography} from "@mui/material";
import MainPage from "./pages/MainPage/MainPage";
import { Routes, Route } from 'react-router-dom';
import MainContent from "./pages/MainPage/MainContent";
import CartPage from "./pages/CartPage/CartPage";
import CatalogPage, {loader as categoryLoader} from "./pages/CatalogPage/CatalogPage";
import CatalogContent from "./pages/CatalogPage/CatalogContent/CatalogContent";
import user from "./store/user";
import catalog from "./store/catalog";
import category from "./store/category";
import measurement from "./store/measurement";
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
