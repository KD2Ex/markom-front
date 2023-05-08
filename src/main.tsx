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
