"use strict"
import { TSprite } from "libSprite";
import { EGameStatus } from "./FlappyBird.mjs";
import { TSineWave } from "lib2d"

export class THero extends TSprite{
    #gravity;
    #speed;
    #wave

    constructor (aSpcvs, aSPI){
        super(aSpcvs, aSPI, 200, 200)
        this.animationSpeed = 10
        this.#gravity = 9.81 / 100
        this.#speed = 0;
        this.#wave = new TSineWave(1, 1)
        this.y += this.#wave.value
        
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
            }
        } else if(EGameStatus.state === EGameStatus.idle) {
            this.y += this.#wave.value
        }
    }
    
    flap() {
        this.#speed = -1.6
        this.rotation = 0
    }

}