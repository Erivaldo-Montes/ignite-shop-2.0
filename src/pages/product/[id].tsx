import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/products'
import { useShoppingContext } from '../../contexts/shoppingCartContext'

interface ProductProps {
  product: {
    name: string
    id: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const { isOpen } = useShoppingContext()
  console.log(isOpen)

  async function handleBuyProduct() {
    // conectar a uma ferramenta de observabilidade( datalog/ sentry)
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data

      console.log(checkoutUrl)

      window.location.href = checkoutUrl

      /**
       * reirecionar para paginas internas
       * router.push('/chekout')
       *
       * useRouter()
       */
    } catch (error) {
      alert('erro ao redirecionar')

      setIsCreatingCheckoutSession(false)
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | ignite shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            onClick={handleBuyProduct}
            disabled={isCreatingCheckoutSession}
          >
            comprar agora
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

//  para que seja gerada uma pagina dinamica ssg tem que exportar os parametros
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: 'prod_N4xgdD1oMMnjjK' },
      },
    ],
    fallback: 'blocking',
  }
}

// no generics o primeiro parametro é o tipo do retorno e o segundo é o tipo da params
export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id

  // retorna apenas um produto
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        imageUrl: product.images[0],
        name: product.name,
        // stripe salva o preço em centavos
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
