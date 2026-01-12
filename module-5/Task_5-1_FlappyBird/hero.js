"use strict"
import { TSprite } from "libSprite";

export class THero extends TSprite{
    #gravity;
    #speed;
    constructor (aSpcvs, aSPI){
        super(aSpcvs, aSPI, 200, 200)
        this.animationSpeed = 10
        this.#gravity = 9.81 / 100
        this.#speed = 0;
    }

    animate() {
        if (this.y < 400-this.height) {
            this.#speed += this.#gravity
            this.y += this.#speed
            if (this.rotation < 90){      
                this.rotation = this.#speed*25
            }
 
        } else if (this.y >= 400-this.height) {
            this.animationSpeed = 0
        }

        

    }
    
    flap() {
        this.#speed = -1.6
        this.rotation = 0
    }

}