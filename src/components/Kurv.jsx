"use client";
// Cart.js
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div
      className="bg-lightblue fixed top-16 right-0 p-4 w-1/4 shadow-lg mt-5 mr-5 rounded-15"
    >
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
        <h3 className="font-bold text-background">Samlet pris: {totalPrice} kr</h3>
        <button className="bg-background text-lightblue px-4 py-2 mt-4 rounded-15 hover:bg-purple">
          Gå til betaling
        </button>
      </div>
    </div>
  );
};

export default Cart;

