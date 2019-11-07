import { ICardDesigns } from './interfaces';

export const PAGE_TITLE = 'Pavol Hejný';
export const TALKS_CSV_URL = `https://docs.google.com/spreadsheets/d/e/2PACX-1vRILhqlYdHZYOHa8_5awq6Z5bo4Sfhr2eFMjeQ7qwqDLbfR4gt44PqjfHKApmjgNbPjbc8FlStKhKiP/pub?gid=0&single=true&output=csv`;
//export const TALKS_CSV_URL = `http://localhost:3000/static/mocks/talks.csv`;

export enum Color {
    YELLOW = '#cccc11',
    BLACK = 'black',
}

export const CARD_DESIGNS: ICardDesigns = {
    ABOUT: {
        textColor: Color.BLACK,
        backgroundColor: Color.YELLOW,
        backgroundImage: './static/background.jpg',
    },
    BLACK: {
        textColor: Color.YELLOW,
        backgroundColor: Color.BLACK,
    },
    WHITE: {
        textColor: Color.BLACK,
        backgroundColor: Color.YELLOW,
    },
};
