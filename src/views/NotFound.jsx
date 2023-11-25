import Container from 'react-bootstrap/Container'
import { TbPizzaOff } from 'react-icons/tb'

export const NotFound = () => {
  return (
    <Container style={{ maxWidth: '800px' }} className='my-3'>
      <div className='d-flex align-items-center justify-content-center fs-4 gap-2'>
        <TbPizzaOff />
        <p className='mb-0 text-center'>No se ha encontrado esta página</p>
        <TbPizzaOff />
      </div>
    </Container>
  )
}
