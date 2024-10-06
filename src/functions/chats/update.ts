import axios from "axios";
import { setChat } from "~/routes/chat/signals/chat";
import { config } from "~/config";

export async function update(args: { chatId: string; message: string }) {
	const response = await axios.post(
		`${import.meta.env.VITE_SERVER_LOCATION}/chats/update`,
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
