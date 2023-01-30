import ProductCardCart from "../../molecules/productCardCart/index";
//import useCart from "@/hooks/useCart";
import { useSelector } from "react-redux";
import { productCartType } from "@/types/types";
import React, { useEffect, useState } from "react";
import * as S from "./style";

type products = {
    id: number;
    photo: string;
    name: string;
    description: string;
    price: string;
}[];

const GridCartCard = () => {
  const getProducts : [] = useSelector((state : any) => (state.cart.cart))

  return (
    <S.Grid>
        <ul>    
            {getProducts.length != undefined && getProducts.map((product : any) => (
            <li key={product.productToAdd.id}>
              {ProductCardCart({
                id: product.productToAdd.id, 
                photo:product.productToAdd.photo, 
                name: product.productToAdd.name, 
                price: product.productToAdd.price, 
                quantity: product.productToAdd.quantity
                })}
            </li>
          ))}
        </ul>
    </S.Grid>
  );
};

export default GridCartCard;