import Reviews from "@/components/Review";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params }) => {
  const id = (await params).id;
  let response = await fetch(`https://dummyjson.com/products/${id}`);
  let product = await response.json();
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
            src={product.thumbnail}
            width={350}
            height={350}
            alt={product.title}
          />
          <div className="p-10">
            <p className="pb-5 font-semibold text-2xl">{product.title}</p>
            <p className="pb-5 text-l">{product.description}</p>
            <p className="font-bold text-xl">Price: {product.price},-</p>
          </div>
          <div className="grid grid-cols-3 border-1 border-black">
            {product.images?.[1] && (
              <Image
                className="ml-20 border-2 border-background max-h-[100px]"
                src={product.images[1]}
                width={100}
                height={100}
                alt={product.title}
              />
            )}
            {product.images?.[2] && (
              <Image
                className="ml-10 border-2 border-background max-h-[100px]"
                src={product.images[2]}
                width={100}
                height={100}
                alt={product.title}
              />
            )}
            {product.images?.[3] && (
              <Image
                className="ml-1 border-2 border-background max-h-[100px]"
                src={product.images[3]}
                width={100}
                height={100}
                alt={product.title}
              />
            )}
          </div>
        </div>
        <Reviews />
      </div>
    </section>
  );
};

export default Page;
