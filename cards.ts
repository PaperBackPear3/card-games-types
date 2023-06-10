export type CardSymbol = {
    name: string;
    color: string;
    image: string;
}

export type Card = {
    symbol: CardSymbol;
    value: number;
    image: string;
    altText: string;
}

export type Deck = {
    cards: Card[];
}