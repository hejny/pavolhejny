import * as React from 'react';
import { ICardDesign } from './interfaces';

export function cardDesignToStyle(cardDesign: ICardDesign): React.CSSProperties{
    

    let cssProperties:React.CSSProperties = {};


    cssProperties.color = cardDesign.textColor;
    cssProperties.backgroundColor = cardDesign.backgroundColor;

    if(cardDesign.backgroundImage){
        cssProperties.background = `url('${cardDesign.backgroundImage}')`;
        cssProperties.backgroundSize = 'cover';
        cssProperties.backgroundRepeat = 'no-repeater';
    }

    return cssProperties;
}