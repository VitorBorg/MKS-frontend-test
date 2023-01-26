import ProductCardCart from "@/components/molecules/productCardCart";
import useCart from "@/hooks/useCart";
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
  const { GetProducts, refresh } : any = useCart();
  const [dataCartProducts, setDataCartProducts] : any = useState([]);

    useEffect(() => {
      setDataCartProducts(GetProducts());
    }, [, refresh]);

  return (
    <S.Grid>
        <ul>    
            {GetProducts().length != undefined && dataCartProducts.map((product : productCartType) => (
            <li key={product.id}>
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