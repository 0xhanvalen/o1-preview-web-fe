import axios from "axios";
import { config } from "../../config";

export async function create(args: {
	message: string;
	projectId: number;
	title: string;
}) {
	console.log({ args });
	const response = await axios.post(
		`${import.meta.env.VITE_SERVER_LOCATION}/chats/create`,
		{
			message: args.message,
			projectId: args.projectId,
			title: args.title,
		},
		{ withCredentials: true }
	);

	return response.data.results;
}
