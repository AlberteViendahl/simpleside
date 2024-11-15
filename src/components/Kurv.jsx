"use client";

import { useContext, useEffect } from "react";
import Link from "next/link";
import { CartContext } from "./CartContext";

const Kurv = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const stringifiedCart = JSON.stringify(
    cartItems.map((item) => {
      return { id: item.id, title: item.title, price: item.price };
    })
  );

  const deleteItem = (itemId) => {
    removeFromCart(itemId); // Kalder removeFromCart, som opdaterer cartItems
  };

  return (
    <div className="bg-lightblue fixed top-20 right-0 p-4 w-1/3 sm:w-1/4 md:w-1/4 lg:w-1/4 shadow-lg mt-5 mr-5 rounded-15">
      <h2 className="text-xl font-bold mb-4 text-background">Indkøbskurv</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="flex justify-between mb-2">
            <span>{item.title}</span>
            <span>{item.price} kr</span>
            <button
              onClick={() => deleteItem(item.id)} // Når knappen trykkes, kaldes deleteItem med item.id
              className="text-background border border-lightblue hover:border hover:border-background"
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <div className="border-t mt-4 pt-4">
        <h3 className="font-bold text-background mb-5">
          Samlet pris: {totalPrice} kr
        </h3>
        <Link
          href={`/payment?cart=${stringifiedCart}`}
          className=" pr-1 pl-1 mt-5 border-2 border-background rounded-15 bg-background text-lightblue sm:pr-4 sm:pl-4 p-2 md:pr-7 md:pl-7 lg:pr-7 lg:pl-7 hover:bg-lightblue hover:border-background hover:border-2 hover:text-black"
        >
          Gå til betaling
        </Link>
      </div>
    </div>
  );
};

export default Kurv;
