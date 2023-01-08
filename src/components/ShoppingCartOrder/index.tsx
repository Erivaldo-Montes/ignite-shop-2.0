import Image from 'next/image'
import { useContext } from 'react'
import logfo from '../../assets/logo.svg'
import { shoppingCartContext } from '../../contexts/shoppingCartContext'
import { Container } from './styles'

interface ShoppingCartOrderProps {
  name: string
  idOrder: string
  imageUrl: string
  price: string
}

export function ShoppingCartOrder(order: ShoppingCartOrderProps) {
  const { removeOrder } = useContext(shoppingCartContext)

  function handleRemoveOrder() {
    removeOrder(order.idOrder)
  }

  return (
    <Container>
      <div>
        <Image src={order.imageUrl} width={94} height={94} alt="" />
      </div>
      <div>
        <p>{order.name}</p>
        <span>{order.price}</span>
        <button onClick={handleRemoveOrder}>remover</button>
      </div>
    </Container>
  )
}
