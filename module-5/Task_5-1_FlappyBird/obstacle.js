"use strict"
import {TSprite} from "libSprite"

const MinimumProtrusion = 30
const EasyFlyerGap = 150
const HardflyerGap = 100


export class TObstacle {
    #spUp
    #spDown
    #obstacleSpacing = 425

    constructor(aSpcvs, aSPI) {
        const gap = Math.ceil(Math.randomt)

        const w = aSpcvs.width + 55
        const h = aSpcvs.height 
        const randomPos = (Math.random()*300 + 100)

        this.#spDown = new TSprite(aSpcvs, aSPI, w, randomPos )
        this.#spDown.index = 2
        this.#spUp = new TSprite (aSpcvs, aSPI, w, this.#spDown.y - this.#obstacleSpacing )
        this.#spUp.index = 3

    }

    get x() {
        return this.#spDown.x
    }

    draw() {
        this.#spDown.draw()
        this.#spUp.draw()
    }

    animate() {
        // const x = this.#spDown.x
        // let randomPo s = (Math.random()*300 + 100)

        // if (x<-55) {
        //     this.#spDown.x = 555
        //     this.#spDown.y = randomPos

        //     this.#spUp.x = this.#spDown.x
        //     this.#spUp.y = this.#spDown.y - this.#obstacleSpacing

        // } else {
            this.#spDown.x--
            this.#spUp.x--
            
        // }

    }
}