import Image from "next/image";

const Page = async ({ params }) => {
  const id = (await params).id;
  let response = await fetch(`https://dummyjson.com/products/${id}`);
  let product = await response.json();
  return (
    <section className="bg-background min-h-screen flex justify-center">
      <div className="bg-lightblue p-4 rounded-md shadow h-600 w-800 mt-5 mb-10 grid grid-cols-2">
        <Image
          className="ml-20"
          src={product.thumbnail}
          width={350}
          height={350}
          alt={product.title}
        />
        <div className="p-10">
          <p className="pb-5">{product.title}</p>
          <p className="pb-5">{product.description}</p>
          <p>{product.price},-</p>
        </div>
      </div>
    </section>
  );
};

export default Page;
