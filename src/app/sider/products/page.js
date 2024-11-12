import Card from "@/components/Card";
import Menu from "@/components/Menu";

const Page = () => {
  return (
    <section className=" bg-background min-h-screen">
      <Menu />
      <div className="grid grid-cols-3 w-75">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Page;
