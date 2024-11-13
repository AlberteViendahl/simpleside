"use client";
// Card.js
import { CartProvider } from "./CartContext";
import Kurv from "./Kurv";
import Buybnt from "./Buybnt";
import Image from "next/image";
import Link from "next/link";

const Card = ({ products, selectedTag }) => {
  if (!products) {
    return <div></div>;
  }

  const filteredProducts = selectedTag
    ? products.filter(product => product.tags.includes(selectedTag))
    : products;

  return (
    <CartProvider>
      <div className="grid grid-cols-3 gap-5 w-75 pb-5 pl-5">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="bg-lightblue p-4 rounded-md shadow h-410 w-300 mt-5 flex flex-col items-center text-center"
          >
            <Image
              className="mb-4"
              src={product.thumbnail}
              width={250}
              height={350}
              alt={product.title}
            />
            <Link href={`/sider/${product.id}`} className="font-bold text-lg mb-2">
              {product.title}
            </Link>
            <Buybnt product={product} />
          </div>
        ))}
      </div>
      <Kurv />
    </CartProvider>
  );
};

export default Card;
