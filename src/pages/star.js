import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import StarComponent from "../component/StarComponent";

const stars = [1, 2, 3, 4, 5];

const starPage = () => {
  const [rating, setRating] = useState(0);

  const incrementRating = (newRating) => {
    if (rating <= 5) {
      return setRating((prevRating) => prevRating + 1);
    }
    const handlePrevStep = () => {
      if (rating > 0) {
        setRating((prevRating) => prevRating - 1);
      }
    };
  };
  return (
    <div className="w-[800px] h-[400px] border-2 bg-gray-100 flex justify-center items-center flex-col gap-4">
      <p className="font-bold text-4xl text-gray-500">How was your stay?</p>
      <div className="flex gap-2">
        <div className="flex flex-col justify-center items-center ">
          {stars.map((star) => {
            <FaStar
              style={{ color: star >= index ? "eba834 " : "gray" }}
              onClick={incrementRating(index)}
            />;
          })}
          <FaStar
            style={{ color: rating >= 1 ? "eba834 " : "gray" }}
            onClick={incrementRating}
          />
          <p className="font-normal text-sm text-gray-500">Terrible</p>
        </div>
        {/* <FaStar
          style={{ color: rating >= 2 ? "eba834  " : "gray" }}
          onClick={incrementRating}
        />
        <FaStar
          style={{ color: rating >= 3 ? "eba834  " : "gray" }}
          onClick={incrementRating}
        />
        <FaStar
          style={{ color: rating >= 4 ? "eba834  " : "gray" }}
          onClick={incrementRating}
        />
        <FaStar
          style={{ color: rating >= 5 ? "eba834  " : "gray" }}
          onClick={incrementRating}
        /> */}
      </div>
    </div>
  );
};
export default starPage;
