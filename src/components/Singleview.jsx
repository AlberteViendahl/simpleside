"use client";

import { useState } from "react";
import Reviews from "@/components/Review";
import Image from "next/image";
import Link from "next/link";
import Pics from "@/components/Pics";

const SingleView = ({ product }) => {
  const [changePic, setChangePic] = useState(0);

  const mainImageSrc =
    changePic === 0 ? product.thumbnail : product.images[changePic];

  return (
    <section className="bg-background min-h-screen flex justify-center">
      <div className="bg-lightblue p-4 rounded-md shadow min-h-screen w-800 mt-5 mb-10">
        {/* Tilføjer en Tilbage-knap, der linker til forsiden */}
        <Link href="/" passHref>
          <button className="bg-background text-lightblue px-4 py-2 rounded-15 mb-4 hover:bg-purple">
            Tilbage
          </button>
        </Link>
        <div className="grid grid-cols-2">
          <Image
            className="ml-20 mb-5"
            src={mainImageSrc}
            width={350}
            height={350}
            alt={product.title}
          />
          <div className="p-10">
            <p className="pb-5 font-semibold text-2xl">{product.title}</p>
            <p className="pb-5 text-l">{product.description}</p>
            <p className="font-bold text-xl">Price: {product.price},-</p>
          </div>
          <Pics images={product.images} setChangePic={setChangePic} />
        </div>
        <Reviews />
      </div>
    </section>
  );
};

export default SingleView;
