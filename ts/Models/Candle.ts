import * as PIXI from "pixi.js";
import { CandleBodyDetails, CandleColor, CandleDetails, Coords, NeedleDetails } from "../interfaces";

export default class Candle {
    constructor(){
    }
    create(CandleDetails:CandleDetails,x:number){
        const color = CandleDetails.open - CandleDetails.close > 0 ? CandleColor.Red : CandleColor.Green;
        const CandleCon = new PIXI.Container();
        CandleCon.x = x;
        CandleCon.y = 100;
        const h:number = color == CandleColor.Green ? CandleDetails.high - CandleDetails.close : CandleDetails.low - CandleDetails.open;
        const candleBody = this.createCandleBody(CandleDetails, h, color);
        const needle = this.createNeedle(CandleDetails, color);
        CandleCon.addChild(needle, candleBody);

        return CandleCon
    }

    createNeedle(NeedleDetails:NeedleDetails, color:CandleColor){
        const needle = PIXI.Sprite.from(PIXI.Texture.WHITE);
        needle.tint = color;
        needle.x = 0;
        needle.y = 0;
        needle.width = 1.5;
        needle.height = Math.abs(NeedleDetails.high - NeedleDetails.low);
        color == CandleColor.Green ? needle.anchor.set(.5, 0) : needle.anchor.set(.5, 1);
        return needle
    }

    createCandleBody(CandleBodyDetails:CandleBodyDetails, h:number, color:CandleColor){
        const height = CandleBodyDetails.close - CandleBodyDetails.open;
        const candleBody = PIXI.Sprite.from(PIXI.Texture.WHITE);
        candleBody.tint = color;
        candleBody.x = 0;
        candleBody.y =  h;
        candleBody.width = 12;
        candleBody.height = height
        color == CandleColor.Green ? candleBody.anchor.set(.5, 0) : candleBody.anchor.set(.5, 1);
        return candleBody
    }
}