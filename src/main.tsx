import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import App, {loader as mainLoader} from './App'
import './index.css'
import {defaultTheme} from "./themes";
import {ThemeProvider} from "@mui/material";
import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import MainContent from "./pages/MainPage/MainContent";
import CartPage, {loader as cartLoader} from "./pages/CartPage/CartPage";
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
import NewOrderPage from "./pages/NewOrderPage/NewOrderPage";
import AdminPage, {loader as adminLoader} from "./pages/AdminPage/AdminPage";
import ProductPage, {loader as productLoader} from "./pages/ProductPage/ProductPage";
import RegPage from "./pages/RegPage/RegPage";
import {useFetchData} from "./hooks/useFetch";
import AdminProductPage from "./pages/AdminPage/children/AdminProductPage/AdminProductPage";
import AdminOrdersPage, {loader as adminOrdersLoader} from "./pages/AdminPage/children/AdminOrderPage/AdminOrdersPage";
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator";
import { ModalContext } from './context';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        loader: mainLoader,
        children: [
            {
                path: '/',
                element: <MainContent/>
            },
            {
                path: 'cart',
                element: <CartPage/>,
                loader: cartLoader
            },
            {
                path: 'catalog',
                element: <CatalogPage/>,
                loader: catalodLoader,
                children: [
                    {
                        path: ':id',
                        element: <CatalogContent/>,
                        loader: productsLoader,
                        children: [

                        ]
                    },

                ]
            },
            {
                path: 'catalog/:id/:productId',
                element: <ProductPage/>,
                loader: productLoader
            },
            {
                path: 'search/:searchId',
                element: <SearchPage/>,
                loader: searchLoader
            },
            {
                path: 'search',
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
            {
                path: 'reg',
                element: <RegPage/>
            },
            {
                path: 'newOrder',
                element: <NewOrderPage/>
            },
        ]
    },
    {
        path: 'admin',
        element: <AdminPage/>,
        loader: adminLoader,
        children: [
            {
                path: 'products',
                element: <AdminProductPage/>,
            },
            {
                path: 'orders',
                element: <AdminOrdersPage/>,
                loader: adminOrdersLoader

            }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>

          <RouterProvider router={router}/>
          <LoadingIndicator/>
      </ThemeProvider>
  </React.StrictMode>,
)
