import { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [pizzaData, setPizzaData] = useState([])
  const [pizzaList, setPizzaList] = useState([])
  const [cartData, setCartData] = useState({
    quantity: 0,
    total: 0
  })

  const getPizzaData = () => {
    const url = '/pizzas.json'
    axios
      .get(url)
      .then(res => {
        setPizzaData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const addPizza = (pizza, add = true) => {
    const currentPizzaList = [...pizzaList]
    const existingPizza = currentPizzaList.find(i => i.pizza === pizza)

    if (add) {
      if (existingPizza) {
        existingPizza.quantity += 1
      } else {
        currentPizzaList.push({ pizza, quantity: 1 })
      }
      setPizzaList(currentPizzaList)
      updateCartData(1, pizza.price)
    } else {
      if (existingPizza) {
        if (existingPizza.quantity === 1) {
          const updatedPizzaList = currentPizzaList.filter(
            item => item.pizza !== pizza
          )
          setPizzaList(updatedPizzaList)
        } else {
          existingPizza.quantity -= 1
          setPizzaList(currentPizzaList)
        }
      }
      updateCartData(-1, -pizza.price)
    }
  }

  // const removePizza = pizza => {
  //   const currentPizzaList = [...pizzaList]
  //   const existingPizza = currentPizzaList.find(i => i.pizza === pizza)

  //   if (existingPizza) {
  //     if (existingPizza.quantity === 1) {
  //       const updatedPizzaList = currentPizzaList.filter(
  //         item => item.pizza !== pizza
  //       )
  //       setPizzaList(updatedPizzaList)
  //     } else {
  //       existingPizza.quantity -= 1
  //       setPizzaList(currentPizzaList)
  //     }
  //   }
  //   updateCartData(-1, -pizza.price)
  // }

  const updateCartData = (qty, price) => {
    const currentCartData = { ...cartData }
    currentCartData.quantity += qty
    currentCartData.total += price
    setCartData(currentCartData)
  }

  const formattedPrice = price =>
    price.toLocaleString('es-CL', {
      style: 'currency',
      currency: 'CLP'
    })

  useEffect(() => {
    getPizzaData()
  }, [])

  return (
    <CartContext.Provider
      value={{
        pizzaList,
        cartData,
        setCartData,
        addPizza,
        pizzaData,
        getPizzaData,
        formattedPrice
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider
