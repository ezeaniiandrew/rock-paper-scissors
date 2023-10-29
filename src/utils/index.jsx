import { BONUS_MAX_VALUE, CLASSIC_MAX_VALUE } from "../constants/constants";
import { gameOptions } from "../data";

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getComputerChoice = (mode) => {
  if (mode === "bonus") {
    const { img, type } = gameOptions.bonus[getRandomNumber(BONUS_MAX_VALUE)];

    return { img, type };
  }

  const { img, type } = gameOptions.classic[getRandomNumber(CLASSIC_MAX_VALUE)];

  return { img, type };
};

const getRoundWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return "draw";
  }

  const winningCombinations = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["rock", "scissors"],
  };

  if (winningCombinations[playerChoice].includes(computerChoice)) {
    return "player";
  }

  return "computer";
};

export { getComputerChoice, getRoundWinner };
