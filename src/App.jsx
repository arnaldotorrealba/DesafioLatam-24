import { Route, Routes } from 'react-router-dom'
import CartProvider from './context/CartContext'
import { Home } from './views/Home'
import { Pizza } from './views/Pizza'
import { ShoppingCart } from './views/ShoppingCart'
import { NotFound } from './views/NotFound'
import { Header } from './views/Header'
import './App.css'

function App () {
  return (
    <>
      <CartProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pizza/:name' element={<Pizza />} />
          <Route path='/cart' element={<ShoppingCart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </CartProvider>
    </>
  )
}

export default App
