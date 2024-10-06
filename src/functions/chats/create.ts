import axios from "axios";
import { SERVER_LOCATION } from "../lib/env";

export async function create(args: {
	message: string;
	projectId: number;
	title: string;
}) {
	const response = await axios.post(
		`${SERVER_LOCATION()}/chats/create`,
		{
			message: args.message,
			projectId: args.projectId,
			title: args.title,
		},
		{ withCredentials: true }
	);

	return response.data.results;
}
