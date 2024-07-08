
import './App.css'
import CartPage from './CartPage'
import ProductPage from './ProductPage'
import CheckOutPage from './CheckOutPage'
import ThankyouPage from './ThankyouPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page404 from './Page404'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckOutPage />} />
        <Route path='/thanks' element={<ThankyouPage />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}
