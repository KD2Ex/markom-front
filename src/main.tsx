import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {defaultTheme} from "./themes";
import {ThemeProvider} from "@mui/material";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
          <App />
      </ThemeProvider>
  </React.StrictMode>,
)
