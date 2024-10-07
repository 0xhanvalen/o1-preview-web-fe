import axios from "axios";
import { useAPI } from "../useAPI";

export async function list(args: { projectId: number }) {
	const { projectId } = args;
	const response = await useAPI({
		url: "/chats/list",
		method: "POST",
		data: {
			projectId,
		},
	});

	return response.results;
}
