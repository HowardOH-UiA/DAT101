"use strict";
import { TSprite } from "libSprite";
import { hero, EGameStatus, menu, dayNight} from "./FlappyBird.mjs"

const EasyFlyerGap = 150;
const HardFlyerGap = 100;
const MinimumProtrusion = 30;


export class TObstacle{
  #spUp;
  #spDown;
  #spi;
  constructor(aSpcvs, aSPI){
    const x = 600;
    this.#spi = aSPI;
    // Generate random gap height, based on difficulty settings
    const gap = Math.ceil(Math.random() * (EasyFlyerGap - HardFlyerGap) + HardFlyerGap);
    const minTop = -this.#spi.height + MinimumProtrusion; // Minimum top position for upper obstacle
    const maxTop = -MinimumProtrusion; // Maximum top position for upper obstacle
    // Genrate random top position for upper obstacle
    let top = Math.ceil(Math.random() * (maxTop - minTop) + minTop);
    const minBottom = 400 - MinimumProtrusion; // Minimum bottom position for lower obstacle
    let topWithGap = this.#spi.height + top + gap; // Initial position of bottom obstacle based on the height of the sprite, gap, and top 
    if(topWithGap > minBottom){
      // The top with gap is too low, adjust top and keep the gap constant
      const adjustment = topWithGap - minBottom;
      top -= adjustment;
      topWithGap = this.#spi.height + top + gap; // Recalculate topWithGap after adjustment
    }

    this.#spDown = new TSprite(aSpcvs, aSPI, x, topWithGap);
    this.#spUp = new TSprite(aSpcvs, aSPI, x, top);
    if (dayNight == 1) {
      this.#spDown.index = 2;
      this.#spUp.index = 3;
    } else if (dayNight == 0) {
      this.#spDown.index = 0;
      this.#spUp.index = 1;
    }
  }

  // Properties
  get x(){
    return this.#spDown.x;
  }

  draw(){
    this.#spDown.draw();
    this.#spUp.draw();
  }

  
  animate(){
    this.#spDown.x--;
    this.#spUp.x--;
    const hasCollided = hero.hasCollided(this.#spDown) || hero.hasCollided(this.#spUp)

    if (hero.x == this.#spDown.x) {
      menu.highScore(1)
    }

    if (hasCollided) { 
        console.log("d")
        console.log(EGameStatus.state)

        hero.animationSpeed = 0
        
        menu.stopSound()

        hero.flap()
        hero.dead()
    }
  }

}// End of class TObstacle