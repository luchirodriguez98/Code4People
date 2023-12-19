// import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './Pages/App/App'
import './Styles/index.css'

console.log('Console en main.js', import.meta.env.VITE_BASE_URL)

ReactDOM.createRoot(document.getElementById('root')).render(
// <React.StrictMode>
        <App />
// </React.StrictMode>
)
