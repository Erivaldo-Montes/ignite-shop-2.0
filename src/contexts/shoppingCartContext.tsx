import { ReactNode, useState } from 'react'
import { createContext } from 'use-context-selector'

interface ShoppingCartContextProps {
  children: ReactNode
}

interface shoppingCartContextTypes {
  togleSidebarOpen: () => void
  isOpen: 'CLOSED' | 'OPEN'
}

export const shoppingCartContext = createContext({} as shoppingCartContextTypes)

export function ShoppingCartProvider({ children }: ShoppingCartContextProps) {
  const [isOpen, setIsOpen] = useState<'CLOSED' | 'OPEN'>('CLOSED')

  function togleSidebarOpen() {
    if (isOpen === 'OPEN') {
      setIsOpen('CLOSED')
    } else {
      setIsOpen('OPEN')
    }
  }

  return (
    <shoppingCartContext.Provider
      value={{
        togleSidebarOpen,
        isOpen,
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  )
}
