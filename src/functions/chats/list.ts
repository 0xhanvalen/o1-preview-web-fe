import axios from "axios";
import { config } from "~/config";

export async function list(args: { projectId: number }) {
	const response = await axios.post(
		`${import.meta.env.VITE_SERVER_LOCATION}/chats/list`,
		{
			projectId: args.projectId,
		},
		{
			withCredentials: true,
		}
	);

	return response.data.results;
}
