import React, { useEffect } from "react";
import * as S from "./style";

import { useState } from "react";
import CartIcon from "@/components/atoms/cartIcon";
import GridCartCard from "../gridCartCards";
import useCart from "@/hooks/useCart";

const Cart = () => {
  const { GetProducts, refresh } : any = useCart();
  const [menu, setMenu] = useState(false);
  const [productsQuantity, setProductsQuantity] = useState(0);
  const [productsValue, setProductsValue] = useState("");

  const handleButtonOpenCart = () => {
    console.log("ABRE O CARRINHO!")
    setMenu(!menu);
  };

    useEffect(() => {
      let products = GetProducts();
      setProductsQuantity(products.length);

      let totalPrice : number;
      let price : number = products.reduce((totalPrice : number, product : any) => 
      totalPrice + (parseFloat(product.productToAdd.price) * product.productToAdd.quantity), 0)
      
      setProductsValue(new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(parseFloat(price.toString())).slice(0, -3));
    }, [, refresh]);

  return (

    <>
        <S.Cart onClick={handleButtonOpenCart}>
          <CartIcon/>
          <span>{productsQuantity}</span>
        </S.Cart>

      {menu && (
        <S.MenuAside>
          <S.Content>
            <S.HeaderAndItems>
            <S.Header>
              <S.Title>
                <S.Span>Carrinho</S.Span>
                <div><S.Span>de compras</S.Span></div>
              </S.Title>

              <S.ButtonMobileClose onClick={handleButtonOpenCart}>
                <span>X</span>
              </S.ButtonMobileClose>
            </S.Header>

            <S.Items>
              <GridCartCard />
            </S.Items>

            </S.HeaderAndItems>

            <S.Price>
              <S.Span>Total:</S.Span>
              <S.Span>{productsValue}</S.Span>
            </S.Price>
          </S.Content>

          <S.FinishButton>
            <S.Span>FINALIZAR COMPRA</S.Span>
          </S.FinishButton>
        </S.MenuAside>
      )}

    </>
  );
};

export default Cart;