import axios from "axios";
import { useAPI } from "../useAPI";

export async function create(args: { name: string }) {
	const { name } = args;
	const response = await useAPI({
		url: "/projects/create",
		method: "POST",
		data: {
			name,
		},
	});

	if (response.status === 200) {
		return response.results;
	} else {
		throw new Error("Failed to create project");
	}
}
