import { gameContext } from ".";
import { useReducer } from "react";
import { gameReducer } from "../reducers/gameReducer";
import { defaultGameData } from "../data";

const { Provider } = gameContext;

function GameProvider({ children }) {
  const [
    {
      playerSelection,
      computerSelection,
      gameMode,
      currentScreen,
      winner,
      score,
      isModalOpen,
    },
    dispatch,
  ] = useReducer(gameReducer, defaultGameData);

  const value = {
    playerSelection,
    computerSelection,
    gameMode,
    currentScreen,
    winner,
    score,
    isModalOpen,
    dispatch,
  };
  return <Provider value={value}>{children}</Provider>;
}

export default GameProvider;
