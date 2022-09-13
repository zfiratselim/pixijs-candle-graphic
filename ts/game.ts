import * as PIXI from "pixi.js";
import { CandleColor, CandleDetails } from "./interfaces";
import Candle from "./Models/Candle";

export default class Game extends PIXI.Application{
    private Candle = new Candle();
    constructor(w,h){
        super({
            view: <HTMLCanvasElement>document.querySelector('#canvas'),
            transparent: true,
            antialias: true,
            width: w,
            height: h
        });
        this.stage.interactive = true; 
        this.startGame();
    }
    startGame(){
        this.ticker.add(delta => this.update(delta));
        const exampleDetails:CandleDetails = {
            high:90,
            low:5,
            open:75,
            close:5
        }
        const exampleDetails2:CandleDetails = {
            high:100,
            low:20,
            open:25,
            close:85
        }
        const c = this.Candle.create(exampleDetails,100);
        const c2 = this.Candle.create(exampleDetails2,150);
        this.stage.addChild(c, c2);
        console.log(this.stage.children);
    }
    update(delta) {
        
    }
}

(window as any).context = new Game(790,580);