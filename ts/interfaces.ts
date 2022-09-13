export interface CandleDetails{
    open: number,
    close: number,
    high: number,
    low: number
}

export interface CandleBodyDetails{
    open: number,
    close: number 
}

export interface NeedleDetails{
    high: number,
    low: number
}

export interface Coords{
    x:number,
    y:number
}

export enum CandleColor{
    Green = 0x0ECB81,
    Red = 0XFC0E45
}