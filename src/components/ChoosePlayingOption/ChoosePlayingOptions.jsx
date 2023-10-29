import { createPortal } from "react-dom";
import { useGame } from "../../context";
import { actionTypes } from "../../reducers/gameReducer";
import BonusGame from "../BonusGame/BonusGame";
import ClassicGame from "../ClassicGame/ClassicGame";
import Modal from "../Modal/Modal";
import styles from "./choose-playing-option.module.css";
import Button from "../Button/Button";
import { useEffect } from "react";

function ChoosePlayingOption() {
  const { gameMode, isModalOpen, dispatch } = useGame();

  const handleClick = (mode) => {
    if (mode === "classic") {
      dispatch({ type: actionTypes.CHANGE_GAME_MODE, payload: "bonus" });
    } else {
      dispatch({ type: actionTypes.CHANGE_GAME_MODE, payload: "classic" });
    }
  };

  useEffect(() => {
    const savedScore = JSON.parse(localStorage.getItem("score")) || 0;

    dispatch({ type: actionTypes.SET_SCORE, payload: savedScore });
  }, []);

  return (
    <div className={styles.container}>
      {gameMode === "classic" ? <ClassicGame /> : <BonusGame />}
      {isModalOpen &&
        createPortal(<Modal />, document.getElementById("portal-root"))}
      <div className={styles.btn_box}>
        <Button onClick={() => handleClick(gameMode)}>
          {gameMode === "classic" ? "Bonus" : "Classic"}
        </Button>
        <Button onClick={() => dispatch({ type: actionTypes.SET_SHOW_RULES })}>
          Rules
        </Button>
      </div>
    </div>
  );
}

export default ChoosePlayingOption;
