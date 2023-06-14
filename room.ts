import { Deck } from "./cards";
import { MessageData } from "./message";
import { playerData } from "./player";

export type roomData = {
    owner: string,
    players: Map<string, playerData>,
    deck: Deck,
    gameStarted: boolean,
    gameEnded: boolean,
}

export type RoomMessageData = {
    roomId: string,
    userId: string,
    message: MessageData
}