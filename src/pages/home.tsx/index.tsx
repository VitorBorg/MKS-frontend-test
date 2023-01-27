import { useEffect, useState } from 'react'

import * as S from "./style" 

import GetProducts from '../../hooks/getProducts'
import GridCard from '@/components/organisms/gridCards';



export default function Homepage() {
  //const [productsData, setProductsData] = useState([]);
  const [productsData, setProductsData] = useState([{     
      id: 1,
      name:"Iphone",
      description: "Redesigned from scratch and completely revised.",
      price: "399"
    }]);

  useEffect (() => {
    const dataFetch = async () => {
        const parameters = {
          page: 1,
          row: 8,
          sort: 'id' ,
          order: 'ASC'
      }

        const data = await GetProducts(parameters);
        setProductsData(data.products);
        console.log(data.products)

    }

    dataFetch();
  }, []);
  

  return (
    <main>
      <S.Container>
        <GridCard Cards={productsData}/>
      </S.Container>
    </main>
  )
}
