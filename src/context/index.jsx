import { useContext, createContext } from "react";

const gameContext = createContext();

const useGame = () => useContext(gameContext);

export { gameContext, useGame };
