import { useEffect } from "react";
import { useGame } from "../../context";
import PlayerChoice from "../PlayerChoice/PlayerChoice";
import ResultDisplay from "../ResultDisplay/ResultDisplay";
import styles from "./game-room.module.css";
import { getComputerChoice, getRoundWinner } from "../../utils";
import { actionTypes } from "../../reducers/gameReducer";

function GameRoom() {
  const { playerSelection, dispatch, computerSelection, winner, gameMode } =
    useGame();

  useEffect(() => {
    const delay = 2000;

    const timeoutId = setTimeout(() => {
      const selectedOption = getComputerChoice(gameMode);

      dispatch({
        type: actionTypes.SET_COMPUTER_SELECTION,
        payload: selectedOption,
      });

      const winner = getRoundWinner(playerSelection.type, selectedOption.type);

      dispatch({
        type: actionTypes.SET_WINNER,
        payload: winner,
      });

      dispatch({ type: actionTypes.SET_SCORE, payload: winner });
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch, playerSelection.type, gameMode]);

  return (
    <div className={styles.game__room}>
      <div className={styles.player__grid}>
        <p className={styles.md}>You picked</p>
        <PlayerChoice
          option={playerSelection}
          roundWinner={winner === "player" ? winner : null}
        />
      </div>

      <div className={styles.grid__2}>
        <ResultDisplay />
      </div>

      <div className={styles.player__grid}>
        {Object.entries(computerSelection).length !== 0 && (
          <p className={styles.md}>The house Picked</p>
        )}

        <PlayerChoice
          option={computerSelection}
          roundWinner={winner === "computer" ? winner : null}
        />
      </div>
    </div>
  );
}

export default GameRoom;
