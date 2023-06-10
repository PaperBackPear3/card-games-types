import { playerData } from "./player";
import { RoomMessageData } from "./room";
import { BetAction, SkipAction, DrawAction } from "./game-actions";
import { MessageData } from "./message";

export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
    clientRoomId: (data: string) => void;
    roomEvent: (data: MessageData) => void;
    updatePlayerCardsEvent: (data: playerData) => void;
}

export interface ClientToServerEvents {
    joinRoom: (data: RoomMessageData, callback: (CallbackResponseData: CallbackResponseData) => void) => void;
    leaveRoom: (data: RoomMessageData, callback: (CallbackResponseData: CallbackResponseData) => void) => void;
    spectate: (data: RoomMessageData, callback: (CallbackResponseData: CallbackResponseData) => void) => void;
    startGame: (data: RoomMessageData) => void;
    playerAction: (data: MessageData) => void;
    bet: (data: BetAction, callback: (CallbackResponseData: CallbackResponseData) => void) => boolean;
    skip: (data: SkipAction, callback: (CallbackResponseData: CallbackResponseData) => void) => boolean;
    draw: (data: DrawAction, callback: (CallbackResponseData: CallbackResponseData) => void) => boolean;

}
export type CallbackResponseData = {
    success: boolean,
    type: string,
    message: string,
    data?: string,
}

export interface InterServerEvents {
    ping: () => void;
}

export interface SocketData {
    name: string;
    age: number;
}