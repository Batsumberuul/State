import {useState} from "react";

const players = [
  {
    id: 1,
    playerName: "John Cena",
    playerScore: 10,
  },
  {
    id: 2,
    playerName: "John John",
    playerScore: 8,
  },
  {
    id: 3,
    playerName: "John Kena",
    playerScore: 5,
  },
];
console.log(players);

const ScorePage = () => {
  const [score, setScore] = useState(players);

  const incrementScore = (index) => {
    const updatedScore = [...score];
    updatedScore[index].playerScore += 1;
    setScore(updatedScore);
  };
  const decrementScore = (index) => {
    const updatedScore = [...score];
    updatedScore[index].playerScore -= 1;
    setScore(updatedScore);
  };

  return (
    <div className="w-[530px] h-[533px] border-2 rounded-xl flex flex-col justify-center items-center gap-6">
      <div className="w-[466px]">
        <div className="flex justify-between">
          <h1 className="font-semibold text-3xl text-gray-950">Play Score</h1>
          <img src="/img.png" />
        </div>
        <p className="font-normal text-sm">Hidden in the middle of text</p>
      </div>

      {score.map((item, index) => {
        return (
          <div className=" w-[466px] flex  py-4 border-b-2  justify-center items-center">
            <div className="flex flex-1">
              <p
                className="font-medium text-base text-gray-900 flex items-center "
                key={index}
              >
                {item.playerName}
              </p>
            </div>
            <div className="flex flex-2 justify-end gap-8 items-center border-2 bg-gray-100 rounded-full">
              <img
                onClick={() => decrementScore(index)}
                src="/iconbutton.png"
              />
              <div
                className="text-center font-medium text-base text-gray-900"
                key={index}
              >
                {item.playerScore}
              </div>

              <img
                onClick={() => incrementScore(index)}
                src="/plusIconButton .png"
              />
            </div>
          </div>
        );
      })}

      <div className=" flex justify-end w-[466px]">
        <button className=" bg-green-500 py-4 px-8 border-2 rounded-3xl text-gray-50 font-medium text-center  text-base">
          Reset
        </button>
      </div>
    </div>
  );
};
export default ScorePage;
