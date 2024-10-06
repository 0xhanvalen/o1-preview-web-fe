import axios from "axios";
import { SERVER_LOCATION } from "../lib/env";

export async function get(args: { chatId: string }) {
	const response = await axios.post(
		`${SERVER_LOCATION}/chats/get`,
		{
			chatId: args.chatId,
		},
		{
			withCredentials: true,
		}
	);
	return response.data.result;
}
