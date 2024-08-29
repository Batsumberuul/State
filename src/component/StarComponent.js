import { useState } from "react";
import { FaStar } from "react-icons/fa6";

const StarComponent = () => {
  const [rating, setRating] = useState(0);
  console.log(rating);
  const incrementRating = () => {
    if (rating <= 5) {
      return setRating((prevRating) => prevRating + 1);
    }
    const handlePrevStep = () => {
      if (rating > 0) {
        setRating((prevRating) => prevRating - 1);
      }
    };
  };
  <div className="flex flex-col justify-center items-center ">
    <FaStar
      style={{ color: rating >= 1 ? "orange " : "gray" }}
      onClick={incrementRating}
    />
    <p className="font-normal text-sm text-gray-500">Terrible</p>
  </div>;
};
export default StarComponent;
