import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { CartContextProvider } from './CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(<CartContextProvider><App/></CartContextProvider>)