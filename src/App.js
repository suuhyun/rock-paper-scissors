import { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import { FaHandRock, FaHandScissors, FaHandPaper } from "react-icons/fa";

const data = {
  rock: {
    name: "rock",
    img: "https://atlas-content-cdn.pixelsquid.com/stock-images/rock-stone-AvXzl49-600.jpg",
  },
  scissors: {
    name: "scissors",
    img: "https://static.vecteezy.com/system/resources/previews/010/308/110/non_2x/scissors-icon-in-flat-style-isolated-on-white-background-illustration-vector.jpg",
  },
  paper: {
    name: "paper",
    img: "https://media.istockphoto.com/id/183411212/photo/pile-of-paper.webp?b=1&s=170667a&w=0&k=20&c=6L16ia6eWfkyfkL5adeWzK2NAHR2FNEXOl7SDj-3AVc=",
  },
};
function App() {
  const [result, setResult] = useState(null);
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);

  const play = (userChoice) => {
    const computerChoice = randomChoice();
    setUserSelect(userChoice);
    setComputerSelect(computerChoice);
    setResult(judgement(userChoice, computerChoice));
  };

  const randomChoice = () => {
    const options = Object.keys(data);
    const choice = options[Math.floor(Math.random() * options.length)];
    return data[choice];
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) return null;
    if (user.name === "rock" && computer.name === "scissors") return true;
    if (user.name === "scissors" && computer.name === "paper") return true;
    if (user.name === "paper" && computer.name === "rock") return true;
    return false;
  };

  return (
    <div className="App text-center w-4/5 m-auto">
      <div className="board flex">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="control m-2">
        <button className="p-2 text-5xl" onClick={() => play(data.rock)}>
          <FaHandRock />
        </button>
        <button className="p-2 text-5xl" onClick={() => play(data.scissors)}>
          <FaHandScissors />
        </button>
        <button className="p-2 text-5xl" onClick={() => play(data.paper)}>
          <FaHandPaper />
        </button>
      </div>
      <div className="text-5xl m-2">
        {result === null ? "TIE" : result === true ? "WIN" : "LOSE"}
      </div>
    </div>
  );
}

export default App;
