"use client";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Buybnt = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <button
        onClick={() => addToCart(product)}
        className="rounded-15 bg-background text-lightblue pr-7 pl-7 p-2 hover:bg-lightgreen hover:text-black mt-5"
      >
        Læg I Kurv
      </button>
    </div>
  );
};

export default Buybnt;
