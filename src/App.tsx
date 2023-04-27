import React, { useState } from 'react'
import {defaultTheme} from "./themes";
import {ThemeProvider, CssBaseline, Typography} from "@mui/material";
import MainPage from "./pages/MainPage/MainPage";

function App() {

	return (
			<>

			<CssBaseline/>
			<MainPage/>
			</>

	)
}

export default App
