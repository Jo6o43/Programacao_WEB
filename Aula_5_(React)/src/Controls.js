const Controls = ({ onRoll, onHold, onNewGame }) => {
  return (
    <>
      <button onClick={onNewGame} className="btn btn--new">
        🔄 New Game
      </button>
      <button onClick={onRoll} className="btn btn--roll">
        🎲 Roll Dice
      </button>
      <button onClick={onHold} className="btn btn--hold">
        📥 Hold
      </button>
    </>
  );
};

export default Controls;
