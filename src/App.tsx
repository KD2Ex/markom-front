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

function App() {

	useEffect(() => {

		user.checkAuth();

	}, [])

	useEffect(() => {

		if (user.isAuth) {
			(async () => {
				console.log('log')
				await catalog.fetchProducts();
				await category.fetchCategories();
				await measurement.fetchMeasures();
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
