import React, { useEffect } from "react";
import * as S from "./style";

import { useState } from "react";
import CartIcon from "@/components/atoms/cartIcon";
import GridCartCard from "../gridCartCards";

import { useSelector } from "react-redux";

const Cart = () => {
  const getProducts = useSelector((state : any) => state.cart.cart)
  const getProductsPrice = useSelector((state : any) => state.cart.productsPrice)

  const [menu, setMenu] = useState(false);

  const handleButtonOpenCart = () => {
    setMenu(!menu);
  };

  return (

    <>
        <S.Cart onClick={handleButtonOpenCart}>
          <CartIcon/>
          <span>{getProducts.length}</span>
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
              <S.Span>{getProductsPrice}</S.Span>
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