import React, {useEffect, useState} from 'react'
import {ThemeProvider, CssBaseline, Typography} from "@mui/material";
import MainPage from "./pages/MainPage/MainPage";
import user from "./store/user";
import {useFetchData} from "./hooks/useFetch";
import {ModalContext} from "./context";


export const loader = async () => {
	await useFetchData()
	return null
}

function App() {


	useEffect(() => {

		(async () => {
			await user.checkAuth();
		})()


		if (user.isAuth) {
			(async () => {
			})()
		}

	}, [])

	const [isModalOpen, setIsModalOpen] = useState(false);


	return (
			<>
				<ModalContext.Provider value={{isModalOpen, setIsModalOpen}}>
					<CssBaseline/>
					<MainPage/>
				</ModalContext.Provider>

			</>

	)
}

export default App
