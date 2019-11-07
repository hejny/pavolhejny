import * as React from 'react';
import { ICardDesign } from '../config/interfaces';
import { CARD_DESIGNS } from '../config/config';
import { cardDesignToStyle } from '../config/cardDesignToStyle';

interface ICardProps {
    uri: string;
    title: string;
    children?: React.ReactNode;
    className?: string;
    cardDesign: ICardDesign;
}

export function Card(props: ICardProps) {
    const { children, title, className, cardDesign } = props;

    //cardDesign = cardDesign || CARD_DESIGNS.WHITE;

    return (
        <>
            <div className={['card', className].filter((x) => x).join(' ')} style={cardDesignToStyle(cardDesign)}>
                <h1>{title}</h1>
                {children}
            </div>

            <style jsx>
                {`
                    .card {
                        /**/
                        border: 1px dashed red; /**/
                        height: 50vh;
                        margin: 0;
                        padding: 30px;
                    }

                    /*
                    .about {
                        background: url('./static/background.jpg');
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-color: #000;
                    }
                    */
                `}
            </style>
        </>
    );
}
