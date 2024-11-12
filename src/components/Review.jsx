import { FaRegStar } from "react-icons/fa";

const Review = () => {
  return (
    <section className="text-lightblue">
      <div className="flex m-5">
        <h1>Reviews</h1>
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
        <FaRegStar />
      </div>
      <div className="flex">
        <ul className="flex m-5 gap-5">
          <li>
            <div className="flex">
              <FaRegStar />
              <FaRegStar />
            </div>
            <div>
              <p className="leading-4 mt-2">
                "Very satisfied!"
                <span className="block mt-1">Scarlett Wright</span>
              </p>
            </div>
          </li>
          <li>
            <div className="flex">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </div>
            <div>
              <p className="leading-4 mt-2">
                "Very satisfied!"
                <span className="block mt-1">Scarlett Wright</span>
              </p>
            </div>
          </li>
          <li>
            <div className="flex">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </div>
            <div>
              <p className="leading-4 mt-2">
                "Very satisfied!"
                <span className="block mt-1">Scarlett Wright</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Review;
