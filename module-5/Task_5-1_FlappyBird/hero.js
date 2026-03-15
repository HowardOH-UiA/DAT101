"use strict"
import { TSprite } from "libSprite";
import { EGameStatus, menu, soundMuted  } from "./FlappyBird.mjs";
import { TSineWave } from "lib2d"
import { TSoundFile } from "libSound"

const fnfood = "./Media/food.mp3"
const fnHeroIsDead = "./Media/heroIsDead.mp3"
const fnGameOver = "./Media/gameOver.mp3"


export class THero extends TSprite{
    #gravity;
    #speed;
    #wave
    #sfFood
    #sfHeroIsDead
    #sfGameOver

    constructor (aSpcvs, aSPI){
        super(aSpcvs, aSPI, 200, 200)
        this.animationSpeed = 10
        this.#gravity = 9.81 / 100
        this.#speed = 0;
        this.#wave = new TSineWave(1, 1)
        this.y += this.#wave.value
        this.#sfFood = null
        this.#sfHeroIsDead = null
        this.#sfGameOver = null
        
    }

    eat() {
        if (soundMuted === false) {
            if (this.#sfFood === null) {
                this.#sfFood = new TSoundFile(fnfood)
                this.#sfFood.play()
            } else {
                this.#sfFood.stop()
            }
            this.#sfFood.play()
            }
        else {
            console.log(soundMuted)
        }

        menu.highScore(3)



    }

    animate() {
        const hasGravity = EGameStatus.state == EGameStatus.gaming || EGameStatus.state ==EGameStatus.heroIsDead
        if (hasGravity) {
            if (this.y < 400-this.height) {
                this.#speed += this.#gravity
                this.y += this.#speed
                if (this.rotation < 90){      
                    this.rotation = this.#speed*25
                }
    
            } else {
                this.animationSpeed = 0
                EGameStatus.state = EGameStatus.gameOver
                if (soundMuted === false) {
                    this.#sfGameOver = new TSoundFile(fnGameOver)
                    this.#sfGameOver.play()
                    menu.stopSound()
                }
            }
        } else if(EGameStatus.state === EGameStatus.idle) {
            this.y += this.#wave.value
        }
    }
    
    dead() {
        if (soundMuted === false) {
            this.#sfHeroIsDead = new TSoundFile(fnHeroIsDead) 
            this.#sfHeroIsDead.play()
        }
        EGameStatus.state =EGameStatus.heroIsDead
    }

    flap() {
        this.#speed = -1.6
        this.rotation = 0
    }

}