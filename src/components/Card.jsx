"use client";

import Buybnt from "./Buybnt";
import Image from "next/image";
import Link from "next/link";

// Definerer Card-komponenten, der modtager "products" og "selectedTag" som props
const Card = ({ products, selectedTag }) => {

   // Hvis der ikke findes produkter, returneres en tom <div> for at undgå fejl
  if (!products) {
    return <div></div>;
  }

  // Filtrerer produkterne baseret på "selectedTag", hvis den er tilgængelig
  // Hvis ingen tag er valgt, vises alle produkter
  const filteredProducts = selectedTag
    ? products.filter(product => product.tags.includes(selectedTag))
    : products;

    // Returnerer HTML til at vise produktkortene, når data er hentet.
  return (
    <div className="grid grid-cols-3 w-75">
      {filteredProducts.map(product => ( // Mapper over hvert produkt i "products"-arrayet
        <div
          key={product.id} // Tildeler hver produkt et unikt "key"-attribut, så React kan holde styr på listen.
          className="bg-lightblue p-4 rounded-md shadow h-400 w-300 mt-5 ml-5 mb-10 "
        >
          <Image
            className="mb-15"
            src={product.thumbnail} // URL'en til produktets billede, hentet fra API'et.
            width={250}
            height={350}
            alt={product.title}
          />
          <Link href={`/sider/${product.id}`}>{product.title}</Link>
          <Buybnt className="flex justify-center" />
        </div>
      ))}
    </div>
  );
};

export default Card;
