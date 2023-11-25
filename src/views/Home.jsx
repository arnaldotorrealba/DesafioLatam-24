import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Container from 'react-bootstrap/Container'
import { PizzaCard } from '../components/pizzaCard'

export const Home = () => {
  const { pizzaData } = useContext(CartContext)

  return (
    <>
      <div className='home-banner d-flex flex-column justify-content-center align-items-center gap-3'>
        <h1
          style={{
            color: 'white',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
          }}
        >
          ¡Pizzería Mamma Mia!
        </h1>
        <p
          style={{
            color: 'white',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)'
          }}
          className='fs-4'
        >
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </p>
      </div>
      <Container className='d-flex flex-wrap justify-content-center gap-3 my-3'>
        {pizzaData.map(pizza => {
          return <PizzaCard key={pizza.id} pizza={pizza} />
        })}
      </Container>
    </>
  )
}
