import { createSignal } from "solid-js";
import { Chat } from "../types/chat_types";

export const [chat, setChat] = createSignal({} as Chat);
export const [isSendingMessage, setIsSendingMessage] = createSignal(false);
