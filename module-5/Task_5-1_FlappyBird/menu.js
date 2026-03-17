"use strict"
import{ TSprite, TSpriteButton, TSpriteNumber } from "libSprite"
import { startGame, soundMuted, EGameStatus, hero } from "./FlappyBird.mjs"
import { TSoundFile } from "libSound"

const fnCountDown = "./Media/countDown.mp3"
const fnRunning = "./Media/running.mp3"

export class TMenu {
    #spTitle
    #spPlayBtn
    #spHighScore

    #spCountDown
    #sfCountDown
    #sfRunning

    #spEndScreen
    #spMedal

    #spHighScoreShowcase
    #spMasterScore

    constructor(aSpcvs, aSPI) {
        this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 200)
        this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 300)  
        this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this))
        this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 190)
        this.#spCountDown.visible = false
        this.#spHighScore = new TSpriteNumber(aSpcvs, aSPI.numberBig, 500, 30)
        this.#spHighScore.visible = false

        this.#sfCountDown = null
        this.#sfRunning = null

        this.#spEndScreen = new TSprite(aSpcvs, aSPI.gameOver, 200, 100)
        this.#spEndScreen.hidden = true
        this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 226, 143)
        this.#spMedal.hidden = true

        this.#spMasterScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 386, 135)
        this.#spMasterScore.visible = false
        this.#spHighScoreShowcase = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 385, 175)
        this.#spHighScoreShowcase.visible = false
    }

    draw() {
        this.#spTitle.draw()
        this.#spPlayBtn.draw()
        this.#spCountDown.draw()
        this.#spHighScore.draw()
        this.#spEndScreen.draw()
        this.#spMedal.draw()
        this.#spMasterScore.draw()
        this.#spHighScoreShowcase.draw()
  
    }

    countDown(){
        if (this.#spCountDown.value > 0) {
            setTimeout(this.countDown.bind(this), 1000)
            this.#spCountDown.value--
            console.log(this.#spCountDown.value)
        } else {
            this.#spCountDown.visible = false
            if (soundMuted === false) {
                this.#sfRunning = new TSoundFile(fnRunning)
                this.#sfRunning.play()
            }
            this.#spHighScore.visible = true
            this.#spHighScore.alpha = 0.8
            startGame()
        }
    }

    spPlayBtnClick() {
        const checky = true
        this.#spTitle.hidden = true
        this.#spPlayBtn.hidden = true
        this.#spCountDown.visible = true
        this.#spCountDown.value = 3

        setTimeout(this.countDown.bind(this), 1000)        
        console.log("ski")

        if (soundMuted === false) {
            this.#sfCountDown = new TSoundFile(fnCountDown)
            this.#sfCountDown.play()
        }

        if (EGameStatus.state == EGameStatus.gameOver || EGameStatus.state == EGameStatus.heroIsDead) {
            hero.restart()
        }
    }

    stopSound() {
        if (soundMuted === false) {
            this.#sfRunning.stop()
        }
    }

    highScore(pAmount) {
        this.#spHighScore.value += pAmount
    }

    showGameOver() {
        this.stopSound()
        this.#spHighScore.hidden = true
        this.#spEndScreen.hidden = false
        this.#spPlayBtn.hidden = false

        this.#spHighScoreShowcase.value = this.#spHighScore.value
        if (this.#spHighScore.value >= 20 ) {
            this.#spMedal.index = 1
            console.log("gold")
        } else  if (this.#spHighScore.value >= 10 ) {
            this.#spMedal.index = 2
            console.log("silver")
        } else  if (this.#spHighScore.value >= 1 ) {
            this.#spMedal.index = 3
            console.log("bronze")
        }
        this.#spMedal.hidden = false

        if (this.#spMasterScore.value < this.#spHighScore.value) {
            this.#spMasterScore.value = this.#spHighScore.value
        }
        
        this.#spMasterScore.visible = true
        this.#spHighScoreShowcase.visible = true
    }


}