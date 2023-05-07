import React, { useState } from 'react'
import {defaultTheme} from "./themes";
import {ThemeProvider, CssBaseline, Typography} from "@mui/material";
import MainPage from "./pages/MainPage/MainPage";
import { Routes, Route } from 'react-router-dom';
import MainContent from "./pages/MainPage/MainContent";
import CartPage from "./pages/CartPage/CartPage";

function App() {

	return (
			<>
				<CssBaseline/>
				<Routes>
					<Route path={'/'} element={<MainPage/>}>
						<Route path={'/'} element={<MainContent/>}/>
						<Route path={'/cart'} element={<CartPage/>}/>
					</Route>
				</Routes>
			</>

	)
}

export default App
