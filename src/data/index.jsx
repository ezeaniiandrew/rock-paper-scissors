import paper from "../assets/images/icon-paper.svg";
import scissors from "../assets/images/icon-scissors.svg";
import rock from "../assets/images/icon-rock.svg";
import lizard from "../assets/images/icon-lizard.svg";
import spock from "../assets/images/icon-spock.svg";

const gameOptions = {
  classic: [
    {
      img: paper,
      pos: "left",
      type: "paper",
    },
    {
      img: scissors,
      pos: "right",
      type: "scissors",
    },
    {
      img: rock,
      pos: "bottom",
      type: "rock",
    },
  ],
  bonus: [
    {
      img: scissors,
      pos: "one",
      type: "scissors",
    },
    {
      img: paper,
      pos: "two",
      type: "paper",
    },
    {
      img: rock,
      pos: "three",
      type: "rock",
    },
    {
      img: lizard,
      pos: "four",
      type: "lizard",
    },
    {
      img: spock,
      pos: "five",
      type: "spock",
    },
  ],
};

const defaultGameData = {
  playerSelection: {},
  computerSelection: {},
  gameMode: "classic",
  currentScreen: "optionSelection",
  isModalOpen: false,
  winner: "",
  score: 0,
};

export { gameOptions, defaultGameData };
