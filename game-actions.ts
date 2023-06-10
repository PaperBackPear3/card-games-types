import { Card } from "./cards"

export type BetAction = {
    playerId: string,
    amount: number,
}

export type SkipAction = {
    playerId: string,
    skip: boolean,
}

export type DrawAction = {
    playerId: string,
    card: Card
}

export type QuitAction = {
    playerId: string,
    quit: boolean,
}

export type CardsGameAction = {
    cards: Card[],
    fishes: number,
}