"use strict";

import{TSpriteButton, TSpriteNumber } from "libSprite"
import{SheetData, newGame, GameProps, EGameStatus} from "./game.mjs"

/* Use this file to create the menu for the snake game. */
export class TMenu {
#spPlayBtn
#spPauseBtn
#spScoreD1
#mann

#spScoreD2
#spBaitValue
 #x = 0;                // most right diget 1
#y = 0; // most left diget 10
constructor(aSpcvs, aSPI) {
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.Play, 350, 220)
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this))
    this.#spPauseBtn = new TSpriteButton(aSpcvs, aSPI.Resume, 350, 220)
    this.#spPauseBtn.addEventListener("click", this.spPauseBtnClick.bind(this))
    this.#spPauseBtn.hidden = true

    this.#spScoreD1 = new TSpriteNumber(aSpcvs, aSPI.Number, 10, 0)
    this.#spScoreD1.visible = false
    this.#spScoreD1.alpha = 0.67
    this.#spScoreD2 = new TSpriteNumber(aSpcvs, aSPI.Number, 100, 0)
    this.#spScoreD2.visible = false
    this.#spScoreD2.alpha = 0.67

    this.#spBaitValue = new TSpriteNumber(aSpcvs, aSPI.Number, 10, 90)
    this.#spBaitValue.visible = false
} 

    draw(){
        this.#spPlayBtn.draw()
        this.#spPauseBtn.draw()
        this.#spScoreD1.draw()
        this.#spScoreD2.draw()
        this.#spBaitValue.draw()
    }

    spPlayBtnClick() {        
        this.#spPlayBtn.hidden = true
         this.#spScoreD1.visible = true
         this.#spScoreD2.visible = true
         this.#spBaitValue.visible = true
        newGame()
    }

    spPauseBtnClick() {
        if (GameProps.gameStatus == EGameStatus.Playing) {
            this.#spPauseBtn.hidden = false
            GameProps.gameStatus = EGameStatus.Pause
        } else if (GameProps.gameStatus == EGameStatus.Pause) {
            this.#spPauseBtn.hidden = true
            GameProps.gameStatus = EGameStatus.Playing
        }
        
    }

    Scorepluss(xValue, yValue){
        this.#x = this.#x + xValue
        this.#spScoreD2.value = this.#x
        this.#spScoreD1.value = this.#y

        if (this.#x == 9){
            console.log("The score is 10")
            this.#x = -1;
             this.#y = this.#y + yValue
        }
    }

baitValue(bValue){
this.#spBaitValue.value = bValue
}
}









