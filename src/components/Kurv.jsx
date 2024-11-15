"use client";

import { useContext } from "react";
import { CartContext } from "./CartContext"; // Sørg for at bruge den rigtige import

const Kurv = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); // Bruger useContext til at få adgang til cartItems og removeFromCart
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0); // Beregner den samlede pris

  // Funktion til at slette en vare fra kurven
  const deleteItem = (itemId) => {
    removeFromCart(itemId); // Kalder removeFromCart, som opdaterer cartItems
  };

  return (
    <div className="bg-lightblue fixed top-16 right-0 p-4 w-1/3 shadow-lg mt-5 mr-5 rounded-15 sm:w-1/35 md:w-1/4 lg:w-1/4">
      <h2 className="text-xl font-bold mb-4 text-background">Indkøbskurv</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center mb-2">
            <span>{item.title}</span>
            <span>{item.price} kr</span>

            {/* Knappen til at slette varen */}
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
        <h3 className="font-bold text-background">
          Samlet pris: {totalPrice} kr
        </h3>
        <button className="bg-background text-lightblue px-4 py-2 mt-4 rounded-15 hover:bg-purple">
          Gå til betaling
        </button>
      </div>
    </div>
  );
};

export default Kurv;
