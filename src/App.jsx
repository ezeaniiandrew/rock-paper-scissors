import ChoosePlayingOption from "./components/ChoosePlayingOption/ChoosePlayingOptions";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import GameRoom from "./components/GameRoom/GameRoom.jsx";
import { useGame } from "./context";

function App() {
  const { currentScreen } = useGame();

  return (
    <>
      <ScoreBoard />
      {currentScreen === "gamePlay" ? <GameRoom /> : <ChoosePlayingOption />}
    </>
  );
}

export default App;
