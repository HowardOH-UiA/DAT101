"use strict";
//-----------------------------------------------------------------------------------------
//----------- Import modules, mjs files  ---------------------------------------------------
//-----------------------------------------------------------------------------------------
import { TSprite } from "libSprite";
import { TPoint } from "lib2d";
import { GameProps, EGameStatus, SheetData, menu } from "./game.mjs";
import { TBoardCell, EBoardCellInfoType } from "./gameBoard.js";

//------------------------------------------------------------------------------------------
//----------- Classes ---------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

export class TBait extends TSprite {
  #boardCell = null;
  //Current value of bait and timeout-value
  #baitValue = null
  #baitTimeout = null;
  
  constructor(aSpriteCanvas) {
    const pos = new TPoint(0, 0);
    super(aSpriteCanvas, SheetData.Bait, pos.x, pos.y);
    this.#boardCell = new TBoardCell(0, 0);
  
    this.update();
  } // End of constructor

  update() {
    // Move the bait to a random empty cell on the game board
    do{
      this.#boardCell.col = Math.floor(Math.random() * GameProps.gameBoard.cols);
      this.#boardCell.row = Math.floor(Math.random() * GameProps.gameBoard.rows);
    }while(GameProps.gameBoard.getCell(this.#boardCell.row, this.#boardCell.col).infoType !== EBoardCellInfoType.Empty);
    this.x = this.#boardCell.col * this.spi.width;
    this.y = this.#boardCell.row * this.spi.height;
    // Update the bait cell info type to Bait
    GameProps.gameBoard.getCell(this.#boardCell.row, this.#boardCell.col).infoType = EBoardCellInfoType.Bait
  } // End of update

  startBaitTimer() {//Starts the countdown of the value of the bait
    clearTimeout(this.#baitTimeout);
    this.#baitValue = 4; //Default value
    menu.spBaitValueIncrementor(this.#baitValue) //Calls the menu method that showcases the current value, with the value as a parameter
    console.log("Value of bait: " + this.#baitValue )
    this.#baitTimeout = setTimeout(() => {this.updateBaitTimer(); }, 3000); //3 seconds per point, then calls the update method to lower the value.
  } //startBaitTimer()
  
  updateBaitTimer() {//
    if (GameProps.gameStatus == EGameStatus.Playing) {
        if (this.#baitValue > 1) {//The bait is always at least 1 point.
            this.#baitValue--;
            menu.spBaitValueIncrementor(this.#baitValue) //Calls the menu method that showcases the current value, with the value as a parameter
            console.log("Value of bait: " + this.#baitValue )
            this.#baitTimeout = setTimeout(() => {this.updateBaitTimer(); }, 3000); //3 seconds per point
        } 
      }
    } //updateBaitTimer()

  pointCalc(){
    GameProps.gameScore = this.#baitValue
    menu.scoreIncrementor(GameProps.gameScore) //Picks up and sends the value of the bait as new point to be added to the score 
    this.startBaitTimer()//Starts the bait timer
  } //pointCalc()
}//Class TBait