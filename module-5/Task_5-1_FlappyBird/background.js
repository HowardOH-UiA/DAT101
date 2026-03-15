"use strict";
import { TSprite } from "libSprite";
import { dayNight, setDayNight } from "./FlappyBird.mjs";

export class TBackground{
  #spriteBackground;
  #spriteGround;

  constructor(aSpcvs, aSPI){
    this.#spriteBackground = new TSprite(aSpcvs,aSPI.background,0,0);
    
    
    const groundPosY = aSPI.background.height - aSPI.ground.height
    this.#spriteGround = new TSprite(aSpcvs, aSPI.ground, 0, groundPosY);
  }

  drawBackground(){
    if (dayNight == 0) {
      this.#spriteBackground.index = 1
      console.log(dayNight + "hei")
      this.#spriteBackground.draw();
    
    } else if (dayNight == 1) {
      this.#spriteBackground.index = 0
      this.#spriteBackground.draw();
    } else {
      console.log(dayNight)
    }
    
  }

  drawGround () {
    this.#spriteGround.draw();
  }

  animate() {
    const x = this.#spriteGround.x +(this.#spriteGround.width/2)

    if (x<5) {
      this.#spriteGround.x = 0
    } else {
      this.#spriteGround.x--
    }
  }
}

