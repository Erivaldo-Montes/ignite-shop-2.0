import axios from "axios";
import { ReactNode, useState, createContext } from "react";
interface ShoppingCartContextProps {
  children: ReactNode;
}

interface IaddToshoppingCart {
  name: string;
  id: string;
  imageUrl: string;
  price: string;
  defaultPriceId: string;
}

interface shoppingCartContextTypes {
  togleSidebarOpen: () => void;
  isOpen: "CLOSED" | "OPEN";
  addToShoppingCart: (data: any) => void;
  shoppingCart: IaddToshoppingCart[];
  removeOrder: (id: string) => void;
  buyProduct: () => void;
  isCreatingCheckoutSession: boolean;
}

export const shoppingCartContext = createContext(
  {} as shoppingCartContextTypes
);

export function ShoppingCartProvider({ children }: ShoppingCartContextProps) {
  const [isOpen, setIsOpen] = useState<"CLOSED" | "OPEN">("CLOSED");
  const [shoppingCart, setShoppingCart] = useState<IaddToshoppingCart[]>([]);
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false);

  // add order to shopping cart
  function addToShoppingCart(data: IaddToshoppingCart) {
    const orderAlreadyExist = shoppingCart.find(
      (order) => order.id === data.id
    );

    if (!orderAlreadyExist) {
      setShoppingCart((state) => {
        return [...state, data];
      });
    }
  }

  function togleSidebarOpen() {
    if (isOpen === "OPEN") {
      setIsOpen("CLOSED");
    } else {
      setIsOpen("OPEN");
    }
  }

  // remove order from shopping
  function removeOrder(id: string) {
    const listWithoutOrder = shoppingCart.filter((order) => order.id !== id);

    setShoppingCart(listWithoutOrder);
  }

  async function buyProduct() {
    // conectar a uma ferramenta de observabilidade( datalog/ sentry)
    try {
      setIsCreatingCheckoutSession(true);

      const shoppingCartToBuy = shoppingCart.map((order) => {
        return {
          price: order.defaultPriceId,
          quantity: 1,
        };
      });

      const response = await axios.post(`/api/checkout/`, {
        priceIds: shoppingCartToBuy,
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;

      /**
       * reirecionar para paginas internas
       * router.push('/chekout')
       *
       * useRouter()
       */
    } catch (error) {
      alert("erro ao redirecionar");

      setIsCreatingCheckoutSession(false);
    }
  }

  return (
    <shoppingCartContext.Provider
      value={{
        togleSidebarOpen,
        isOpen,
        addToShoppingCart,
        shoppingCart,
        removeOrder,
        buyProduct,
        isCreatingCheckoutSession,
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
}
