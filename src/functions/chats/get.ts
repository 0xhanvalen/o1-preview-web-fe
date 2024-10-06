import axios from "axios";
import { config } from "~/config";

export async function get(args: { chatId: string }) {
	const response = await axios.post(
		`${import.meta.env.VITE_SERVER_LOCATION}/chats/get`,
		{
			chatId: args.chatId,
		},
		{
			withCredentials: true,
		}
	);
	return response.data.result;
}
