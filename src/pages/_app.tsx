import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'
import { ShoppingCartProvider } from '../contexts/shoppingCartContext'

import { HeaderCompenent } from '../components/Header'

export default function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <Container>
      <ShoppingCartProvider>
        <HeaderCompenent />
        <Component {...pageProps} />
      </ShoppingCartProvider>
    </Container>
  )
}
