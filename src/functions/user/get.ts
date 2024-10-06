import axios from "axios";
import { SERVER_LOCATION } from "../lib/env";

export async function get() {
	const response = await axios.get(`${SERVER_LOCATION()}/user/get`, {
		withCredentials: true,
	});
	return response.data;
}
