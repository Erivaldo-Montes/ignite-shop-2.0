import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";
import { useContext, useState } from "react";
import Stripe from "stripe";
import { stripe } from "../../lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/products";
import { shoppingCartContext } from "../../contexts/shoppingCartContext";
import { HeaderCompenent } from "../../components/Header";

interface ProductProps {
  product: {
    name: string;
    id: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { addToShoppingCart } = useContext(shoppingCartContext);

  function handleAddToShoppingCart() {
    addToShoppingCart(product);
  }

  return (
    <>
      <Head>
        <title>{product.name} | ignite shop</title>
      </Head>

      <HeaderCompenent />

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button onClick={handleAddToShoppingCart}>colocar na sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

//  para que seja gerada uma pagina dinamica ssg tem que exportar os parametros
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: "prod_N4xgdD1oMMnjjK" },
      },
    ],
    fallback: "blocking",
  };
};

// no generics o primeiro parametro é o tipo do retorno e o segundo é o tipo da params
export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id;

  // retorna apenas um produto
  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        imageUrl: product.images[0],
        name: product.name,
        // stripe salva o preço em centavos
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
