"use strict";

//-----------------------------------------------------------------------------------------
//----------- Import modules, mjs files  ---------------------------------------------------
//-----------------------------------------------------------------------------------------
import { TSpriteCanvas } from "libSprite";
import { TGameBoard, GameBoardSize, TBoardCell } from "./gameBoard.js";
import { TSnake, EDirection} from "./snake.js";
import { TBait } from "./bait.js";
import { TMenu } from "./menu.js"

//-----------------------------------------------------------------------------------------
//----------- variables and object --------------------------------------------------------
//-----------------------------------------------------------------------------------------
const cvs = document.getElementById("cvs");
const spcvs = new TSpriteCanvas(cvs);
let gameSpeed = 4; // Game speed multiplier;
let hndUpdateGame = null;
export const EGameStatus = { Idle: 0, Playing: 1, Pause: 2, GameOver: 3 };

export const SheetData = {
  Head:     { x:   0, y:   0, width:  38, height:  38, count:  4 },
  Body:     { x:   0, y:  38, width:  38, height:  38, count:  6 },
  Tail:     { x:   0, y:  76, width:  38, height:  38, count:  4 },
  Bait:     { x:   0, y: 114, width:  38, height:  38, count:  1 },
  Play:     { x:   0, y: 155, width: 202, height: 202, count: 10 },
  GameOver: { x:   0, y: 647, width: 856, height: 580, count:  1 },
  Home:     { x:  65, y: 995, width: 169, height: 167, count:  1 },
  Retry:    { x: 614, y: 995, width: 169, height: 167, count:  1 },
  Resume:   { x:   0, y: 357, width: 202, height: 202, count: 10 },
  Number:   { x:   0, y: 560, width:  81, height:  86, count: 10 },
};

export const GameProps = {
  gameBoard: null,
  gameStatus: EGameStatus.Idle,
  snake: null,
  bait: null,
  gameScore: 0
};

export const menu = new TMenu(spcvs, SheetData)

//------------------------------------------------------------------------------------------
//----------- Exported functions -----------------------------------------------------------
//------------------------------------------------------------------------------------------

export function newGame() {
  GameProps.gameScore = 0 //Resets score
  GameProps.gameStatus =  EGameStatus.Playing

  GameProps.gameBoard = new TGameBoard();
  GameProps.snake = new TSnake(spcvs, new TBoardCell(5, 5)); // Initialize snake with a starting position
  GameProps.bait = new TBait(spcvs); // Initialize bait with a starting position
  gameSpeed = 4; // Reset game speed
  GameProps.bait.pointCalc() //Is called to start the bait value countdown.
  
}

export function baitIsEaten() {
  GameProps.bait.update() //Creates a new bait somewhere else after eaten.
  GameProps.snake.grow() // Logic to increase the snake size and score when bait is eaten 
  increaseGameSpeed(); // Increase game speed
  GameProps.bait.pointCalc() //Restart bait value countdown and sendt points to menu.

}


//------------------------------------------------------------------------------------------
//----------- functions -------------------------------------------------------------------
//------------------------------------------------------------------------------------------

function loadGame() {
  cvs.width = GameBoardSize.Cols * SheetData.Head.width;
  cvs.height = GameBoardSize.Rows * SheetData.Head.height;

  GameProps.gameStatus = EGameStatus.Idle; // change game status to Idle

  requestAnimationFrame(drawGame);
  console.log("Game canvas is rendering!");
  hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed); // Update game every 1000ms / gameSpeed
  console.log("Game canvas is updating!");
}

export function increaseGameSpeed() {
    if (gameSpeed > 10) {// Speed is at max.
      console.log("Speed is at MAX: " +  gameSpeed) 
    } else { //Speed gets bumped up
      gameSpeed += 0.25; 
      console.log("Current speed: " + gameSpeed)
    }
    clearInterval(hndUpdateGame);
    hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed); // Update game every 1000ms / gameSpeed when after increased values
}

function drawGame() {
  // Clear the canvas
  spcvs.clearCanvas();
  switch (GameProps.gameStatus) {
    case EGameStatus.Playing:
    case EGameStatus.Pause:
      GameProps.bait.draw();
      GameProps.snake.draw();
      break;
  }
  menu.spPlayBtnAnimate() //Starts the play button animation
  // Request the next frame
  requestAnimationFrame(drawGame);

  menu.draw(); //Draws the menu
}

function updateGame() {
  switch (GameProps.gameStatus) {
    case EGameStatus.Playing:
      if (!GameProps.snake.update()) {
        GameProps.gameStatus = EGameStatus.GameOver;
        console.log("Game over!");
  
        menu.showEndScreen() //Calls for the game-over screen to be shown.
      }
      break;
  }

}




//-----------------------------------------------------------------------------------------
//----------- Event handlers --------------------------------------------------------------
//-----------------------------------------------------------------------------------------

function onKeyDown(event) {
  switch (event.key) {
    case "ArrowUp":
      GameProps.snake.setDirection(EDirection.Up);
      break;
    case "ArrowDown":
      GameProps.snake.setDirection(EDirection.Down);
      break;
    case "ArrowLeft":
      GameProps.snake.setDirection(EDirection.Left);
      break;
    case "ArrowRight":
      GameProps.snake.setDirection(EDirection.Right);
      break;
    case " ":
      console.log("Space key pressed!");
      menu.spPauseBtnClick()
      break;
    default:
      console.log(`Key pressed: "${event.key}"`);
  }
}
//-----------------------------------------------------------------------------------------
//----------- main -----------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

spcvs.loadSpriteImage("./Media/spriteSheet.png", loadGame);
document.addEventListener("keydown", onKeyDown);