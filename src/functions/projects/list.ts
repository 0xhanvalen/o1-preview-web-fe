import axios from "axios";
import { config } from "~/config";

export async function list() {
	const response = await axios.get(
		`${import.meta.env.VITE_SERVER_LOCATION}/projects/list`,
		{
			withCredentials: true,
		}
	);
	return response.data.results;
}
