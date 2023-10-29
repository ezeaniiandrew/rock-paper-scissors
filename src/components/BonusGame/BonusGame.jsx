import { useGame } from "../../context";
import { gameOptions } from "../../data";
import { actionTypes } from "../../reducers/gameReducer";
import PlayerChoice from "../PlayerChoice/PlayerChoice";
import styles from "./bonus-game.module.css";

function BonusGame() {
  const { dispatch } = useGame();

  return (
    <div className={styles.options_box}>
      {gameOptions.bonus.map((option) => (
        <PlayerChoice
          key={option.type}
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

export default BonusGame;
