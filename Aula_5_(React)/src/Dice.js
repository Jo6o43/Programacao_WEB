const Dice = ({ diceValue }) => {
  return (
    diceValue && (
      <img
        src={`./dice-${diceValue}.png`}
        alt={`Playing dice showing ${diceValue}`}
        className="dice"
      />
    )
  );
};

export default Dice;
