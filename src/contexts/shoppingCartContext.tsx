import { ReactNode, useState, createContext } from 'react'
interface ShoppingCartContextProps {
  children: ReactNode
}

interface IaddToshoppingCart {
  name: string
  id: string
  imageUrl: string
  price: string
}

interface shoppingCartContextTypes {
  togleSidebarOpen: () => void
  isOpen: 'CLOSED' | 'OPEN'
  addToShoppingCart: (data: any) => void
  shoppingCart: IaddToshoppingCart[]
  removeOrder: (id: string) => void
}

export const shoppingCartContext = createContext({} as shoppingCartContextTypes)

export function ShoppingCartProvider({ children }: ShoppingCartContextProps) {
  const [isOpen, setIsOpen] = useState<'CLOSED' | 'OPEN'>('CLOSED')
  const [shoppingCart, setShoppingCart] = useState<IaddToshoppingCart[]>([])

  function addToShoppingCart(data: IaddToshoppingCart) {
    const orderAlreadyExist = shoppingCart.find((order) => order.id === data.id)

    if (!orderAlreadyExist) {
      setShoppingCart((state) => {
        return [...state, data]
      })
    }
  }

  function togleSidebarOpen() {
    if (isOpen === 'OPEN') {
      setIsOpen('CLOSED')
    } else {
      setIsOpen('OPEN')
    }
  }

  function removeOrder(id: string) {
    const listWithoutOrder = shoppingCart.filter((order) => order.id !== id)

    setShoppingCart(listWithoutOrder)
  }

  return (
    <shoppingCartContext.Provider
      value={{
        togleSidebarOpen,
        isOpen,
        addToShoppingCart,
        shoppingCart,
        removeOrder,
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  )
}
