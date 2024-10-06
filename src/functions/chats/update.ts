import axios from "axios";
import { setChat } from "~/routes/chat/signals/chat";
import { SERVER_LOCATION } from "../lib/env";

export async function update(args: { chatId: string; message: string }) {
	const response = await axios.post(
		`${SERVER_LOCATION()}/chats/update`,
		{
			chatId: args.chatId,
			message: args.message,
		},
		{
			withCredentials: true,
		}
	);
	if (response.data.result) {
		setChat(response.data.result);
	}
	return response.data.result;
}
