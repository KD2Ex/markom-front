import React, {useEffect, useState} from 'react'
import {ThemeProvider, CssBaseline, Typography, Snackbar, Alert} from "@mui/material";
import MainPage from "./pages/MainPage/MainPage";
import user from "./store/user";
import {useFetchData} from "./hooks/useFetch";
import {AlertContext, ModalContext} from "./context";


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
	const [alertOpen, setAlertOpen] = useState(false);
	const [alertMessage, setAlertMessage] = useState('');
	const [alertType, setAlertType] = useState("success")

	return (
			<>
				<ModalContext.Provider value={{isModalOpen, setIsModalOpen}}>
					<AlertContext.Provider value={{
						alertOpen, setAlertOpen,
						alertMessage, setAlertMessage,
						alertType, setAlertType
					}}>

						<CssBaseline/>
						<MainPage/>
						<Snackbar
							open={alertOpen}
							onClose={() => setAlertOpen(false)}
						>
							<Alert variant={'filled'} severity={alertType}>
								{alertMessage}
							</Alert>
						</Snackbar>
					</AlertContext.Provider>

				</ModalContext.Provider>

			</>

	)
}

export default App
