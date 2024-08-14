import React, { Component } from "react";
import "./App.css";
import { FaHandRock, FaHandScissors, FaHandPaper } from "react-icons/fa";
import BoxClass from "./components/BoxClass";

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

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      userSelect: null,
      computerSelect: null,
    };
  }
  play = (userChoice) => {
    const computerChoice = this.randomChoice();
    this.setState({
      userSelect: userChoice,
      computerSelect: computerChoice,
      result: this.judgement(userChoice, computerChoice),
    });
  };

  randomChoice = () => {
    const options = Object.keys(data);
    const choice = options[Math.floor(Math.random() * options.length)];
    return data[choice];
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) return null;
    if (user.name === "rock" && computer.name === "scissors") return true;
    if (user.name === "scissors" && computer.name === "paper") return true;
    if (user.name === "paper" && computer.name === "rock") return true;
    return false;
  };
  
  render() {
    const { result, userSelect, computerSelect } = this.state;
    return (
      <div className="App text-center w-4/5 m-auto">
        <div className="board flex">
          <BoxClass
            title="You"
            item={userSelect}
            result={result}
          />
          <BoxClass
            title="Computer"
            item={computerSelect}
            result={result}
          />
        </div>
        <div className="control m-2">
          <button className="p-2 text-5xl" onClick={() => this.play(data.rock)}>
            <FaHandRock />
          </button>
          <button className="p-2 text-5xl" onClick={() => this.play(data.scissors)}>
            <FaHandScissors />
          </button>
          <button className="p-2 text-5xl" onClick={() => this.play(data.paper)}>
            <FaHandPaper />
          </button>
        </div>
        <div className="text-5xl m-2">
          {result === null ? "TIE" : result === true ? "WIN" : "LOSE"}
        </div>
      </div>
    );
  }
}
