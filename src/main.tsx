import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {defaultTheme} from "./themes";
import {ThemeProvider} from "@mui/material";
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import MainContent from "./pages/MainPage/MainContent";
import CartPage from "./pages/CartPage/CartPage";
import CatalogPage, {loader as catalodLoader} from "./pages/CatalogPage/CatalogPage";
import CatalogContent, {loader as productsLoader} from "./pages/CatalogPage/CatalogContent/CatalogContent";
import SearchPage, {loader as searchLoader} from "./pages/SearchPage/SearchPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";
import ProfileDataPage from "./pages/ProfileDataPage/ProfileDataPage";
import AdressPage from "./pages/AdressPage/AdressPage";
import LoginPage from "./pages/LoginPage/LoginPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <MainContent/>
            },
            {
                path: 'cart',
                element: <CartPage/>
            },
            {
                path: 'catalog',
                element: <CatalogPage/>,
                loader: catalodLoader,
                children: [
                    {
                        path: ':id',
                        element: <CatalogContent/>,
                        loader: productsLoader
                    }
                ]
            },
            {
                path: 'search/:searchId',
                element: <SearchPage/>,
                loader: searchLoader
            },
            {
                path: 'about',
                element: <AboutPage/>
            },
            {
                path: 'contacts',
                element: <ContactsPage/>
            },
            {
                path: 'profile',
                element: <ProfilePage/>,
                children: [
                    {
                        path: 'orders',
                        element: <OrdersPage/>
                    },
                    {
                        path: 'data',
                        element: <ProfileDataPage/>
                    },
                    {
                        path: 'adress',
                        element: <AdressPage/>
                    },
                ]
            },
            {
                path: 'login',
                element: <LoginPage/>
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
          <RouterProvider router={router}/>
      </ThemeProvider>
  </React.StrictMode>,
)
