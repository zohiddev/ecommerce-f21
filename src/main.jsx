import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/main.scss'
import './assets/scss/global/_normalize.scss'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.querySelector('.wrapper')).render(
<BrowserRouter>
    <App />
</BrowserRouter>
        )
