import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate, useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { ToastContainer, toast } from 'react-toastify'
import { GiPizzaSlice } from 'react-icons/gi'
import { GiPizzaCutter } from 'react-icons/gi'

export const Pizza = () => {
  const { pizzaData, addPizza, formattedPrice } = useContext(CartContext)
  const { name } = useParams()
  const navigate = useNavigate()
  const selectedPizza = pizzaData.find(i => i.name === name)

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
    <Container
      style={{ maxWidth: '1000px' }}
      className='d-flex my-3 border px-0'
    >
      <img
        style={{ width: '40%' }}
        src={selectedPizza.img}
        alt={`Pizza ${selectedPizza.name}`}
      />
      <div style={{ width: '60%' }}>
        <Card className='border-0' style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>{selectedPizza.name}</Card.Title>
            <hr className='my-1' />
            <Card.Text className='mb-0'>{selectedPizza.desc}</Card.Text>
            <hr className='my-1' />
            <Card.Text className='mb-0'>Ingredientes: </Card.Text>
            <ul style={{ listStyle: 'none', paddingLeft: '2rem' }}>
              {selectedPizza.ingredients.map(item => (
                <li key={item}>
                  <GiPizzaSlice /> {item}
                </li>
              ))}
            </ul>
            <hr className='my-1' />
            <Card.Text className='text-center fs-5 mb-0'>
              {formattedPrice(selectedPizza.price)}
            </Card.Text>
            <hr className='my-1' />
            <div className='d-flex justify-content-between mt-3'>
              <Button
                onClick={() => navigate(`/`)}
                className='text-decoration-none'
                variant='link'
              >
                <GiPizzaCutter style={{ width: '21px' }} /> Regresar
              </Button>
              <Button
                onClick={() => handleAddBtn(selectedPizza)}
                variant='success'
              >
                Añadir
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
      <ToastContainer />
    </Container>
  )
}
