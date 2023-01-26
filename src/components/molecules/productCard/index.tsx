import BagIcon from "@/components/atoms/bagIcon";
import useCart from "@/hooks/useCart";
import React from "react";
import * as S from "./style";

import { productCartType } from "@/types/types";


const ProductCard = (Image : any, Title : any, Description : any, Price : any, Id : any
) => {
  const { AddProduct } : any = useCart();

  
  const handleAddItemToCart = () => {
    let productToAdd : productCartType = {
      id: Id,
      photo: Image,
      name: Title,
      price: Price,
      quantity: 1,
    };

    AddProduct(productToAdd);
  };
  
  
  return (
    <S.Card>
      <S.Content>
        <S.Image>
          <img src={Image} />
        </S.Image>
        <S.NamePrice>
            <S.PriceDiv>
              <h5>{
              new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(Price).slice(0, -3)
              }</h5>
            </S.PriceDiv>
            
            <h3>{Title}</h3>
        </S.NamePrice>

        <S.Description>
            <p>{Description}</p>
        </S.Description>
      </S.Content>

        <S.Button onClick={handleAddItemToCart}>
          <BagIcon />
            <span>COMPRAR</span>
        </S.Button>

    </S.Card>
  );
};

export default ProductCard;