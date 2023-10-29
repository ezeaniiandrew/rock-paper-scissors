import { defaultGameData } from "../data";

const actionTypes = {
  CHANGE_SCREEN: "CHANGE_SCREEN",
  CHANGE_OPTION: "CHANGE_OPTION",
  CHANGE_GAME_MODE: "CHANGE_GAME_MODE",
  SET_PLAYER_SELECTION: "SET_USER_SELECTION",
  SET_COMPUTER_SELECTION: "SET_COMPUTER_SELECTION",
  SET_SCORE: "SET_SCORE",
  SET_WINNER: "SET_WINNER",
  PLAY_ANOTHER_ROUND: "PLAY_ANOTHER_ROUND",
  SET_SHOW_RULES: "SET_SHOW_RULES",
};

const gameReducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.PLAY_ANOTHER_ROUND:
      return {
        ...defaultGameData,
        score: state.score,
        gameMode: state.gameMode,
      };

    case actionTypes.SET_SCORE:
      if (payload === "player") {
        const newScore = state.score + 1;
        localStorage.setItem("score", JSON.stringify(newScore));
        return { ...state, score: newScore };
      } else if (payload === "computer") {
        const newScore = state.score <= 0 ? 0 : state.score - 1;
        localStorage.setItem("score", JSON.stringify(newScore));
        return { ...state, score: newScore };
      } else if (payload === "draw") {
        return state;
      }

      return { ...state, score: payload };

    case actionTypes.CHANGE_GAME_MODE:
      return { ...state, gameMode: payload };

    case actionTypes.CHANGE_SCREEN:
      return { ...state, currentScreen: payload };

    case actionTypes.SET_PLAYER_SELECTION:
      return { ...state, playerSelection: payload };

    case actionTypes.SET_COMPUTER_SELECTION:
      return { ...state, computerSelection: payload };

    case actionTypes.SET_WINNER:
      return { ...state, winner: payload };

    case actionTypes.SET_SHOW_RULES:
      return { ...state, isModalOpen: !state.isModalOpen };

    default:
      throw new Error("Not a valid action");
  }
};

export { gameReducer, actionTypes };
