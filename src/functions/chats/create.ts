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

	if (response.status !== 200) {
		throw new Error("Failed to create chat");
	}

	return response.results;
}
