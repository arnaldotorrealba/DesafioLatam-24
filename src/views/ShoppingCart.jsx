import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { CartItemCard } from '../components/CartItemCard'
import { TbPizzaOff } from 'react-icons/tb'

export const ShoppingCart = () => {
  const { pizzaList, cartData, formattedPrice } = useContext(CartContext)

  return (
    <>
      {pizzaList.length > 0 ? (
        <Container style={{ maxWidth: '800px' }} className='my-3 border'>
          <p className='fs-4'>Detalle del Pedido</p>
          <Container>
            {pizzaList.map(item => {
              return <CartItemCard key={item.pizza.id} item={item} />
            })}
            <div className='my-2 d-flex justify-content-between'>
              <div className='fs-3'>
                Total: {formattedPrice(cartData.total)}
              </div>
              <Button variant='success'>Ir a pagar</Button>
            </div>
          </Container>
        </Container>
      ) : (
        <Container style={{ maxWidth: '800px' }} className='my-3'>
          <div className='d-flex align-items-center justify-content-center fs-4 gap-2'>
            <TbPizzaOff />
            <p className='mb-0 text-center'>No se ha agregado ninguna pizza</p>
            <TbPizzaOff />
          </div>
        </Container>
      )}
    </>
  )
}
