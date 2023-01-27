import ProductCard from "@/components/molecules/productCard";
import { productType } from "@/types/types";
import React from "react";
import * as S from "./style";

type products = {
    id: number;
    photo: string;
    name: string;
    description: string;
    price: string;
}[];

const GridCard = (Cards : any) => {
  return (
    <S.Grid>
        <ul>    
            {Cards.Cards.map((product : productType) => (
            <li key={product.id}>
              {ProductCard({
                id: product.id, 
                photo: product.photo, 
                name: product.name, 
                price: product.price, 
                description: product.description
                })}
            </li>
          ))}
        </ul>
    </S.Grid>
  );
};

export default GridCard;