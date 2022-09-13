import * as PIXI from "pixi.js";
import { CandleDetails } from "./interfaces";
import Candle from "./Models/Candle";

export default class Game extends PIXI.Application{
    private Candle = new Candle();
    private Candles:PIXI.Container[] = []
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
            high:100,
            low:5,
            open:80,
            close:10
        }
        const CandlesDetails:CandleDetails[]=[
            {
                high:100,
                low:20,
                open:25,
                close:85
            },
            {
                high:90,
                low:10,
                open:85,
                close:15
            },
            {
                high:70,
                low:10,
                open:65,
                close:25
            },
            {
                high:115,
                low:20,
                open:25,
                close:75
            },
            {
                high:70,
                low:0,
                open:20,
                close:65
            },
            {
                high:100,
                low:10,
                open:80,
                close:15
            },
            {
                high:90,
                low:10,
                open:25,
                close:80
            },
            {
                high:100,
                low:20,
                open:25,
                close:85
            },
            {
                high:90,
                low:10,
                open:85,
                close:15
            },
            {
                high:70,
                low:10,
                open:65,
                close:25
            },
            {
                high:105,
                low:10,
                open:45,
                close:75
            },
            {
                high:70,
                low:5,
                open:30,
                close:65
            },
            {
                high:90,
                low:18,
                open:85,
                close:45
            },
            {
                high:90,
                low:10,
                open:85,
                close:30
            },
            {
                high:105,
                low:10,
                open:35,
                close:85
            },  
            {
                high:75,
                low:10,
                open:45,
                close:70
            },
            {
                high:55,
                low:10,
                open:35,
                close:45
            },
            {
                high:85,
                low:10,
                open:75,
                close:15
            }
        ]
        CandlesDetails.forEach((CandleDetails, i) => {
            for(let c = 0; c < i; c++){
                this.Candles[c].y = this.Candles[c].y + CandleDetails.close - CandleDetails.open;
            }
            const candle = this.Candle.create(CandleDetails,{x: 50 + 15 * i, y: 300});
            this.Candles.push(candle);
            this.stage.addChild(candle);
        });
    }
    update(delta) {
        
    }
}

(window as any).context = new Game(790,580);