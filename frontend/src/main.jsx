import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import ShopContextprovider from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <ShopContextprovider>
        <App />
      </ShopContextprovider>
    </BrowserRouter>
)

