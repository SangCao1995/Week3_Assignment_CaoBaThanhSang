import {CHOICES} from './constant';

const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

let result;
const getRoundOutcome = (userChoice, computerChoice) => {
  

  if (userChoice === 'Rock') {
    result = computerChoice === 'Scissors' ? 'Victory!' : 'Defeat!';
  }
  if (userChoice === 'Paper') {
    result = computerChoice === 'Rock' ? 'Victory!' : 'Defeat!';
  }
  if (userChoice === 'Scissors') {
    result = computerChoice === 'Paper' ? 'Victory!' : 'Defeat!';
  }

  if (userChoice === computerChoice) result = 'Tie game!';
  return result;
};
let count = 0;
var getCount = () => {
    count++;
    return count;
};
let countWin = 0;
let countLose = 0;
let countTie = 0;
var getCountWinLose = () => {
    if(result === 'Victory!') {
        countWin++;
        return countWin;
    }
    else if(result === 'Defeat!') {
        countLose++;
        return countLose;
    }
    else if(result === 'Tie game!') {
        countTie++;
        return countTie;
    }
};
export {randomComputerChoice, getRoundOutcome, getCount, getCountWinLose};