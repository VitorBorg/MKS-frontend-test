import ProductCard from "@/components/molecules/productCard";
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

    type productType = {
        id: number;
        photo: string;
        name: string;
        description: string;
        price: string;
    };

  return (
    <S.Grid>
        <ul>    
            {Cards.Cards.map((product : productType) => (
            <li key={product.id}>
              {ProductCard(product.photo, product.name, product.description, product.price, product.id)}
            </li>
          ))}
        </ul>
    </S.Grid>
  );
};

export default GridCard;