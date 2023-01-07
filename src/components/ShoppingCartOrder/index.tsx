import Image from 'next/image'
import logfo from '../../assets/logo.svg'
import { Container } from './styles'

export function ShoppingCartOrder() {
  return (
    <Container>
      <div>
        <Image src={logfo} width={94} height={94} alt="" />
      </div>
      <div>
        <p>camiseta 1 edição limitada</p>
        <span>R$ 45,99</span>
        <button>remover</button>
      </div>
    </Container>
  )
}
