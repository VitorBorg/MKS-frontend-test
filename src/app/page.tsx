"use client"; // this is a client component
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { useEffect, useState } from 'react'

import GetProducts from '../hooks/getProducts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [productsData, setProductsData] = useState([]);

  useEffect (() => {
    const dataFetch = async () => {
      try {
        const parameters = {
          page: 1,
          row: 10,
          sort: 'id' ,
          order: 'ASC'
      }

        const data = await GetProducts(parameters);
        setProductsData(data.products);
      } catch (e){
        console.log(e);
      }
    }

    dataFetch();
  }, []);
  

  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <h2 className={inter.className}>
              API GET PRODUCTS
            </h2>

            <ul>
          {productsData.map((product : any) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <span>{product.description}</span>
              <span>{product.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
