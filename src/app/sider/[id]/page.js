import Singleview from "@/components/Singleview";

const Page = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();

  return (
    <div>
      <Singleview product={data} />
    </div>
  );
};

export default Page;
