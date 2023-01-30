import BagIcon from "../../atoms/bagIcon/index";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/cart/index";
import React from "react";
import * as S from "./style";

import { productCartType, productType } from "@/types/types";


const ProductCard = ({id, photo, name, price, description} : productType
) => {
  const dispatch = useDispatch();

  const handleAddItemToCart = () => {
    //productCartType
    let productToAdd : productCartType = {
      id: id,
      photo: photo,
      name: name,
      price: price,
      quantity: 1,
    };

    dispatch(addProduct(productToAdd))
  };
  
  
  return (
    <S.Card>
      <S.Content>
        <S.Image>
          <img src={photo} />
        </S.Image>
        <S.NamePrice>
            <S.PriceDiv>
              <h5>{
              new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(parseFloat(price)).slice(0, -3)
              }</h5>
            </S.PriceDiv>
            
            <h3>{name}</h3>
        </S.NamePrice>

        <S.Description>
            <p>{description}</p>
        </S.Description>
      </S.Content>

        <S.Button data-testid="comprarButton" onClick={handleAddItemToCart}>
          <BagIcon />
            <span>COMPRAR</span>
        </S.Button>

    </S.Card>
  );
};

export default ProductCard;