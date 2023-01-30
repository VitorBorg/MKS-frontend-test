import ProductCard from "../../molecules/productCard/index";
import { productAPI, productType } from "../../../types/types";
import React from "react";
import * as S from "./style";

const GridCard = ({Cards} : productAPI[]) => {

  return (
    <S.Grid>
        <ul>    
            {Cards.map((product : productAPI) => (
            <li key={product.id}>
              {ProductCard({
                id: parseInt(product.id), 
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