import axios from "axios";
import { useAPI } from "../useAPI";

export async function create(args: {
	message: string;
	projectId: number;
	title: string;
}) {
	const { message, projectId, title } = args;
	const response = await useAPI({
		url: "/chats/create",
		method: "POST",
		data: {
			message,
			projectId,
			title,
		},
	});

	return response.results;
}
