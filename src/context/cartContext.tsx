import { productCartType } from "@/types/types";
import { createContext, useEffect, useState } from "react";

export const CartContext= createContext({})

export const CartProvider = ({children} : any) => {
    const [refresh, setRefresh] = useState (false);

    useEffect (() => {   
        setRefresh(!refresh);
    }, [])
    

    const AddProduct = (productToAdd : productCartType) => {
        const localStorageProducts = JSON.parse(localStorage.getItem("cart-Items") || '{}');
        const hasProduct = localStorageProducts?.find((item : any) => item.productToAdd.id === productToAdd.id);

        if (hasProduct)
            return;

        let newLocalStorageProducts;

        if(localStorageProducts[0] != undefined) newLocalStorageProducts = [...localStorageProducts, {productToAdd}]
        else newLocalStorageProducts = [{productToAdd}]

        localStorage.setItem("cart-Items", JSON.stringify(newLocalStorageProducts));
        setRefresh(!refresh);
        return;
    }

    const RemoveProduct = (Id : number) => {
        const localStorageProducts = JSON.parse(localStorage.getItem("cart-Items") || '{}');
        const hasProduct = localStorageProducts?.filter((item : any) => item.productToAdd.id !== Id);

        if (hasProduct){
            localStorage.setItem("cart-Items", JSON.stringify(hasProduct));
            setRefresh(!refresh);
            return 1;
        } else return 0;
    }

    const GetProducts = () => {
        const localStorageProducts = JSON.parse(localStorage.getItem("cart-Items") || '{}');
        return localStorageProducts;
    }

    const IncreaseQuantityProduct = (Id : number) => {
        const localStorageProducts = JSON.parse(localStorage.getItem("cart-Items") || '{}');
        const productIndex = localStorageProducts?.findIndex((item : any) => item.productToAdd.id === Id);

        localStorageProducts[productIndex].productToAdd.quantity += 1;
        localStorage.setItem("cart-Items", JSON.stringify(localStorageProducts));
        setRefresh(!refresh);
        return;
    }

    const DecreaseQuantityProduct = (Id : number) => {
        const localStorageProducts = JSON.parse(localStorage.getItem("cart-Items") || '{}');
        const productIndex = localStorageProducts?.findIndex((item : any) => item.productToAdd.id === Id);

        localStorageProducts[productIndex].productToAdd.quantity -= 1;
        localStorage.setItem("cart-Items", JSON.stringify(localStorageProducts));
        setRefresh(!refresh);
        return;
    }

    return (
        <CartContext.Provider
        value={{refresh, GetProducts, RemoveProduct, AddProduct, IncreaseQuantityProduct, DecreaseQuantityProduct}} >
            {children}
        </CartContext.Provider>
    );
}