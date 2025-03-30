function Cell(props) {
  const {
    id,
    value,
    isBomb,
    isRevealed,
    isFlagged,
    onLeftClick,
    onRightClick,
    isGameOver,
  } = props;

  return (
    <div
      id={id}
      className={`cell${isRevealed ? "-revealed" : ""}`}
      onClick={onLeftClick}
      onContextMenu={onRightClick}
    >
      {isFlagged
        ? "🚩"
        : isBomb && isGameOver
        ? "💣"
        : isRevealed
        ? value !== 0
          ? value
          : ""
        : ""}
    </div>
  );
}

export default Cell;
