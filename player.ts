import { Socket } from "socket.io";
import { Card } from "./cards";

export type playerData = {
    webSocket: Socket,
    //username: string,
    isSpectating: boolean,
    isReady: boolean,
    cards: Card[],
    fishes: number,
}
