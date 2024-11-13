import Buybnt from "@/components/Buybnt";
import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import Menu from "@/components/Menu";
import Review from "@/components/Review";
import Productside from "@/components/Productside";
import Singleview from "@/components/Singleview";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background">
      <Menu />
      <Productside/>
      <Review/>

    </div>
  );
}
