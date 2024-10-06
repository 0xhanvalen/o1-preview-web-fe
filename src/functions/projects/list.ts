import axios from "axios";
import { SERVER_LOCATION } from "../lib/env";

export async function list() {
	const response = await axios.get(`${SERVER_LOCATION()}/projects/list`, {
		withCredentials: true,
	});
	return response.data.results;
}
