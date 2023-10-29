import styles from "./modal.module.css";
import rulesImg from "../../assets/images/image-rules.svg";
import bonusRulesImg from "../../assets/images/image-rules-bonus.svg";
import { actionTypes } from "../../reducers/gameReducer";
import { useGame } from "../../context";
import Button from "../Button/Button";

function Modal() {
  const { gameMode, dispatch } = useGame();

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p>Rules</p>
        <img src={gameMode === "classic" ? rulesImg : bonusRulesImg} alt="" />
        <Button onClick={() => dispatch({ type: actionTypes.SET_SHOW_RULES })}>
          &times;
        </Button>
      </div>
    </div>
  );
}

export default Modal;
