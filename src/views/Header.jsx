import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { LuShoppingCart } from 'react-icons/lu'

export const Header = () => {
  const { cartData } = useContext(CartContext)

  return (
    <Navbar className='bg-success' data-bs-theme='light'>
      <Container>
        <Navbar.Brand>
          <NavLink className='header-title' to='/'>
            <h1>🍕 Pizzería Mamma Mia!</h1>
          </NavLink>
        </Navbar.Brand>
        <NavLink className='header-cart' to='/cart'>
          <LuShoppingCart className='header-cart-icon' />
          {cartData.quantity > 0 ? (
            <div className='header-cart-qty'>
              <p>{cartData.quantity}</p>
            </div>
          ) : null}
        </NavLink>
      </Container>
    </Navbar>
  )
}
