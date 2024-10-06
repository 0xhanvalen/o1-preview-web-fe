import axios from "axios";
import { SERVER_LOCATION } from "../lib/env";

export async function create(args: { name: string }) {
	const { name } = args;
	const response = await axios.post(
		`${SERVER_LOCATION}/projects/create`,
		{
			name,
		},
		{
			withCredentials: true,
		}
	);

	return response.data.results;
}
