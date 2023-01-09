import { shoppingCartContext } from "../../contexts/shoppingCartContext";
import { Container, ShoppingCartList, Table } from "./styles";
import { X } from "phosphor-react";
import { ShoppingCartOrder } from "../ShoppingCartOrder";
import { useContext, useEffect, useState } from "react";

export function ShoppingCart() {
  const {
    togleSidebarOpen,
    isOpen,
    shoppingCart,
    buyProduct,
    isCreatingCheckoutSession,
  } = useContext(shoppingCartContext);
  const [totalPriceShoppingCart, setTotalPriceShoppingCart] = useState(0);

  async function handleBuyProduct() {
    buyProduct();
  }

  useEffect(() => {
    const totalPrice = shoppingCart.reduce((acc, current) => {
      const priceFormat = current.price
        .replace(/[^\d,]+/g, "")
        .replace(",", ".");

      return acc + Number(priceFormat);
    }, 0);

    setTotalPriceShoppingCart(totalPrice);
  }, [shoppingCart]);

  const isDisable = isCreatingCheckoutSession
    ? true
    : shoppingCart.length === 0
    ? true
    : false;

  return (
    <Container variant={isOpen}>
      <span>
        <X size={24} onClick={togleSidebarOpen} />
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
              );
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
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(totalPriceShoppingCart)}
                  </td>
                </tr>
              </tbody>
            </Table>
            <button onClick={handleBuyProduct} disabled={isDisable}>
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
