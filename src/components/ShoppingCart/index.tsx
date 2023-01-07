import { shoppingCartContext } from '../../contexts/shoppingCartContext'
import { Container, ShoppingCartList, Table } from './styles'
import { X } from 'phosphor-react'
import { ShoppingCartOrder } from '../ShoppingCartOrder'
import { useContextSelector } from 'use-context-selector'

export function ShoppingCart() {
  const isOpen = useContextSelector(shoppingCartContext, (context) => {
    return context.isOpen
  })

  const togleSidebarOpen = useContextSelector(
    shoppingCartContext,
    (context) => {
      return context.togleSidebarOpen
    },
  )

  return (
    <Container variant={isOpen}>
      <span onClick={togleSidebarOpen}>
        <X size={24} />
      </span>

      <div>
        <span>sacola de compras</span>
        <div>
          <ShoppingCartList>
            <ShoppingCartOrder />
            <ShoppingCartOrder />
            <ShoppingCartOrder />
          </ShoppingCartList>

          <div>
            <Table>
              <tbody>
                <tr>
                  <td>Quantidades</td>
                  <td>3 items</td>
                </tr>
                <tr>
                  <td>Valor total</td>
                  <td>R$ 340,00</td>
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
