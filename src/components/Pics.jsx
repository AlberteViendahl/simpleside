import Image from "next/image";

const Pics = ({ images, setChangePic }) => {
  return (
    <div className="grid grid-cols-3 border-1 border-black gap-4 md:gap-2">
      {images?.[1] && (
        <Image
          onClick={() => setChangePic(1)}
          className="ml-20 max-h-[100px] cursor-pointer md:border-2 md:border-background  "
          src={images[1]}
          width={100}
          height={100}
          alt="Thumbnail 1"
        />
      )}
      {images?.[2] && (
        <Image
          onClick={() => setChangePic(2)}
          className="ml-10 max-h-[100px] cursor-pointer md:border-2 md:border-background"
          src={images[2]}
          width={100}
          height={100}
          alt="Thumbnail 2"
        />
      )}
      {images?.[3] && (
        <Image
          onClick={() => setChangePic(3)}
          className="ml-1 max-h-[100px] cursor-pointer md:border-2 md:border-background"
          src={images[3]}
          width={100}
          height={100}
          alt="Thumbnail 3"
        />
      )}
    </div>
  );
};

export default Pics;
