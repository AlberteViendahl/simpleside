import Buybnt from "./Buybnt";

const Card = () => {
  return (
    <div className="bg-lightblue w-300 h-400 rounded-15 mt-10 ml-5">
      <div className=" flex justify-center items-center pt-5 mt-5 rounded-15">
        <img className="h-250" src="/img/smil.png" alt="" />
      </div>

      <p className="flex justify-center pt-3 pb-3 ">Prize</p>
      <div className="flex justify-center">
        <Buybnt />
      </div>
    </div>
  );
};

export default Card;
