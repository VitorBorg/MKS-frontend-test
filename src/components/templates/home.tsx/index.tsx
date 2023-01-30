import { useEffect, useState } from 'react'

import * as S from "./style" 

import GetProducts from '../../../hooks/getProducts'
import GridCard from '../../organisms/gridCards/index';
import ProductCardSkeleton from '../../molecules/productCardSkeleton/index';

export default function Homepage() {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect (() => {
    const dataFetch = async () => {
        const parameters = {
          page: 1,
          row: 8,
          sort: 'id' ,
          order: 'ASC'
      }

        const data = await GetProducts(parameters)


        setProductsData(data.products);
        setIsLoading(false);
    }

    dataFetch();
  }, []);
  

  return (
    <main>
      <S.Container>
        {!isLoading 
        ? <GridCard Cards={productsData}/> 
        : <ProductCardSkeleton cards={8}/>}
      </S.Container>
    </main>
  )
}
