import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'
import { GiPizzaSlice } from 'react-icons/gi'
import { GiPizzaCutter } from 'react-icons/gi'
import { ToastContainer, toast } from 'react-toastify'

export const PizzaCard = ({ pizza }) => {
  const { addPizza, formattedPrice } = useContext(CartContext)
  const navigate = useNavigate()

  const handleAddBtn = pizza => {
    addPizza(pizza)
    toast('🍕 Se ha agregado tu pizza correctamente! 🍕', {
      position: 'bottom-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored'
    })
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <hr className='my-1' />
        <Card.Text className='mb-0'>Ingredientes: </Card.Text>
        <ul style={{ listStyle: 'none', paddingLeft: '2rem' }}>
          {pizza.ingredients.map(item => (
            <li key={item}>
              <GiPizzaSlice /> {item}
            </li>
          ))}
        </ul>
        <hr className='my-1' />
        <Card.Text className='text-center fs-5 mb-0'>
          {formattedPrice(pizza.price)}
        </Card.Text>
        <hr className='my-1' />
        <div className='d-flex justify-content-between mt-3'>
          <Button
            className='text-decoration-none'
            onClick={() => navigate(`/pizza/${pizza.name}`)}
            variant='link'
          >
            <GiPizzaCutter style={{ width: '21px' }} /> Ver más
          </Button>
          <Button onClick={() => handleAddBtn(pizza)} variant='success'>
            Añadir
          </Button>
        </div>
      </Card.Body>
      <ToastContainer />
    </Card>
  )
}
