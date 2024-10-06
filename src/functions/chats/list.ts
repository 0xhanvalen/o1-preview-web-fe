import axios from "axios";
import { SERVER_LOCATION } from "../lib/env";

export async function list(args: { projectId: number }) {
	const response = await axios.post(
		`${SERVER_LOCATION}/chats/list`,
		{
			projectId: args.projectId,
		},
		{
			withCredentials: true,
		}
	);

	return response.data.results;
}
