import Image from "next/image";
import { Handbag } from "phosphor-react";
import { Header, ShoopingCartIcon } from "./styles";
import logoImg from "../../assets/logo.svg";
import { shoppingCartContext } from "../../contexts/shoppingCartContext";
import { ShoppingCart } from "../ShoppingCart";
import { useContext, useEffect, useState } from "react";

export function HeaderCompenent() {
  const { togleSidebarOpen, shoppingCart } = useContext(shoppingCartContext);
  const [shoppingCartVariant, setShoppingCartVariant] = useState<
    "full" | "empty"
  >("empty");

  useEffect(() => {
    setShoppingCartVariant((state) => {
      return shoppingCart.length !== 0 ? "full" : "empty";
    });
  }, [shoppingCart]);

  console.log(shoppingCartVariant);
  return (
    <Header>
      <Image src={logoImg} alt="" />

      <ShoopingCartIcon
        onClick={togleSidebarOpen}
        variantSpan={shoppingCartVariant}
      >
        <Handbag size={24} />
      </ShoopingCartIcon>

      <ShoppingCart />
    </Header>
  );
}
