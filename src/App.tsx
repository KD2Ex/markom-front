import React, { useState } from 'react'
import {defaultTheme} from "./themes";
import {ThemeProvider, CssBaseline, Typography} from "@mui/material";
import MainPage from "./pages/MainPage/MainPage";
import { Routes, Route } from 'react-router-dom';
import MainContent from "./pages/MainPage/MainContent";
import CartPage from "./pages/CartPage/CartPage";
import CatalogPage, {loader as categoryLoader} from "./pages/CatalogPage/CatalogPage";
import CatalogContent from "./pages/CatalogPage/CatalogContent/CatalogContent";

function App() {

	return (
			<>
				<CssBaseline/>
				<MainPage/>
				{/*<Routes>
					<Route  path={'/'} element={<MainPage/>}>
						<Route path={'/'} element={<MainContent/>}/>
						<Route path={'cart'} element={<CartPage/>}/>
						<Route path={'catalog'} element={<CatalogPage/>}
							loader={categoryLoader}
						>

							<Route path={':id'} element={<CatalogContent/>}/>

						</Route>
					</Route>
				</Routes>*/}
			</>

	)
}

export default App
