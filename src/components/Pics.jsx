import Image from "next/image";

const Pics = ({ images, setChangePic }) => {
  return (
    <div className="grid grid-cols-3 border-1 border-black">
      {images?.[1] && (
        <Image
          onClick={() => setChangePic(1)}
          className="ml-20 border-2 border-background max-h-[100px] cursor-pointer"
          src={images[1]}
          width={100}
          height={100}
          alt="Thumbnail 1"
        />
      )}
      {images?.[2] && (
        <Image
          onClick={() => setChangePic(2)}
          className="ml-10 border-2 border-background max-h-[100px] cursor-pointer"
          src={images[2]}
          width={100}
          height={100}
          alt="Thumbnail 2"
        />
      )}
      {images?.[3] && (
        <Image
          onClick={() => setChangePic(3)}
          className="ml-1 border-2 border-background max-h-[100px] cursor-pointer"
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
