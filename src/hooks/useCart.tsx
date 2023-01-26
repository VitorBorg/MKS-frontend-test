import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const useCart = () => {
  const context = useContext(CartContext);

  return context || '{}';
};

export default useCart;