import MinusIcon from "./MinusIcon";
import PlusIcon from "./PlusIcon";

const ScoreComponent = (props) => {
  const { text } = props;
  return (
    <div>
      <p>{text}</p>
      <button className="w-20 h-10 bg-gray-600 border rounded-sm">
        <MinusIcon />
        <PlusIcon />
      </button>
    </div>
  );
};
export default ScoreComponent;
