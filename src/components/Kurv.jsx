"use client";

import { useContext, useEffect } from "react";
import Link from "next/link";
import { CartContext } from "./CartContext";

const Kurv = () => {
  const { cartItems } = useContext(CartContext);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const stringifiedCart = JSON.stringify(
    cartItems.map((item) => {
      return { id: item.id };
    })
  );

  return (
    <div className="bg-lightblue fixed top-16 right-0 p-4 w-1/4 shadow-lg mt-5 mr-5 rounded-15">
      <h2 className="text-xl font-bold mb-4 text-background">Indkøbskurv</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="flex justify-between mb-2">
            <span>{item.title}</span>
            <span>{item.price} kr</span>
          </li>
        ))}
      </ul>
      <div className="border-t mt-4 pt-4">
        <h3 className="font-bold text-background mb-5">
          Samlet pris: {totalPrice} kr
        </h3>
        <Link
          href={`/payment?cart=${stringifiedCart}`}
          className="mt-5 border-2 border-background rounded-15 bg-background text-lightblue pr-7 pl-7 p-2 hover:bg-lightblue hover:border-background hover:border-2 hover:text-black"
        >
          Gå til betaling
        </Link>
      </div>
    </div>
  );
};

export default Kurv;
