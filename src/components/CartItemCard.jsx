import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export const CartItemCard = ({ item }) => {
  const { addPizza, formattedPrice } = useContext(CartContext)

  return (
    <Container>
      <div className='d-flex justify-content-between'>
        <div className='d-flex gap-2'>
          <img
            style={{ width: '3rem' }}
            src={item.pizza.img}
            alt={`Pizza ${item.pizza.name}`}
          />
          <div className='d-flex align-items-center'>
            <p className='mb-0'>{item.pizza.name}</p>
          </div>
        </div>
        <div className='d-flex gap-2'>
          <div className='d-flex align-items-center'>
            <p className='mb-0'>
              {formattedPrice(item.pizza.price * item.quantity)}
            </p>
          </div>
          <Button
            className='d-flex align-items-center'
            style={{ width: '2rem', height: '2rem' }}
            onClick={() => addPizza(item.pizza, false)}
            variant='danger'
          >
            <div>-</div>
          </Button>
          <div className='d-flex align-items-center'>
            <p style={{ width: '1rem', textAlign: 'center' }} className='mb-0'>
              {item.quantity}
            </p>
          </div>
          <Button
            className='d-flex align-items-center'
            style={{ width: '2rem', height: '2rem' }}
            onClick={() => addPizza(item.pizza)}
            variant='primary'
          >
            <div>+</div>
          </Button>
        </div>
      </div>
      <hr className='my-1' />
    </Container>
  )
}
