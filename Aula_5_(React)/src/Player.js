const Player = ({ playerNumber, score, currentScore, isActive, isWinner }) => {
  return (
    <section
      className={`player player--${playerNumber} ${
        isActive ? "player--active" : ""
      } ${isWinner ? "player--winner" : ""}`}
    >
      <h2 className="name" id={`name--${playerNumber}`}>
        Player {playerNumber + 1}
      </h2>
      <p className="score" id={`score--${playerNumber}`}>
        {score}
      </p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score" id={`current--${playerNumber}`}>
          {currentScore}
        </p>
      </div>
    </section>
  );
};

export default Player;
