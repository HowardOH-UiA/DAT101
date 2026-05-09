"use strict";
import{TSpriteButton, TSpriteNumber } from "libSprite"
import{SheetData, newGame, GameProps, EGameStatus} from "./game.mjs"

/* Use this file to create the menu for the snake game. */
export class TMenu {
//Play and pause sprites + timer for the pulsing animation in the play button
#spPlayBtn
#playAnimTimer = 0
#spPauseBtn

//Score related sprites and main score value
#score = 0
#spScoreD1
#spScoreD2
#spBaitValue = null

//Endscreen sprites
#spEndScreen
#spEndScoreD1
#spEndScoreD2
#spHomeBtn
#spRetryBtn

constructor(aSpcvs, aSPI) { //Creates the default values of the menu items, in regards to visibility, opacity and location.
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.Play, 350, 220)
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this))
    this.#spPlayBtn.index = 1
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
    this.#spBaitValue.alpha = 0.67

    this.#spHomeBtn = new TSpriteButton(aSpcvs, aSPI.Home, 90, 389)
    this.#spHomeBtn.addEventListener("click", this.spHomeBtnClick.bind(this))
    this.#spHomeBtn.hidden = true
    this.#spRetryBtn = new TSpriteButton(aSpcvs, aSPI.Retry, 640, 389)
    this.#spRetryBtn.addEventListener("click", this.spRetryBtnClick.bind(this))
    this.#spRetryBtn.hidden = true
    this.#spEndScreen = new TSpriteButton(aSpcvs, aSPI.GameOver, 25, 40)
    this.#spEndScreen.hidden = true

    this.#spEndScoreD1 = new TSpriteNumber(aSpcvs, aSPI.Number, 580, 250)
    this.#spEndScoreD1.visible = false
    this.#spEndScoreD2 = new TSpriteNumber(aSpcvs, aSPI.Number, 670, 250)
    this.#spEndScoreD2.visible = false
} //constructor()

    draw(){ //Draws the the menu items.
        this.#spPlayBtn.draw()
        this.#spPauseBtn.draw()
        this.#spScoreD1.draw()
        this.#spScoreD2.draw()
        this.#spBaitValue.draw()
        this.#spEndScreen.draw()
        this.#spEndScoreD1.draw()
        this.#spEndScoreD2.draw()
        this.#spHomeBtn.draw()
        this.#spRetryBtn.draw()
    } //draw()

    spPlayBtnAnimate() {
        const now = Date.now(); //Captures the time the function started
        if (GameProps.gameStatus != EGameStatus.Playing) { //No point in running while playing
            while (now - this.#playAnimTimer > 80) {//(80 is the frames per second)
                this.#playAnimTimer = now;
                this.#spPlayBtn.index++;
                if (this.#spPlayBtn.index >= SheetData.Play.count) {//When all frames are done, it restarts the loop
                    this.#spPlayBtn.index = 0;
                }
            }
        }
    } //spPlayBtnAnimate()

    spPlayBtnClick() {//Calls newGame() and shows the score and bait value.    
        this.#spPlayBtn.hidden = true
        this.#spBaitValue.visible = true
        this.#spScoreD2.visible = true
        this.#spScoreD1.visible = true
        newGame()
    } //spPlayBtnClick()

    spPauseBtnClick() {//Changes the game status to the opposite of what the current state is (Pause-Playing). Also showcases the pause icon when paused.
        if (GameProps.gameStatus == EGameStatus.Playing) {
            this.#spPauseBtn.hidden = false
            GameProps.gameStatus = EGameStatus.Pause
        } else if (GameProps.gameStatus == EGameStatus.Pause) {
            this.#spPauseBtn.hidden = true
            GameProps.gameStatus = EGameStatus.Playing
        }
    }//spPauseBtnClick()

    scoreIncrementor(newPoints) {//Updates the current score based on the value of the bait at the time of consumption.
        this.#score += newPoints
        console.log("New Points: " + newPoints  + " Total: " + this.#score)     

        //Calculates which digit should be what value, as numbers quickly become double digits.
        this.#spScoreD1.value = Math.floor(this.#score / 10)
        this.#spScoreD2.value = this.#score % 10;  
    }//scoreIncrementor()

    spBaitValueIncrementor(currentBaitValue) { //Updates #spBaitValue with a parameter from "bait.js"
        this.#spBaitValue.value = currentBaitValue
    }

    showEndScreen() {//Creates the the game-over screen
        this.#spEndScoreD1.visible = true
        this.#spEndScoreD2.visible = true
        this.#spEndScreen.hidden = false
        //Calculates which digit should be what value, as numbers quickly become double digits.
        this.#spEndScoreD1.value = Math.floor(this.#score / 10)
        this.#spEndScoreD2.value = this.#score % 10;
        this.#spRetryBtn.hidden = false
        this.#spHomeBtn.hidden = false
    } //showEndScreen()

    spHomeBtnClick() {//Hides everything except the play button.
        this.reset()
        this.#spPlayBtn.hidden = false
    } //spHomeBtnClick()

    spRetryBtnClick() {//Hides everything then un-hides values below, as game starts instantly
        this.reset()
        this.#spScoreD1.visible = true
        this.#spScoreD2.visible = true
        this.#spBaitValue.visible = true
        newGame() //Actually creates new game
    }//spRetryBtnClick()

    reset() { //Default method for resets
        this.#spHomeBtn.hidden = true
        this.#spRetryBtn.hidden = true
        this.#spEndScreen.hidden = true
        this.#spEndScoreD1.visible = false
        this.#spEndScoreD2.visible = false
        
        this.#spScoreD1.visible = false
        this.#spScoreD2.visible = false
        this.#spBaitValue.visible = false

        this.#score = 0
        this.#spBaitValue.value = 0
    } //reset()
} //Class TMenu