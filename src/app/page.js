import Buybnt from "@/components/Buybnt";
import Menu from "@/components/Menu";
import Productside from "@/components/Productside";
import Singleview from "@/components/Singleview";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background">
      <Menu />
      <Productside/>
    </div>
  );
}
