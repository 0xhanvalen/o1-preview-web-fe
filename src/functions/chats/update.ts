import axios from "axios";
import { setChat } from "~/routes/chat/signals/chat";
import { useAPI } from "../useAPI";

export async function update(args: { chatId: string; message: string }) {
	const { chatId, message } = args;
	const response = await useAPI({
		url: `/chats/update`,
		method: "POST",
		data: {
			chatId,
			message,
		},
	});
	if (response.result) {
		setChat(response.result);
	}
	return response.result;
}
