import { Color } from "./config";


export interface ICardDesign {
    backgroundColor: Color;
    textColor: Color;
}



export  interface ICardDesigns{
    [name: string]: ICardDesign;
} 