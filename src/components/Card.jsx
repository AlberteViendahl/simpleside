"use client";

import Buybnt from "./Buybnt";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  // Initialiserer state "products" med undefined, så vi kan opdatere den senere, når vi får data fra API'en.
  const [products, setProducts] = useState(undefined);

  // useEffect bruges til at hente data fra API'et, når komponenten først indlæses.
  useEffect(() => {
    // Definerer en asynkron funktion til at hente produktdata fra API'et.
    async function fetchProducts() {
      // Henter data fra dummyjson API'et og venter på svar.
      let res = await fetch("https://dummyjson.com/products");
      // Konverterer svaret til JSON-format, så vi kan bruge det som et objekt.
      let data = await res.json();
      // Opdaterer "products"-state med de hentede data, så komponenten re-render med de nye data.
      setProducts(data);
    }

    // Kalder fetchProducts for at starte datahentning.
    fetchProducts();
  }, []); // Tom array [] betyder, at denne effekt kun kører én gang, når komponenten indlæses.

  // Tjekker om "products" stadig er undefined, hvilket betyder, at vi stadig venter på data.
  if (!products) {
    // Viser en "Loading"-tekst, mens vi venter på data fra API'et.
    return <div>Loading!!!</div>;
  }

  // Returnerer HTML til at vise produktkortene, når data er hentet.
  return (
    <div className="grid grid-cols-3 w-75">
      {products.products.map(
        (
          product // Mapper over hvert produkt i "products"-arrayet
        ) => (
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
        )
      )}
    </div>
  );
};

export default Card;
