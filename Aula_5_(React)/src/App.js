import { useState } from "react";
import "./App.css";
import Player from "./Player";
import Dice from "./Dice";
import Controls from "./Controls";

export default function App() {
  const [scores, setScores] = useState([0, 0]);
  const [currentScore, setCurrentScore] = useState(0);
  const [activePlayer, setActivePlayer] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [dice, setDice] = useState(1);

  const onRoll = function () {
    if (playing) {
      const diceRoll = Math.trunc(Math.random() * 6) + 1;
      setDice(diceRoll);

      if (diceRoll !== 1) {
        setCurrentScore((prev) => prev + diceRoll);
      } else {
        switchPlayer();
      }
    }
  };

  const switchPlayer = () => {
    setCurrentScore(0);
    setActivePlayer((prev) => (prev === 0 ? 1 : 0));
  };

  const onHold = function () {
    if (playing) {
      const newScores = [...scores];
      newScores[activePlayer] += currentScore;
      setScores(newScores);

      if (newScores[activePlayer] >= 100) {
        setPlaying(false);
        setDice(null);
      } else {
        switchPlayer();
      }
    }
  };

  const onNewGame = function () {
    setScores([0, 0]);
    setCurrentScore(0);
    setActivePlayer(0);
    setPlaying(true);
    setDice(null);
  };

  return (
    <main>
      <Player
        playerNumber={0}
        score={scores[0]}
        currentScore={activePlayer === 0 ? currentScore : 0}
        isActive={activePlayer === 0}
        isWinner={!playing && scores[0] >= 100}
      />
      <Player
        playerNumber={1}
        score={scores[1]}
        currentScore={activePlayer === 1 ? currentScore : 0}
        isActive={activePlayer === 1}
        isWinner={!playing && scores[1] >= 100}
      />

      <Dice diceValue={dice} />
      <Controls onHold={onHold} onNewGame={onNewGame} onRoll={onRoll} />
    </main>
  );
}
