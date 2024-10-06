import axios from "axios";
import { config } from "~/config";

export async function create(args: { name: string }) {
	const { name } = args;
	const response = await axios.post(
		`${import.meta.env.VITE_SERVER_LOCATION}/projects/create`,
		{
			name,
		},
		{
			withCredentials: true,
		}
	);

	return response.data.results;
}
