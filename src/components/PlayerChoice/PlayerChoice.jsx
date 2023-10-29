import Button from "../Button/Button";
import styles from "./player-choice.module.css";

function PlayerChoice({ option, onClick, roundWinner }) {
  if (Object.entries(option).length === 0) {
    return (
      <>
        <div className={styles.outerCircleNone}>
          <div className={styles.none}></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="#CCCCCC"
              strokeWidth="21"
              className={styles.animated__circle}
            ></circle>
          </svg>
        </div>
      </>
    );
  }

  const { img, pos, type } = option;
  const classNames = [styles.outerCircle, styles[type], styles[pos]];

  return (
    <>
      <Button className={classNames.join(" ")} onClick={onClick}>
        <div className={styles.round}>
          <img src={img} alt="" />
        </div>
        {roundWinner && <div className={styles.winner__circle}></div>}
      </Button>
    </>
  );
}

export default PlayerChoice;
