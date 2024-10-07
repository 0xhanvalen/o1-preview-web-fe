import axios from "axios";
import { useAPI } from "../useAPI";

export async function get(args: { chatId: string }) {
	const { chatId } = args;
	const response = await useAPI({
		url: `/chats/get`,
		method: "POST",
		data: {
			chatId,
		},
	});
	if (response.status !== 200) {
		throw new Error("Failed to get chat");
	}
	return response.result;
}
