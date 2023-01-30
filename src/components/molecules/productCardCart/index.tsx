//import useCart from "@/hooks/useCart";
import { useDispatch } from "react-redux";
import React from "react";
import * as S from "./style";

import { productCartType } from "@/types/types";
import { decreaseQuantityProduct, increaseQuantityProduct, removeProduct } from "../../../store/cart/index";


const ProductCardCart = ({id, photo, name, price, quantity} : productCartType
) => {
  //const { RemoveProduct, IncreaseQuantityProduct, DecreaseQuantityProduct } : any = useCart();
  const dispatch = useDispatch();

  
  const handleRemoveItemToCart = () => {

    dispatch(removeProduct(id))

  };

  const handleIncreaseQuantityItemToCart = () => {
    //IncreaseQuantityProduct(id);


    dispatch(increaseQuantityProduct(id))

  };

  const handleDecreaseQuantityItemToCart = () => {
    //DecreaseQuantityProduct(id);


    dispatch(decreaseQuantityProduct(id))
  };
  
  
  return (
    <S.Card>
      <S.Content>
        <S.ImageName>
          <img src={photo} />
          <h3>{name}</h3>
        </S.ImageName>

        
        <S.Quantity>
            <button onClick={handleDecreaseQuantityItemToCart}>-</button>
            <p>{quantity}</p>
            <button onClick={handleIncreaseQuantityItemToCart}>+</button>
        </S.Quantity>

        <S.PriceDiv>
          <h5>{
          new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(parseFloat(price)).slice(0, -3)
          }</h5>
        </S.PriceDiv>
      </S.Content>

        <S.ButtonDeleteProduct onClick={handleRemoveItemToCart}>
            <span>X</span>
        </S.ButtonDeleteProduct>

    </S.Card>
  );
};

export default ProductCardCart;