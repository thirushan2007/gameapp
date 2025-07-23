import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandBackFist,
  faHand,
  faHandScissors,
} from "@fortawesome/free-solid-svg-icons";

import rock from "../assets/rock.png";
import paper from "../assets/paper.png";
import scissor from "../assets/scissor.png";
import "./home.css";

const HomePage = () => {
  const [compchoice, setcompchoice] = useState("");
  const [userchoice, setuserchoice] = useState("");
  const [result, setResult] = useState("");
  const [userScore, setuserScore] = useState(0);
  const [comscore, setcomScore] = useState(0);
  const [overresult, setoverresult] = useState("");

  const playgame = (userChoice: string) => {
    const choices = ["rock", "paper", "scissor"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    setcompchoice(computerChoice);
    setuserchoice(userChoice);

    if (userChoice === computerChoice) {
      setResult("It's a draw!");
    } else if (
      (userChoice === "rock" && computerChoice === "scissor") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissor" && computerChoice === "paper")
    ) {
      setResult("You win!");
      setuserScore(userScore + 1);
    } else {
      setResult("You lose!");
      setcomScore(comscore + 1);
    }
  };

  const reset = () => {
    setcomScore(0);
    setuserScore(0);
    setuserchoice("");
    setcompchoice("");
  };

  if (userScore + comscore > 5) {
    reset();
    if (userScore > comscore) {
      setoverresult("User Won");
    } else {
      setoverresult("Computer Won");
    }
  }

  const output = (choice: any) => {
    if (choice === "rock") return rock;
    if (choice === "paper") return paper;
    if (choice === "scissor") return scissor;
    return "";
  };

  return (
    <div className="whole-body">
      <section>
        <div className="body-container">
          <div className="div-container">
            <h2 className="option">PICK AN OPTION</h2>
            <div>
              <div className="body-box">
                <button
                  className="button-rock"
                  onClick={() => playgame("rock")}
                >
                  <FontAwesomeIcon icon={faHandBackFist} className="rock" />
                  <label>Rock</label>
                </button>
                <button
                  className="button-paper"
                  onClick={() => playgame("paper")}
                >
                  <FontAwesomeIcon icon={faHand} className="paper" />
                  <label>Paper</label>
                </button>
                <button
                  className="button-scissor"
                  onClick={() => playgame("scissor")}
                >
                  <FontAwesomeIcon icon={faHandScissors} className="scissor" />
                  <label>Scissor</label>
                </button>
              </div>
              <div className="result-box">
                <h2>RESULT:</h2>
                <div className="choice-row">
                  <div>
                    <h4>Your Choice:</h4>
                    {userchoice && (
                      <img src={output(userchoice)} alt={userchoice} />
                    )}
                  </div>
                  <h1>X</h1>
                  <div>
                    <h4>Computer Choice:</h4>
                    {compchoice && (
                      <img src={output(compchoice)} alt={compchoice} />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <h2 className="result">{result}</h2>
            <div className="score">
              <h3>Score</h3>
              <div>
                <p>You: {userScore}</p>
                <p>Computer: {comscore}</p>
              </div>
            </div>
            <div className="overallresult">{overresult}</div>
            <button className="reset-button" onClick={reset}>
              RESET
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
