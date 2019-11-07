import { Color } from "./config";


export interface ICardDesign {
    textColor: Color;
    backgroundColor: Color;
    backgroundImage?: string;
   
}



export  interface ICardDesigns{
    [name: string]: ICardDesign;
} 