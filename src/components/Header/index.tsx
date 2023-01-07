import Image from 'next/image'
import { Handbag } from 'phosphor-react'
import { Header } from './styles'
import logoImg from '../../assets/logo.svg'
import { useShoppingContext } from '../../contexts/shoppingCartContext'
import { ShoppingCart } from '../ShoppingCart'

export function HeaderCompenent() {
  const { togleSidebarOpen } = useShoppingContext()
  return (
    <Header>
      <Image src={logoImg} alt="" />

      <span onClick={togleSidebarOpen}>
        <Handbag size={24} />
      </span>

      <ShoppingCart />
    </Header>
  )
}
