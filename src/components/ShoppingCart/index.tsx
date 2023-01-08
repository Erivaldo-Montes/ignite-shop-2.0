import { shoppingCartContext } from '../../contexts/shoppingCartContext'
import { Container, ShoppingCartList, Table } from './styles'
import { X } from 'phosphor-react'
import { ShoppingCartOrder } from '../ShoppingCartOrder'
import { useContext, useEffect, useState } from 'react'

export function ShoppingCart() {
  const { togleSidebarOpen, isOpen, shoppingCart } =
    useContext(shoppingCartContext)
  const [totalPriceShoppingCart, setTotalPriceShoppingCart] = useState(0)

  useEffect(() => {
    const totalPrice = shoppingCart.reduce((acc, current) => {
      const priceFormat = current.price
        .replace(/[^\d,]+/g, '')
        .replace(',', '.')

      return acc + Number(priceFormat)
    }, 0)

    setTotalPriceShoppingCart(totalPrice)
  }, [shoppingCart])

  return (
    <Container variant={isOpen}>
      <span onClick={togleSidebarOpen}>
        <X size={24} />
      </span>

      <div>
        <span>sacola de compras</span>
        <div>
          <ShoppingCartList>
            {shoppingCart.map((order) => {
              return (
                <ShoppingCartOrder
                  key={order.id}
                  idOrder={order.id}
                  imageUrl={order.imageUrl}
                  name={order.name}
                  price={order.price}
                />
              )
            })}
          </ShoppingCartList>

          <div>
            <Table>
              <tbody>
                <tr>
                  <td>Quantidades</td>
                  <td>{shoppingCart.length} items</td>
                </tr>
                <tr>
                  <td>Valor total</td>
                  <td>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(totalPriceShoppingCart)}
                  </td>
                </tr>
              </tbody>
            </Table>
            <button>Finalizar compra</button>
          </div>
        </div>
      </div>
    </Container>
  )
}
