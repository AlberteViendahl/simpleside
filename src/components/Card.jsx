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
      <div className="grid grid-cols-3 w-75">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="bg-lightblue p-4 rounded-md shadow h-400 w-300 mt-5 ml-5 mb-10"
          >
            <Image
              className="mb-15"
              src={product.thumbnail}
              width={250}
              height={350}
              alt={product.title}
            />
            <Link href={`/sider/${product.id}`}>{product.title}</Link>
            <Buybnt product={product} />
          </div>
        ))}
      </div>
      <Kurv />
    </CartProvider>
  );
};

export default Card;
