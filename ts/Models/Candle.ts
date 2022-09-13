import * as PIXI from "pixi.js";
import { CandleBodyDetails, CandleColor, CandleDetails, Coord, NeedleDetails } from "../interfaces";

export default class Candle {
    constructor(){
    }
    create(CandleDetails:CandleDetails,Coord:Coord){
        const color = CandleDetails.open - CandleDetails.close > 0 ? CandleColor.Red : CandleColor.Green;
        const h:number = color == CandleColor.Green ? CandleDetails.close - CandleDetails.high : CandleDetails.close - CandleDetails.low;
        console.log(h);
        const CandleCon = new PIXI.Container();
        CandleCon.x = Coord.x;
        CandleCon.y = Coord.y;
        const candleBody = this.createCandleBody(CandleDetails,  color);
        const needle = this.createNeedle(CandleDetails, h, color);
        CandleCon.addChild(needle, candleBody);

        return CandleCon
    }

    createNeedle(NeedleDetails:NeedleDetails, h:number, color:CandleColor){
        const needle = PIXI.Sprite.from(PIXI.Texture.WHITE);
        needle.tint = color;
        needle.x = 0;
        needle.y = h;
        needle.width = 1.5;
        needle.height = Math.abs(NeedleDetails.high - NeedleDetails.low);
        color == CandleColor.Green ? needle.anchor.set(.5, 0) : needle.anchor.set(.5, 1);
        return needle
    }

    createCandleBody(CandleBodyDetails:CandleBodyDetails,  color:CandleColor){
        const height = Math.abs(CandleBodyDetails.close - CandleBodyDetails.open);
        const candleBody = PIXI.Sprite.from(PIXI.Texture.WHITE);
        candleBody.tint = color;
        candleBody.x = 0;
        candleBody.y =  0;
        candleBody.width = 12;
        candleBody.height = height;
        color == CandleColor.Green ? candleBody.anchor.set(.5, 0) : candleBody.anchor.set(.5, 1);
        
        return candleBody
    }
}