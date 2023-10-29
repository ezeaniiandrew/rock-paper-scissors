import { useGame } from "../../context";
import { actionTypes } from "../../reducers/gameReducer";
import Button from "../Button/Button";
import styles from "./result-display.module.css";

function ResultDisplay() {
  const { dispatch, winner } = useGame();
  let text = "Draw";

  if (winner === "player") {
    text = "You Win";
  }

  if (winner === "computer") {
    text = "You Lose";
  }

  return (
    <div className={styles.box}>
      <p>{text}</p>
      <Button
        onClick={() => dispatch({ type: actionTypes.PLAY_ANOTHER_ROUND })}
      >
        Play Again
      </Button>
    </div>
  );
}

export default ResultDisplay;
