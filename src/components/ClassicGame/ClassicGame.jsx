import { useGame } from "../../context";
import { gameOptions } from "../../data";
import { actionTypes } from "../../reducers/gameReducer";
import PlayerChoice from "../PlayerChoice/PlayerChoice";
import styles from "./classic-game.module.css";

function ClassicGame() {
  const { dispatch } = useGame();

  return (
    <div className={styles.options_box}>
      {gameOptions.classic.map((option) => (
        <PlayerChoice
          key={option.pos}
          option={option}
          onClick={() => {
            dispatch({
              type: actionTypes.SET_PLAYER_SELECTION,
              payload: { ...option, pos: null },
            });
            dispatch({
              type: actionTypes.CHANGE_SCREEN,
              payload: "gamePlay",
            });
          }}
        />
      ))}
    </div>
  );
}

export default ClassicGame;
