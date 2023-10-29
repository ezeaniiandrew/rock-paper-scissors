import { useGame } from "../../context";
import styles from "./score-board.module.css";

function ScoreBoard() {
  const { score, gameMode } = useGame();

  return (
    <div className={styles.header}>
      <h1 className={styles.heading}>
        {gameMode === "classic"
          ? "rock paper scissors"
          : "rock paper scissors lizard spock"}
      </h1>

      <div className={styles.score}>
        <span>Score</span>
        <p>{score}</p>
      </div>
    </div>
  );
}

export default ScoreBoard;
