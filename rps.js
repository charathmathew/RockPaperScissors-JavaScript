/* Author: Mathew Charath, Date: 30 Dec 2018 */

/* move the buttons down by 300px */
document.getElementById("rock").style.margin = "300px 0px 0px 0px";

/* sets initial scores to 0 */
var playerScore = 0
var compScore = 0

roundResult.textContent = 'Select A Move'

/* Adds the click event handling function to all the buttons */
const buttons = document.querySelectorAll('button')
buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    let playerSelection = e.target.id
    game(playerSelection)
  })
})

/*******************************************************************************
 * Driver function that plays 5 rounds of Rock Paper Scissors
 *******************************************************************************/
function game(playerMove) {

  //let playerScore = 0
  //let compScore = 0
  let roundNum = 0
  let playerSelection = playerMove
  let computerSelection
  let msg

  computerSelection = computerPlay()
  switch (playRound(playerSelection, computerSelection)) {
    case 0:
      msg = 'It\'s a Tie!'
      roundResult.textContent = msg
      break
    case 1:
      playerScore = playerScore + 1
      msg = 'You Win! ' + capFirstLtr(playerSelection) + ' beats ' +
        capFirstLtr(computerSelection)
      roundResult.textContent = msg
      break;
    case 2:
      compScore = compScore + 1
      msg = 'You Lose! ' + capFirstLtr(computerSelection) + ' beats ' +
        capFirstLtr(playerSelection)
      roundResult.textContent = msg
      break
  }

  pScore.textContent = 'You: ' + playerScore
  comScore.textContent = 'CPU: ' + compScore
}

/*******************************************************************************
 * Returns the computers selection
 * Rock, Paper or Scissors
 *******************************************************************************/
function computerPlay() {
  let num = Math.floor(Math.random() * 3);

  switch (num) {
    case 0:
      return 'rock'
      break
    case 1:
      return 'paper'
      break
    case 2:
      return 'scissors'
      break
  }
}

/*******************************************************************************
 * Given the player selection and computer selection,
 * this method determines who wins the round
 * 0 - tie
 * 1 - player
 * 2 - cpu win
 *******************************************************************************/
function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'rock' && computerSelection == 'rock') {
    return 0
  } else if (playerSelection == 'paper' && computerSelection == 'paper') {
    return 0
  } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
    return 0
  } else if (playerSelection == 'rock' && computerSelection == 'paper') {
    return 2
  } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return 1
  } else if (playerSelection == 'paper' && computerSelection == 'rock') {
    return 1
  } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
    return 2
  } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
    return 2
  } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    return 1
  }
}

/*******************************************************************************
 * returns the passed string after capitalizing the first character
 *******************************************************************************/
function capFirstLtr(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}