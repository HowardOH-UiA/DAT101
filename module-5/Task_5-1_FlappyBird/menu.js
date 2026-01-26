"use strict"
import{ TSprite, TSpriteButton, TSpriteNumber } from "libSprite"
import { startGame } from "./FlappyBird.mjs"
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
    }

    draw() {
        this.#spTitle.draw()
        this.#spPlayBtn.draw()
        this.#spCountDown.draw()
        this.#spHighScore.draw()

    }

    countDown(){
        if (this.#spCountDown.value > 0) {
            setTimeout(this.countDown.bind(this), 1000)
            this.#spCountDown.value--
            console.log(this.#spCountDown.value)
        } else {
            this.#spCountDown.visible = false
            this.#sfRunning = new TSoundFile(fnRunning)
            this.#sfRunning.play()
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

        this.#sfCountDown = new TSoundFile(fnCountDown)
        setTimeout(this.countDown.bind(this), 1000)        
        console.log("ski")
        this.#sfCountDown.play()
    }

    stopSound() {
        this.#sfRunning.stop()

    }

    highScore(pAmount) {
        this.#spHighScore.value += pAmount
    }

}