import Buybnt from "@/components/Buybnt";
import Menu from "@/components/Menu";
import Productside from "@/components/Productside";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Menu />
      <Productside />
    </div>
  );
}
