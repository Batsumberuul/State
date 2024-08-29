import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const messages = ["Learn react", "apply jobs", "Invest your new income"];

export default function StepPage() {
  const [step, setStep] = useState(1);
  const [isHideSteps, setIsHideSteps] = useState(true);
  const incrementStep = () => {
    if (step < 3) {
      setStep((prevStep) => prevStep + 1);
    }
  };
  const handlePrevStep = () => {
    if (step > 0) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const toggleSteps = () => {
    setIsHideSteps(!isHideSteps);
  };

  return (
    <div className="w-96  border-2 border-solid">
      <div
        className="w-10 h-10 bg-blue-500 border-2 rounded-full flex justify-center items-center"
        onClick={toggleSteps}
      >
        X
      </div>
      {isHideSteps && (
        <div>
          <div className="flex justify-between mb-10">
            <div
              className="flex justify-center items-center w-10 h-10  rounded-full text-white"
              style={{ backgroundColor: step >= 1 ? "purple " : "gray" }}
            >
              1
            </div>
            <div
              className="flex justify-center items-center w-10 h-10  rounded-full text-white"
              style={{ backgroundColor: step >= 2 ? "purple " : "gray" }}
            >
              2
            </div>
            <div
              className="flex justify-center items-center w-10 h-10  rounded-full text-white"
              style={{ backgroundColor: step >= 3 ? "purple " : "gray" }}
            >
              3
            </div>
          </div>
          <p className="text-center md-10">{messages[step - 1]}</p>
          <div className="flex justify-between items-end">
            <button
              className="py-2 px-4 bg-blue-400 rounded"
              onClick={handlePrevStep}
            >
              {" "}
              prev
            </button>
            <button
              className="py-2 px-4 bg-blue-400 rounded"
              onClick={incrementStep}
            >
              {" "}
              next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
