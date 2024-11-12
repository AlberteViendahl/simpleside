"use client";

import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import Card from "./Card";

const ProductPage = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products); // Opdaterer "products" state med de hentede produkter.
    }

    fetchProducts();
  }, []);

  return (
    <div>
        {/* Viser Dropdown-komponenten, og sender setSelectedTag som onSelectTag-prop */}
      <Dropdown onSelectTag={setSelectedTag} />
       {/* Viser Card-komponenten, og sender de hentede produkter og det valgte tag som props */}
      <Card products={products} selectedTag={selectedTag} />
    </div>
  );
};

export default ProductPage;
